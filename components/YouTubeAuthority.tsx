"use client";
import { motion } from 'framer-motion';
import { Youtube, Play, Users, MessageSquare } from 'lucide-react';

const videos = [
    { 
        title: "WordPress vs Shopify: Which is Best for Your Startup?", 
        views: "1.2K views", 
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
        duration: "12:45"
    },
    { 
        title: "Advanced SEO Checklist for 2026", 
        views: "3.5K views", 
        thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1631&auto=format&fit=crop",
        duration: "08:12"
    },
    { 
        title: "Building Scalable Web Apps with Muhammad Junaid", 
        views: "2.1K views", 
        thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
        duration: "15:30"
    }
];

export default function YouTubeAuthority() {
    return (
        <section className="py-24 gradient-bg relative overflow-hidden" id="youtube">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                           <Youtube className="w-5 h-5 text-red-500" /> Expert Insights
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                            Learn from the <span className="text-secondary italic">Industry Leader</span>
                        </h2>
                        <p className="text-white/60 mt-4 text-lg">
                            Muhammad Junaid shares technical deep-dives on web development, modern SEO methodology, and scaling digital brands.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="text-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                            <p className="text-3xl font-bold text-white">5K+</p>
                            <p className="text-white/40 text-xs font-medium mt-1 uppercase tracking-widest">Subscribers</p>
                        </div>
                        <div className="text-center bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                            <p className="text-3xl font-bold text-white">100+</p>
                            <p className="text-white/40 text-xs font-medium mt-1 uppercase tracking-widest">Tutorials</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <div className="relative aspect-video">
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                                        <Play className="w-8 h-8 fill-current" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-xs font-bold">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-secondary transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex justify-between items-center text-white/40 text-sm">
                                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {video.views}</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> Discussion</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Button removed as requested */}
            </div>
        </section>
    );
}
