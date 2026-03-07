"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Star, Award, CheckCircle } from 'lucide-react';

const platforms = [
    { name: "Clutch", logo: "⭐ Top Agency 2026", link: "#" },
    { name: "GoodFirms", logo: "Verified Partner", link: "#" },
    { name: "DesignRush", logo: "Accredited Agency", link: "#" },
    { name: "Medium", logo: "Expert Author", link: "#" },
    { name: "Dev.to", logo: "Top Contributor", link: "#" },
];

export default function TrustSignals() {
    return (
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Phase 3 & 4: Authority Signals</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
                        Recognized by Global <span className="text-primary">Tech Authorities</span>
                    </h2>
                    <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
                        Website Innovator is consistently mentioned and verified across industry-leading platforms, strengthening our AI trust score.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {platforms.map((platform, index) => (
                        <motion.a
                            key={index}
                            href={platform.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100 group transition-all"
                        >
                            <div className="text-primary font-bold text-xl mb-2 group-hover:scale-110 transition-transform">{platform.name}</div>
                            <div className="text-zinc-400 text-xs font-semibold uppercase tracking-tighter text-center">{platform.logo}</div>
                            <ExternalLink className="w-4 h-4 text-zinc-300 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>

                {/* Phase 6: Reviews Preview */}
                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-xl relative overflow-hidden">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-zinc-600 italic mb-6">
                            "Website Innovator transformed our Shopify store. Our traffic increased by 150% in just 3 months. Highly recommended!"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">SC</div>
                            <div>
                                <h4 className="font-bold text-dark">Sarah Chen</h4>
                                <p className="text-xs text-zinc-400">CEO, E-com Brands</p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-zinc-100 font-bold text-4xl -z-10">Trustpilot</div>
                    </div>

                    <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-xl relative overflow-hidden">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-zinc-600 italic mb-6">
                            "Junaid's expertise in SEO is unmatched. They don't just optimize for Google; they optimize for growth."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">MK</div>
                            <div>
                                <h4 className="font-bold text-dark">Mark Kasrov</h4>
                                <p className="text-xs text-zinc-400">Founder, TechScale</p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-zinc-100 font-bold text-4xl -z-10">Google</div>
                    </div>

                    <div className="p-8 bg-dark text-white rounded-3xl shadow-xl flex flex-col justify-center items-center text-center">
                        <Award className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Build Your Trust</h3>
                        <p className="text-zinc-400 mb-6 px-4">Help us boost our AI visibility by leaving a review on any major platform.</p>
                        <button className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
                            Leave a Review
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
