"use client";
import { motion } from 'framer-motion';

const stats = [
    { value: "+10", label: "Years of Experience" },
    { value: "+1.8K", label: "Projects Completed" },
    { value: "+100", label: "Successful Strategies" },
    { value: "+1.5K", label: "Satisfied Customers" }
];

export default function Stats() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/background.png')] bg-fixed bg-cover opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="space-y-2"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold text-secondary">{item.value}</h2>
                            <p className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wider">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
