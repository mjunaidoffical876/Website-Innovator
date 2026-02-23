import { servicesData } from '@/lib/servicesData';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find(s => s.slug === slug);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} Services`,
        description: service.desc,
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-[#0f0022] text-white selection:bg-secondary/30 font-sans">
            <Header />

            <section className="pt-40 pb-20 gradient-bg relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#services" className="inline-flex items-center text-white/70 hover:text-secondary mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="flex items-center gap-6 mb-8">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <Icon className="w-12 h-12 text-secondary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            {service.title}
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
                        {service.fullDesc}
                    </p>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold mb-12">What's included in this service</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                    <span className="text-lg text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 p-10 gradient-bg rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 text-white">Ready to start?</h3>
                            <p className="text-white/70 text-lg">Let's discuss how our {service.title} service can help your business grow.</p>
                        </div>
                        <Link href="/contact" className="relative z-10 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shrink-0 whitespace-nowrap shadow-[0_0_30px_rgba(20,241,149,0.3)]">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
