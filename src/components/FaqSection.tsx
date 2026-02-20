"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "What is Stride EV and how does it work?",
        answer: "Stride EV is an electric bike service designed for Lagos. It uses high-performance electric motors and swappable batteries to keep you moving without petrol.",
    },
    {
        question: "How far can I ride on a full battery?",
        answer: "You can ride up to 60-80km on a single full battery, depending on the load and road conditions.",
    },
    {
        question: "What happens if my battery runs low during deliveries?",
        answer: "Don't worry! You can easily swap your low battery for a fully charged one at any of our authorized swapping stations across Lagos.",
    },
    {
        question: "Can I track my bike if it gets lost or stolen?",
        answer: "Yes, every Stride EV bike comes with built-in GPS tracking and anti-theft technology accessible via our mobile app.",
    },
    {
        question: "Is Stride EV cheaper to run than using fuel bikes?",
        answer: "Absolutely. Stride EV costs significantly less per kilometer than petrol bikes, saving you up to 60% on daily operational costs.",
    },
    {
        question: "Where can I swap my battery in Lagos?",
        answer: "We have a growing network of swap stations in key areas like Ikeja, Yaba, Lekki, and Victoria Island. Check the app for the nearest location.",
    },
    {
        question: "How strong and durable is the bike for Nigerian roads?",
        answer: "Our bikes are built with reinforced frames and heavy-duty suspension specifically designed to handle the toughest Nigerian road conditions.",
    },
];

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
        >
            <button
                onClick={onClick}
                className={`w-full text-left rounded-2xl border transition-all duration-300 p-5 flex justify-between items-center group
          ${isOpen ? 'bg-[#151719] border-white/20 shadow-xl' : 'bg-[#151719]/40 border-white/5 hover:border-white/10 hover:bg-[#151719]/60'}`}
            >
                <span className="text-white font-medium text-base sm:text-lg pr-4 font-sans tracking-tight">
                    {question}
                </span>
                <div className={`flex-shrink-0 rounded-full p-2 transition-colors ${isOpen ? 'bg-[#B6FF1A] text-[#0F1113]' : 'bg-white/5 text-white group-hover:bg-[#B6FF1A]/10'}`}>
                    {isOpen ? (
                        <Minus size={18} />
                    ) : (
                        <Plus size={18} />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 text-white/90 text-sm sm:text-base leading-relaxed font-sans border-x border-b border-white/10 rounded-b-2xl -mt-4 bg-white/5 backdrop-blur-sm">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div >
    );
};

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="w-full bg-transparent px-4 py-16 sm:px-8 sm:py-24 lg:px-20 overflow-hidden relative">
            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Column: FAQs (span 7) */}
                <div className="order-2 lg:order-1 lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4 mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            <i>Frequently Asked <span className="text-white/50">Questions</span></i>
                        </h2>
                        <div className="w-16 h-1 bg-white/20 rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                        }}
                        className="w-full"
                    >
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Image (span 5) */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative order-1 lg:order-2 lg:col-span-5 group"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#151719] border border-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] transform transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                            src="/stride_ev_bike_front.png"
                            alt="Stride EV Electric Bike Front View"
                            fill
                            className="object-cover object-center"
                            priority
                        />

                        {/* FAQ Badge - Aligned with the bike's perspective */}
                        <div className="absolute top-8 right-8 bg-[#0F1113]/80 text-[#F2F2F2] px-5 py-2 rounded-xl font-bold text-xs uppercase shadow-2xl tracking-[0.2em] backdrop-blur-md border border-white/10">
                            FAQ
                        </div>

                        {/* Sparkle Icon - Premium feel */}
                        <div className="absolute bottom-8 right-8 text-white/60">
                            <Sparkles className="animate-pulse" size={40} strokeWidth={1.5} />
                        </div>

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Subtle Outer Frame/Glow */}
                    <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -z-10 blur-[2px]" />
                </motion.div>

            </div>
        </section>
    );
}
