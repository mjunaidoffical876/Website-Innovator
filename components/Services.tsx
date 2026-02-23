"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

export default function Services() {
    return (
        <section className="py-40 gradient-bg relative overflow-hidden " id="services">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm"> What we do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Digital Solutions <span className="text-secondary">for your Business</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        We offer a complete range of services to make your business stand out in today's digital ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((item, index) => (
                        <Link href={`/services/${item.slug}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group"
                            >
                                <item.icon className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
