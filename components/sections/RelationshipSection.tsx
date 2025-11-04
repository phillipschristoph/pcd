import React from 'react';
import { RelationshipIcon } from '../icons/RelationshipIcon';

const RelationshipSection: React.FC = () => {
    return (
        <section className="bg-[rgba(0,0,0,.97)] py-20 md:py-40 lg:py-48 flex flex-col items-center justify-center text-center px-4">
            <RelationshipIcon className="w-48 h-48 mb-8 text-yellow-300"/>
            <p 
                className="max-w-3xl text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] font-raleway"
            >
                I don&apos;t just make pretty things, I build life long relationships.
            </p>
        </section>
    );
};

export default RelationshipSection;
