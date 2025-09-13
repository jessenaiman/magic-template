import { Metadata } from "next";
import { siteConfig } from "@/src/app/lib/site";

export const metadataKeywords = [
    "React",
    "Component Library",
    "UI Components",
    "Design System",
    "Frontend Development",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Accessibility",
    "Performance",
    "Open Source",
    "Developer Tools",
    "Productivity",
    "User Interface",
    "UX Design",
    "Responsive Design",
    "CSS-in-JS",
    "Storybook",
    "Component-Driven Development",
    "Web Development",
    "Tutorials",
    "Modern Design Workshop",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Web Design Workshop",
            url: "https://design.omega-spiral.com",
        },
    ],
    creator: "Dice Wizard",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@dice_wizard",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};