"use client";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, London Beauties",
    text: "Website Innovator transformed our online presence. Our bookings have increased by 40% since the launch!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Founder, RealState Builders",
    text: "The web design they delivered is sleek and modern. It perfectly captures the premium feel of our brand.",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director",
    text: "Working with this agency was a breeze. They met our tight deadlines without compromising on quality or aesthetics.",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4">
            Hear From Our <span className="text-primary">Satisfied Clients</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg relative"
            >
              <div className="text-primary text-5xl absolute top-6 right-6 opacity-20">"</div>
              <p className="text-zinc-600 mb-8 italic relative z-10">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testi.image} alt={testi.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-dark">{testi.name}</h4>
                  <p className="text-sm text-zinc-500">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
