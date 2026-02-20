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
        <div className="flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Image Section - Clean, varying aspect ratio support */}
              <div className="w-full lg:w-1/2 relative min-h-[400px] lg:h-[600px] flex items-center justify-center">
                {/* Background blob for ambience */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B6FF1A]/5 to-transparent rounded-full blur-3xl transform scale-75" />

                <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-[2rem] overflow-hidden">
                  {testimonials[currentIndex].image ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#151719] text-white/20 uppercase font-black text-2xl tracking-widest rounded-[2rem]">
                      No Image
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">

                {/* Badge */}
                <div className="mb-6 inline-flex">
                  <span className="bg-[#151719] border border-white/10 text-[#F2F2F2] px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em]">
                    Rider Story
                  </span>
                </div>

                <div className="space-y-6 relative">
                  <Quote className="w-12 h-12 text-[#B6FF1A] mb-4" />

                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight font-sans">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>

                  <div className="pt-8 flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-[#B6FF1A]" />
                    <div>
                      <h4 className="text-white font-black text-lg tracking-wide uppercase italic">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-medium mt-1">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-3 mt-10">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#B6FF1A] w-12" : "bg-white/10 hover:bg-white/20 w-4"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
