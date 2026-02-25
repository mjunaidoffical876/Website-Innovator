"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do you offer custom web design?",
    answer: "Yes, our team specializes in building highly customized, premium web designs tailored to your specific business needs and goals."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard website typically takes 4-6 weeks from initial consultation to launch, but more complex projects may require additional time."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Absolutely. We ensure that every website we build is optimized for search engines right from the start to help increase organic traffic."
  },
  {
    question: "What is your maintenance policy?",
    answer: "We offer ongoing maintenance packages that cover security updates, plugin updates, content changes, and technical support so you can focus on your business."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-200 rounded-2xl overflow-hidden transition-all">
              <button
                className={`w-full text-left p-6 font-bold text-lg flex justify-between items-center transition-colors ${
                  openIndex === index ? 'bg-primary text-white' : 'bg-zinc-50 text-dark hover:bg-zinc-100'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-zinc-600 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
