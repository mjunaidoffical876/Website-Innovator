"use client";
import { motion } from 'framer-motion';

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
                    <span className="text-primary font-bold uppercase tracking-widest text-sm">We all are your's </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">
                        The #1 agency in the <br />
                        <span className="text-primary">World</span>
                    </h2>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                        With more than 10 years in the market, we have helped hundreds of companies scale their digital presence. We don't just create websites, we build powerful and effective sales tools.
                    </p>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                        Our team combines creativity with data analysis to ensure that every penny of your investment translates into real growth for your brand.
                    </p>
                    <div className="pt-4">
                        <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                            Read more about us <span className="text-xl">→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
