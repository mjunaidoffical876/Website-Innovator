"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    return (
        <section className="py-40 bg-white" id="about">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 10, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl h-[400px] flex items-center justify-center overflow-hidden"
                >
                    {/* Placeholder for About image or decorative element */}
                    <div className="absolute ">
                        <img
                            src="/Container.png" // We'll move the generated image here
                            alt="Professional Team"
                            className="object-cover h-full w-full mt-10"
                        />
                    </div>
                    <p className="text-zinc-300 font-bold text-6xl opacity-20 transform -rotate-12 uppercase">Our History</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">Meet the Visionary </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">
                        Led by <span className="text-primary">Muhammad Junaid</span>
                    </h2>
                    <div className="space-y-4">
                        <p className="text-zinc-600 text-lg leading-relaxed font-semibold">
                            CEO & Founder | 5+ Years of Digital Excellence
                        </p>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Under the leadership of Muhammad Junaid, winner of the <span className="text-primary font-bold">"Best Teacher Award – TechSpot"</span>, Website Innovator has become a cornerstone for SMEs and startups seeking real digital growth.
                        </p>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            With half a decade of deep expertise in WordPress, Shopify, and Advanced SEO, we don't just create websites — we engineer powerful sales engines that turn clicks into loyal customers.
                        </p>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Our mission is simple: to democratize high-end digital growth solutions for emerging businesses, combining creative soul with data-driven strategy.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Link href="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                            Start your growth journey today <span className="text-xl">→</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
