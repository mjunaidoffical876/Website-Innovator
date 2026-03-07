"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
    limit?: number;
}

export default function Services({ limit }: ServicesProps) {
    const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

    return (
        <section className="py-40 gradient-bg relative overflow-hidden" id="services">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold uppercase tracking-widest text-sm block"
                    >
                        Expertise & Innovation
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
                    >
                        Premium <span className="text-secondary italic">Digital Solutions</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-xl leading-relaxed"
                    >
                        Empowering startups and SMEs with cutting-edge technology and human-centric design strategy.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {displayedServices.map((item, index) => (
                        <Link href={`/services/${item.slug}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group p-8 h-full bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 hover:border-secondary/30 transition-all cursor-pointer relative overflow-hidden flex flex-col items-start shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -mr-16 -mt-16 group-hover:bg-secondary/10 transition-colors"></div>
                                
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 text-secondary" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors line-clamp-1">{item.title}</h3>
                                <p className="text-white/50 text-lg leading-relaxed mb-8 grow line-clamp-3">{item.desc}</p>
                                
                                <div className="flex items-center gap-2 text-secondary font-bold group/btn">
                                    Explore <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {limit && (
                    <div className="text-center">
                        <Link href="/services" className="inline-flex items-center gap-3 bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all group">
                            Explore All Services 
                            <div className="bg-primary/20 p-2 rounded-full group-hover:translate-x-2 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

