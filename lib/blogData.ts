export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    date: string;
    category: "Web Design" | "Digital Marketing" | "Branding" | "AI & SEO";
    image: string;
    excerpt: string;
    content?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "strategic-web-design-2026",
        title: "10 Reasons Why Your Business Needs a Strategic Web Design",
        date: "Oct 15, 2026",
        category: "Web Design",
        excerpt: "In 2026, a website is more than just a digital business card. It's your most powerful sales tool. Learn how strategic design impacts your bottom line.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 2,
        slug: "seo-mastery-ai-age",
        title: "How to Master SEO in the Age of AI Content",
        date: "Nov 02, 2026",
        category: "Digital Marketing",
        excerpt: "As search engines evolve into answer engines, traditional SEO is changing. Discover how to optimize for LLMs and AI search tools.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop"
    },
    {
        id: 3,
        slug: "future-of-branding-voice",
        title: "What is the Future of Branding: Finding Your Voice",
        date: "Dec 10, 2026",
        category: "Branding",
        excerpt: "With so much noise in the digital space, brand voice is what sets you apart. Here's how to develop a brand that resonates with humans and AI.",
        image: "https://images.unsplash.com/photo-1542324816-c146e4c74070?q=80&w=1480&auto=format&fit=crop"
    },
    {
        id: 4,
        slug: "wordpress-vs-shopify-2026",
        title: "WordPress vs Shopify: The Definitive 2026 Comparison",
        date: "Jan 05, 2027",
        category: "Web Design",
        excerpt: "Choosing the right platform is critical. We compare performance, SEO capabilities, and ease of use for the leading CMS platforms.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop"
    },
    {
        id: 5,
        slug: "local-seo-strategy-startups",
        title: "Local SEO Strategy for Small Businesses and Startups",
        date: "Feb 12, 2027",
        category: "AI & SEO",
        excerpt: "Dominating your local market starts with a strong map presence and localized content. Here is our step-by-step checklist.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1631&auto=format&fit=crop"
    }
];
