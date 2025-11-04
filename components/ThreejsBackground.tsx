'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreejsBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // --- Basic setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 200;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);

        // --- Content ---
        const networkGroup = new THREE.Group();
        scene.add(networkGroup);
        
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const nodeCount = isMobile ? 80 : 200;
        interface NodeMetadata {
            originalPosition: THREE.Vector3;
            pulsePhase: number;
            driftSpeed: number;
            driftRadius: number;
        }
        type NetworkNode = THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial> & {
            userData: NodeMetadata;
        };
        const nodes: NetworkNode[] = [];
        const nodeSizes = [1, 1.5, 2, 2.5, 3];
        const spread = 700;

        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            const size = nodeSizes[Math.floor(Math.random() * nodeSizes.length)];
            const sphereGeometry = new THREE.SphereGeometry(size, 16, 16);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: Math.random() * 0.5 + 0.3
            });
            const node = new THREE.Mesh(sphereGeometry, sphereMaterial) as NetworkNode;
            node.position.set(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread
            );
            node.userData = {
                originalPosition: node.position.clone(),
                pulsePhase: Math.random() * Math.PI * 2,
                driftSpeed: 0.1 + Math.random() * 0.2,
                driftRadius: 5 + Math.random() * 15
            };
            nodes.push(node);
            networkGroup.add(node);
        }
        
        // Create lines
        const connectDistance = isMobile ? 55 : 75; // Slightly increased distance for more constellations
        const maxConnections = nodeCount * 3; // Slightly more connections
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(maxConnections * 3 * 2); 
        const lineColors = new Float32Array(maxConnections * 3 * 2);

        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
        lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
        });

        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        networkGroup.add(lines);

        // --- Interaction ---
        const mouse = new THREE.Vector2(0, 0);
        const updateMousePosition = (clientX: number, clientY: number) => {
            mouse.x = (clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(clientY / window.innerHeight) * 2 + 1;
        };
        
        const handleMouseMove = (event: MouseEvent) => updateMousePosition(event.clientX, event.clientY);
        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length > 0) updateMousePosition(event.touches[0].clientX, event.touches[0].clientY);
        };

        document.addEventListener("mousemove", handleMouseMove, false);
        document.addEventListener("touchmove", handleTouchMove, { passive: true });

        // --- Animation ---
        let animationFrameId: number;
        const clock = new THREE.Clock();
        
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            networkGroup.rotation.x += (mouse.y * 0.2 - networkGroup.rotation.x) * 0.02;
            networkGroup.rotation.y += (mouse.x * 0.2 - networkGroup.rotation.y) * 0.02;

            networkGroup.rotation.y += 0.0003;
            networkGroup.rotation.x += 0.0004;

            nodes.forEach(node => {
                const floatX = Math.sin(elapsedTime * node.userData.driftSpeed + node.userData.pulsePhase) * node.userData.driftRadius;
                const floatY = Math.cos(elapsedTime * node.userData.driftSpeed + node.userData.pulsePhase) * node.userData.driftRadius;
                node.position.x = node.userData.originalPosition.x + floatX;
                node.position.y = node.userData.originalPosition.y + floatY;
            });
            
            // Update lines
            let lineCount = 0;
            const posAttr = lines.geometry.getAttribute('position');
            const colAttr = lines.geometry.getAttribute('color');
            const lineColor = new THREE.Color(0x555555); // Darker color for subtlety

            for (let i = 0; i < nodeCount; i++) {
                for (let j = i + 1; j < nodeCount; j++) {
                    if (lineCount >= maxConnections) break;
                    const nodeA = nodes[i];
                    const nodeB = nodes[j];
                    const dist = nodeA.position.distanceTo(nodeB.position);

                    if (dist < connectDistance) {
                        const alpha = Math.max(0, 1 - dist / connectDistance);

                        posAttr.setXYZ(lineCount * 2, nodeA.position.x, nodeA.position.y, nodeA.position.z);
                        posAttr.setXYZ(lineCount * 2 + 1, nodeB.position.x, nodeB.position.y, nodeB.position.z);
                        
                        const color = lineColor.clone().multiplyScalar(alpha);
                        colAttr.setXYZ(lineCount * 2, color.r, color.g, color.b);
                        colAttr.setXYZ(lineCount * 2 + 1, color.r, color.g, color.b);

                        lineCount++;
                    }
                }
                if (lineCount >= maxConnections) break;
            }

            lines.geometry.setDrawRange(0, lineCount * 2);
            posAttr.needsUpdate = true;
            colAttr.needsUpdate = true;
            
            renderer.render(scene, camera);
        };
        animate();

        // --- Resizing ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // --- Cleanup ---
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchmove", handleTouchMove);
            cancelAnimationFrame(animationFrameId);

            scene.traverse(object => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default ThreejsBackground;
