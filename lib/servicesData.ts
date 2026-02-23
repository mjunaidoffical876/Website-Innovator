import { Search, Code, TrendingUp, Smartphone, Palette, Globe } from 'lucide-react';

export const servicesData = [
    {
        slug: "seo-strategy",
        icon: Search,
        title: "SEO Strategy",
        desc: "Search engine optimization for maximum visibility.",
        problem: "You have a stellar business, but potential customers simply can't find you on Google. You are losing valuable daily leads and revenue to competitors simply because they rank higher in search engine results.",
        solution: "We optimize your digital presence from the ground up. By targeting high-intent keywords, improving your website's technical health, and building authoritative backlinks, we push your brand to the top of search results where it actively captures organic traffic.",
        features: ["High-Intent Keyword Research", "Technical On-Page SEO", "Authoritative Link Building", "Competitor & Rank Tracking"]
    },
    {
        slug: "web-design",
        icon: Palette,
        title: "Web Design",
        desc: "Modern interfaces focused on the user.",
        problem: "An outdated website or confusing interface is actively repelling your hard-earned traffic. If visitors can't navigate your site intuitively or it looks unprofessional, they will leave before ever seeing the value of your offer.",
        solution: "We craft stunning, lightning-fast digital experiences focused strictly on user behavior psychology. By combining premium aesthetics with friction-less navigation, we keep your audience engaged and seamlessly guide them toward clicking 'buy' or reaching out.",
        features: ["Conversion-Focused UI/UX", "Mobile-First Responsiveness", "Interactive Prototyping", "Brand Identity Integration"]
    },
    {
        slug: "development",
        icon: Code,
        title: "Development",
        desc: "Clean and scalable code for your platform.",
        problem: "Off-the-shelf templates and restrictive software are holding your operations back. You need custom functionality and reliable integrations, but your current tech stack breaks under pressure as your traffic and complexity grow.",
        solution: "We engineer tailored, high-performance web applications using cutting-edge technologies. From complex third-party API integrations to completely bespoke e-commerce engines, we build robust, secure platforms designed to easily handle your commercial scale.",
        features: ["Custom Software Architecture", "Seamless API Integrations", "E-commerce Engineering", "Speed & Core Web Vitals"]
    },
    {
        slug: "marketing",
        icon: TrendingUp,
        title: "Marketing",
        desc: "Campaigns oriented to real conversion.",
        problem: "You are spending heavily on digital ads and getting clicks, but they aren't turning into actual sales. Without a tightly targeted, data-driven approach, marketing budgets vanish quickly with terrible return on investment.",
        solution: "We execute precision-targeted digital campaigns that focus entirely on absolute ROI and revenue. By analyzing deep audience data, retargeting correctly, and split-testing creatives, we capture high-quality leads that actually convert.",
        features: ["Data-Driven Ad Campaigns", "Audience Retargeting", "Conversion Rate Optimization", "Automated Email Sequences"]
    },
    {
        slug: "app-design",
        icon: Smartphone,
        title: "App Design",
        desc: "Fluid and attractive mobile experiences.",
        problem: "Your customers expect a flawless mobile experience, but your current mobile usability is clunky. Poor mobile formatting causes immediate frustration, leading to massive cart abandonment and uninstalls.",
        solution: "We design fluid, intuitive native and cross-platform mobile interfaces. We prioritize user journey mapping, ergonomic touch targets, and responsive micro-interactions to deliver a mobile experience that users actually love to keep on their phones.",
        features: ["iOS & Android Interface Design", "Ergonomic Wireframing", "User Journey Mapping", "Interactive Animations"]
    },
    {
        slug: "hosting",
        icon: Globe,
        title: "Hosting",
        desc: "Security and speed for your website.",
        problem: "Frequent server downtime, sluggish load speeds, and frightening security vulnerabilities are eroding trust. When your site crashes or loads slowly, customers immediately bounce to a competitor.",
        solution: "We deploy enterprise-grade, ultra-secure hosting architecture with 99.9% guaranteed uptime. Surrounded by automated daily backups, SSL encryption, and integrated global CDNs, your platform stays lightning-fast and bulletproof 24/7.",
        features: ["99.9% Guaranteed Uptime", "Automated Daily Backups", "Global CDN Distribution", "Advanced Threat Protection"]
    }
];
