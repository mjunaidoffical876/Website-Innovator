import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Quote",
    description: "Reach out to Website Innovator for a free consultation on web design, SEO, and digital marketing services.",
    keywords: ["contact web design agency", "request a quote", "digital marketing contact", "web development inquiry"],
};
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Contact />
            <FAQ />
            <Footer />
        </main>
    );
}
