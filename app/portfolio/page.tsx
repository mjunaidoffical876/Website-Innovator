import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "Case Studies & Our Development Portfolio",
    description: "View our recent web design and marketing case studies to see how we help global and local businesses generate leads and sales.",
    keywords: ["web design portfolio", "digital agency work", "website development case studies", "marketing strategy results"],
};
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Portfolio />

            <Footer />
        </main>
    );
}
