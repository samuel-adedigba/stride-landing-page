"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  image?: string;
}

interface CustomerStoriesProps {
  testimonials: Testimonial[];
}

export default function CustomerStories({ testimonials }: CustomerStoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="w-full bg-transparent px-4 py-20 sm:px-8 sm:py-32 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative min-h-[600px] lg:min-h-[750px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row items-center w-full relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Left: Background Image Section - Massive impact */}
              <div className="w-full lg:w-[75%] h-[400px] sm:h-[500px] lg:h-[700px] relative shadow-2xl">
                {testimonials[currentIndex].image ? (
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white/20 uppercase font-black text-4xl tracking-widest">
                    Placeholder
                  </div>
                )}
                {/* Subtle side gradient for transition depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent hidden lg:block" />
              </div>

              {/* Right: Content Card - Overlaps the image significantly */}
              <div className="w-[95%] lg:w-[45%] z-10 bg-[#0F1113] p-10 sm:p-16 lg:p-24 shadow-[60px_60px_0px_rgba(182,255,26,0.02)] mt-[-80px] lg:mt-0 lg:absolute lg:right-0 overflow-hidden border border-white/5">
                {/* Badge - Sharp Edged */}
                <div className="mb-10">
                  <div className="bg-[#2A2D30] text-[#F2F2F2] px-8 py-2.5 font-bold text-xs uppercase tracking-[0.3em] inline-block border border-white/5">
                    Testimonial
                  </div>
                </div>

                {/* Over-sized Quote Icon for depth */}
                <div className="absolute top-4 right-4 sm:top-12 sm:right-12 text-white/[0.03] pointer-events-none">
                  <Quote className="w-32 h-32 sm:w-48 sm:h-48 lg:w-32 lg:h-32" fill="currentColor" />
                </div>

                <div className="relative z-10 space-y-12">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2F2F2] leading-[1.1] tracking-tighter italic">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>

                  <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div>
                      <p className="text-[#F2F2F2] font-black text-2xl sm:text-3xl tracking-tighter uppercase leading-none">
                        — {testimonials[currentIndex].author}
                      </p>
                      <p className="text-[#B6FF1A] font-bold text-sm sm:text-base mt-3 tracking-[0.2em] uppercase">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Custom Bars for a more architectural feel */}
          <div className="flex justify-center lg:justify-end gap-6 mt-16 lg:mt-0 lg:absolute lg:bottom-[-80px] lg:right-0">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-1 transition-all duration-700 ease-in-out ${index === currentIndex ? "bg-[#B6FF1A] w-24" : "bg-[#2A2D30] hover:bg-white/10 w-12"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
