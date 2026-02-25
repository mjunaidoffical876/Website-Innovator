"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "London Beauties",
        cat: "Beauty Salon",
        image: "/portfolio/london-beauties.png",
        link: "https://london-beauties.vercel.app/",
    },
    {
        id: 2,
        title: "Silo Restaurant",
        cat: "Restaurant",
        image: "/portfolio/silo-restaurant.png",
        link: "https://silo-restaurant.vercel.app/",
    },
    {
        id: 3,
        title: "RealState Builders",
        cat: "Construction",
        image: "/portfolio/realstate-builders.png",
        link: "https://realstate-builders.vercel.app/",
    },
    {
        id: 4,
        title: "Misspa Social",
        cat: "Social Platform",
        image: "/portfolio/misspasocial.png",
        link: "https://misspasocial.vercel.app/",
    },
    {
        id: 5,
        title: "Rheinhotel Schulz",
        cat: "Hotel",
        image: "/portfolio/rheinhotel-schulz.png",
        link: "https://rheinhotel-schulz-flax.vercel.app/",
    },
];

export default function Portfolio() {
    return (
        <section className="py-40 bg-zinc-50" id="portfolio">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark">
                            More than a Digital <br />
                            Marketing <span className="text-primary">Agency</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-all block w-max">
                        View all work
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-3xl aspect-16/10 cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                priority={index < 4}
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-8 pointer-events-none">
                                <span className="text-primary font-medium mb-2">{item.cat}</span>
                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
