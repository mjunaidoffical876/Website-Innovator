"use client";
import { motion } from 'framer-motion';

const clients = ["London Beauties", "Silo Restaurant", "RealState Builders", "Misspa Social", "Rheinhotel Schulz"];

export default function Clients() {
    return (
        <section className="py-20 bg-white border-y border-zinc-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Trusted by these brands</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                    {clients.map((c, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="font-bold text-2xl md:text-3xl text-zinc-300 pointer-events-none"
                        >
                            {c}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
