import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "Professional Digital Marketing & Web Design Services",
    description: "Explore our range of digital marketing services, including responsive web design, SEO, PPC management, and social media strategies.",
    keywords: ["web design services", "responsive web design", "SEO services", "PPC management", "social media marketing", "ecommerce website design", "digital advertising"],
};
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-24 hover:bg-black group"> 
                <Services />
            </div>
            <FAQ />
            <Footer />
        </main>
    );
}
