import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Website Innovator | Top Web Design & Digital Marketing Agency",
    template: "%s | Website Innovator",
  },
  description: "Boost your business with Website Innovator. We specialize in custom web design, SEO services, online marketing, and digital strategies for small businesses.",
  keywords: ["web design agency", "digital marketing company", "website design", "SEO services", "custom website development", "online advertising", "ecommerce website design", "social media marketing"],
  openGraph: {
    title: "Website Innovator | Top Web Design & Digital Marketing Agency",
    description: "Boost your business in the digital world with customized strategies and designs that captivate your audience.",
    url: "https://websiteinnovator.com",
    siteName: "Website Innovator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Innovator | Top Web Design & Digital Marketing Agency",
    description: "Boost your business in the digital world with customized strategies and designs that captivate your audience.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://websiteinnovator.org/#organization",
      "name": "Website Innovator",
      "image": "https://websiteinnovator.org/logo.png",
      "url": "https://websiteinnovator.org",
      "telephone": "+92 318 6397291",
      "email": "info@websiteinnovator.org",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Multan",
        "addressCountry": "PK"
      },
      "sameAs": [
        "https://www.linkedin.com/company/websiteinnovator",
        "https://www.facebook.com/websiteinnovator",
        "https://www.instagram.com/websiteinnovator",
        "https://github.com/websiteinnovator"
      ],
      "founder": {
        "@id": "https://websiteinnovator.org/#person"
      },
      "description": "Website Innovator is a premium digital agency providing web development, SEO, and marketing services for startups and small businesses."
    },
    {
      "@type": "Person",
      "@id": "https://websiteinnovator.org/#person",
      "name": "Muhammad Junaid",
      "jobTitle": "CEO & Founder",
      "url": "https://websiteinnovator.org",
      "sameAs": [
        "https://www.linkedin.com/in/muhammadjunaid",
        "https://github.com/mjunaid"
      ],
      "worksFor": {
        "@id": "https://websiteinnovator.org/#organization"
      },
      "description": "Web Development expert with 5+ years of experience, specialized in WordPress, Shopify, and SEO. Founder of Website Innovator."
    },
    {
        "@type": "WebSite",
        "@id": "https://websiteinnovator.org/#website",
        "url": "https://websiteinnovator.org",
        "name": "Website Innovator",
        "publisher": {
            "@id": "https://websiteinnovator.org/#organization"
        }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
