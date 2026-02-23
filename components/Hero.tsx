"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen gradient-bg flex items-center pt-40 pb-10 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full">
                        <span className="text-secondary font-medium tracking-wider text-xs uppercase">We Provide</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        <span className="text-primary">Web </span> Design & <br />
                        <span className="text-secondary">Digital</span> Marketing
                    </h1>
                    <p className="text-white/80 text-lg max-w-lg leading-relaxed">
                        Boost your business in the digital world with customized strategies and designs that captivate your audience. Experts in real results
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all">
                            Learn More
                        </button>
                        <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                            View Projects
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/hero-img.png" // We'll move the generated image here
                            alt="Professional Team"
                            width={700}
                            height={500}
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Decorative elements around image */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl"></div>
                </motion.div>
            </div>
        </section>
    );
}
