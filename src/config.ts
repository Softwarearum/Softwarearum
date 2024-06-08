// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https://softwarearum.vercel.app/", // Always put "/" at the end of the URL
    author: "Ian McClue | Softwarearum",
    desc: "Softwarearum Website",
    title: "Softwarearum | Project Portfolio",
    ogImage: "images/S..png",
    keywords:
        "Project portfolio, landing page, Softwarearum",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/FiatluxlabsCo",
        icon: "ph:github-logo-duotone",
        title: `Follow ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Facebook",
        href: "https://github.com/Ian-nocta",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "https://github.com/Ian-nocta",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: false
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ian-mcclue-92786515a/",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:ian@fiatluxlabs.co",
        title: `Send an email to ${SITE.title}`,
        icon: "ph:envelope-simple-bold",
        active: true
    },
    {
        name: "Twitter",
        href: "https://github.com/Ian-nocta",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: false
    },
    {
        name: "YouTube",
        href: "https://github.com/Ian-nocta",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "https://github.com/Ian-nocta",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    },
    {
        name: "Snapchat",
        href: "https://github.com/Ian-nocta",
        icon: "",
        title: `${SITE.title} on Snapchat`,
        active: false
    },
    {
        name: "CodePen",
        href: "https://github.com/Ian-nocta",
        icon: "",
        title: `${SITE.title} on CodePen`,
        active: false
    },
    {
        name: "Discord",
        href: "https://github.com/Ian-nocta",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    }
];
