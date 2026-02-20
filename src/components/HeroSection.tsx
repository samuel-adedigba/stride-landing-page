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
      <div className="flex flex-col items-center justify-start pt-20 pb-0 text-center text-white sm:hidden">

        <motion.h1
          className="text-4xl font-extrabold leading-tight italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ride, Swap, Deliver, Repeat
        </motion.h1>

        <motion.h3
          className="mt-2 text-sm text-white/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Power Your Journey with Innovation
        </motion.h3>

        <Button
          variant="secondary"
          href="#/contact-us"
          size="sm"
          className="mt-4 mb-4"
        >
          Explore Stride EV
        </Button>

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
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <i>  Ride, Swap, Deliver, Repeat</i>
          </motion.h1>

          <motion.h3
            className="mt-4 text-lg md:text-xl text-white/90 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Power Your Journey with Innovation
          </motion.h3>

          <Button
            href="#contact-us"
            variant="secondary"
            className="mt-8 px-10 py-4 shadow-2xl"
          >
            Explore Stride EV
          </Button>
        </div>
      </div>
    </section>
  );
}