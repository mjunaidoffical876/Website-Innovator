"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    { title: "E-Commerce", cat: "Web Store", id: 1 },
    { title: "Delivery App", cat: "Mobile", id: 2 },
    { title: "Corporate Web", cat: "Design", id: 3 },
    { title: "Marketing Campaign", cat: "Digital", id: 4 }
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
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-all">
                        View all work
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-3xl bg-zinc-200 aspect-video flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-8">
                                <span className="text-secondary font-medium mb-2">{item.cat}</span>
                                <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                            </div>
                            <p className="text-zinc-400 font-bold text-4xl group-hover:scale-110 transition-transform"> PIXEL PERFECT WORK</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
