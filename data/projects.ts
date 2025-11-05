
export interface Project {
    id: string;
    title: string;
    subtitle: string;
    heroImage?: string;
    heroImagePublicId?: string;
    descriptionTitle: string;
    descriptionBody: string;
    galleryImages?: string[];
    finalQuote: string;
    learnMoreDescription: string;
    learnMoreButtonColor: string;
    learnMoreButtonTextColor: string;
    cloudinaryFolder?: string;
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
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/674fb07fefd10dd2fb75e1e5_Devavone_Lowkey%20Image%205-gigapixel-R1-hq-width-7680px.webp",
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/6623111be8288ee06538ea5a_HERO-clean.webp",
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
        heroImage: 'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/BarricadeA1.png',
        heroImagePublicId: 'BarricadeA1',
        descriptionTitle: 'Streamlining Law Enforcement with AI-Powered Reporting',
        descriptionBody: 'I was tasked to visually communicate the worlds first automated AI police reporting system for Barricade AI. Working closely with the team we designed a modern visually compelling way to show how automating police reports allows more police to be on the streets not at their desk allowing them to do their job.',
        galleryImages: [
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/Screenshot_2025-02-15_140536_g2puqw.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248476/Screenshot_2025-02-15_140929_yv2kef.png',

            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/Screenshot_2025-02-15_140944_ivwywm.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/Screenshot_2025-02-15_140821_hndilw.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248476/Screenshot_2025-02-15_140801_lngara.png',

            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248476/Screenshot_2025-02-15_140911_r5teck.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/Screenshot_2025-02-15_140840_iirzbn.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248477/Screenshot_2025-02-15_141101_pdltrm.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248478/Screenshot_2025-02-15_141003_vrk2vy.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248478/Screenshot_2025-02-15_142131_dcsu78.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248478/Screenshot_2025-02-15_142302_ughpaq.png',
            'https://res.cloudinary.com/dzmximawj/image/upload/f_auto,q_auto/v1762248478/Screenshot_2025-02-15_142318_sozam9.png',
        ],
        finalQuote: 'I am consistently re-invent industry standards pushing towards innovation using cutting-edge design and tech to deliver the best results.',
        learnMoreDescription: 'Barricade AI streamlines law enforcement operations by using artificial intelligence to simplify the process of creating and managing police reports.',
        learnMoreButtonColor: 'bg-yellow-300',
        learnMoreButtonTextColor: 'text-black',
        cloudinaryFolder: 'pcdBarricade',
    },
    {
        id: 'omni-think',
        title: 'Omni Think',
        subtitle: 'Delivering the worlds fastest internet to millions',
        heroImage: 'https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11b5a5aa2c7918f7fcb73_Screenshot%202025-02-15%20145217.png',
        descriptionTitle: 'Delivering The Fastest Internet in the World',
        descriptionBody: "Tasked by Google Fiber, I had an opportunity to illustrate the necessity and versatility of the world's fastest Internet for users worldwide. Opting to spotlight its profound impact on daily experiences, I set out to showcase the device's transformative capabilities.",
        galleryImages: [
            "https://cdn.prod.website-files.com/65dfcc50263944170d94aa61/67b11b5a5aa2c7918f7fcb73_Screenshot%202025-02-15%20145217.png",
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
];
