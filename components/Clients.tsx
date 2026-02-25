"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    { name: "London Beauties", logo: "/logos/london-beauties.png" },
    { name: "Silo Restaurant", logo: "/logos/silo-restaurant.png" },
    { name: "RealState Builders", logo: "/logos/realstate-builders.png" },
    { name: "Misspa Social", logo: "/logos/misspasocial.png" },
    { name: "Rheinhotel Schulz", logo: "/logos/rheinhotel-schulz.png" }
];

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
                            className="relative h-12 w-32 md:h-16 md:w-48 pointer-events-none"
                        >
                            <Image 
                                src={c.logo} 
                                alt={c.name} 
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
