"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-40 gradient-bg relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <Image
                            src="/advisor.png"
                            alt="Our Advisor"
                            width={600}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full flex items-center justify-center animate-bounce shadow-xl">
                        <MessageCircle className="w-12 h-12 text-primary" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm">Let's talk today</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Contact us <br /> our <span className="text-secondary">Advisors</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            We are ready to listen to you and turn your ideas into an impactful digital reality.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button onClick={() => window.location.href = "tel:+923186397291"} className="w-full bg-secondary text-primary py-4 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                            <Phone className="w-6 h-6" />  Call us now
                        </button>
                        <button onClick={() => window.location.href = "https://wa.me/923186397291"} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                            <MessageCircle className="w-6 h-6" /> WhatsApp
                        </button>
                        <button onClick={() => window.location.href = "mailto:[EMAIL_ADDRESS]"} className="w-full border border-white/20 text-white py-4 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            <Mail className="w-6 h-6" /> Send Email
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
