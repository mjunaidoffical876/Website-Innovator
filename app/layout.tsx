import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  "@type": "ProfessionalService",
  "name": "Website Innovator",
  "image": "https://websiteinnovator.com/logo.png",
  "url": "https://websiteinnovator.com",
  "telephone": "+923186397291",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Quito",
    "addressCountry": "Ecuador"
  },
  "sameAs": [
    "https://www.linkedin.com/company/websiteinnovator",
    "https://twitter.com/websiteinnovator"
  ],
  "priceRange": "$$",
  "description": "Premium web design and digital marketing agency offering SEO, custom web development, and digital strategies for growth."
};

import { LanguageProvider } from '@/app/LanguageContext';

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
        <LanguageProvider>{children}</LanguageProvider>

        {/* Google Translate Integration */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script id="google-translate-config" strategy="beforeInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,de,ar,fr',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
