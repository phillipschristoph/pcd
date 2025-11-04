
export interface Project {
    id: string;
    title: string;
    subtitle: string;
    heroImage: string;
    descriptionTitle: string;
    descriptionBody: string;
    galleryImages: string[];
    finalQuote: string;
    learnMoreDescription: string;
    learnMoreButtonColor: string;
    learnMoreButtonTextColor: string;
}

export const projects: Project[] = [
    {
        id: 'devavonne-ai',
        title: 'DEVAVONNE AI',
        subtitle: 'Revolutionizing the fashion world with AI',
        heroImage: 'https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66052cc2d5339cffb2142409_Devavonne_Edgy_2048.webp',
        descriptionTitle: 'Revolutionizing the Fashion World with AI',
        descriptionBody: 'Devavonne AI pioneers the integration of artificial intelligence in the fashion industry, creating personalized and predictive style experiences. We partnered with them to build a brand and digital presence that reflects their cutting-edge technology.',
        galleryImages: [
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66052cc2d5339cffb2142409_Devavonne_Edgy_2048.webp",
        ],
        finalQuote: 'A project focused on blending high-fashion aesthetics with high-tech functionality, setting a new standard for digital fashion platforms.',
        learnMoreDescription: 'Devavonne AI pioneers the integration of artificial intelligence in the fashion industry, creating personalized and predictive style experiences.',
        learnMoreButtonColor: 'bg-yellow-300',
        learnMoreButtonTextColor: 'text-black',
    },
    {
        id: 'google-fiber',
        title: 'GOOGLE FIBER',
        subtitle: 'Delivering the worlds fastest internet to millions',
        heroImage: 'https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef55045103ed190c1a8_Fiber2.webp',
        descriptionTitle: 'Delivering The Fastest Internet in the World',
        descriptionBody: "Tasked by Google Fiber, I had an opportunity to illustrate the necessity and versatility of the world's fastest Internet for users worldwide. Opting to spotlight its profound impact on daily experiences, I set out to showcase the device's transformative capabilities.",
        galleryImages: [
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/6605ca203f11ab0002656b6b_Fiber-hero.webp",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef5614bc94bdbf5f88e_Fiber5.webp",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef4496490cee58cb36b_Fiber3.webp",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef47109e4b4757b459d_Fiber4.webp",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/66054ef48df3e25ab81d5e29_Fiber11.webp"
        ],
        finalQuote: 'I am consistently re-invent industry standards pushing towards innovation using cutting-edge design and tech to deliver the best results.',
        learnMoreDescription: "Google Fiber starts with a connection that is up to 100 times faster than today's average broadband speeds. Instant downloads. Crystal clear high definition TV. And endless possibilities.",
        learnMoreButtonColor: 'bg-blue-600',
        learnMoreButtonTextColor: 'text-white',
    },
    {
        id: 'barricade-ai',
        title: 'BARRICADE AI',
        subtitle: 'Making police reports with AI',
        heroImage: 'https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114400778c8023e8af83f_Screenshot%202025-02-15%20140704.png',
        descriptionTitle: 'Streamlining Law Enforcement with AI-Powered Reporting',
        descriptionBody: 'Barricade AI was developed to revolutionize the process of filing police reports. By leveraging artificial intelligence, we designed a platform that simplifies data entry, reduces administrative overhead for officers, and improves the accuracy and accessibility of incident reports for the public.',
        galleryImages: [
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b1143f357d2145bcda69bc_Screenshot%202025-02-15%20140536.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114400778c8023e8af83f_Screenshot%202025-02-15%20140704.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11440e9085fb796023c2b_Screenshot%202025-02-15%20140729.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11441cf1ec1938b4294c2_Screenshot%202025-02-15%20140821.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11441cf1ec1938b4294d6_Screenshot%202025-02-15%20140911.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b114428526b4ba5c2cab2c_Screenshot%202025-02-15%20140944.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11442d98df6fd29bd3464_Screenshot%202025-02-15%20140840.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11443cf04327d71d4a635_Screenshot%202025-02-15%20141101.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b1144301903fd77fd5fb16_Screenshot%202025-02-15%20142131.png",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11443ad08650c0f5f0c2e_Screenshot%202025-02-15%20142209.png"
        ],
        finalQuote: 'I am consistently re-invent industry standards pushing towards innovation using cutting-edge design and tech to deliver the best results.',
        learnMoreDescription: 'Barricade AI streamlines law enforcement operations by using artificial intelligence to simplify the process of creating and managing police reports.',
        learnMoreButtonColor: 'bg-yellow-300',
        learnMoreButtonTextColor: 'text-black',
    }
];
