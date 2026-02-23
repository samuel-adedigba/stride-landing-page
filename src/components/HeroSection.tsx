"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  // Scroll for parallax (desktop only)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
    >
      {/* Mobile Layout */}
      <div className="flex flex-col items-center justify-start pt-20 pb-0 text-center text-white sm:hidden px-6">
        <motion.h2
          className="text-xl font-extrabold leading-[1.1] italic uppercase tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ride Smart. <br />
          <span className="text-[#B6FF1A]">Deliver Fast.</span>
        </motion.h2>

        <motion.div
          className="w-12 h-0.5 bg-[#B6FF1A]/30 rounded-full mt-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.h4
          className="mt-4 text-[10px] text-white/70 font-semibold tracking-widest uppercase leading-relaxed max-w-[240px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Built for the Hustle. <br /> Efficiency in Motion.
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 mb-8"
        >
          <Button
            variant="secondary"
            href="#contact-us"
            size="sm"
            className="px-8 py-4"
          >
            Explore Stride EV
          </Button>
        </motion.div>

        <div className="w-full relative">
          <Image
            src="/Stride_bike.jpeg"
            alt="Stride EV Hero"
            width={1000}
            height={600}
            className="w-full h-auto object-cover block"
            priority
            style={{ display: 'block', margin: 0, padding: 0 }}
          />
          <div className="absolute inset-0 bg-black/40 sm:hidden" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block relative h-screen w-full">
        {/* Parallax Image */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{ y }}
        >
          <Image
            src="/Stride_bike.jpeg"
            alt="Stride EV Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Hero Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/60" />
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] italic uppercase tracking-tighter"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Ride Smart. <br />
              <span className="text-[#B6FF1A]">Deliver Fast.</span>
            </motion.h1>

            <motion.div
              className="w-16 h-1 bg-[#B6FF1A]/20 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            />

            <motion.h3
              className="text-xs md:text-sm lg:text-base text-white/80 max-w-2xl font-semibold tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Built for the Hustle. <br className="sm:hidden" /> Efficiency in Motion.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-2"
            >
              <Button
                href="#contact-us"
                variant="secondary"
                className="px-10 py-4 shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Explore Stride EV
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}