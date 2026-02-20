"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const animations = {
    card: {
      hidden: {
        // Sharp diagonal twist: more dramatic angles
        rotateX: 25, // Increased from 12 for sharper tilt
        rotateY: -25, // Increased from -12 for sharper tilt
        rotateZ: -8, // Added Z rotation for more dramatic effect
        transformOrigin: "center center",
        scale: 0.8, // Start smaller for more dramatic entrance
        opacity: 0,
        y: 150, // Increased from 120
        x: 120, // Increased from 80 for sharper diagonal entry
      },
      visible: {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        transformOrigin: "center center",
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring" as const,
          duration: 1.6, // Slightly longer for more dramatic effect
          ease: [0.16, 1, 0.3, 1] as const,
          delay: 0.3,
          // More staggered rotation for sharper effect
          rotateX: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
          rotateY: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const },
          rotateZ: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
          scale: { duration: 1.3, ease: [0.16, 1, 0.3, 1] as const },
        },
      },
    },
    background: {
      hidden: { opacity: 0, scale: 1.1 }, // Increased scale for more dramatic zoom
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2.0, // Longer duration
          ease: "easeOut" as const,
        },
      },
    },
    content: {
      hidden: { opacity: 0, y: 40 }, // Increased from 30
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          delay: 1.0, // Increased delay for card to settle first
          ease: "easeOut" as const,
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.7 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const styles = {
    section:
      "relative min-h-screen  h-[50vh] sm:h-[80vh] lg:h-[100vh] flex items-center justify-center lg:justify-end overflow-hidden bg-background px-4 sm:px-6 lg:px-8",
    background: "absolute inset-0 bg-cover bg-center bg-no-repeat",
    card: {
      container: "relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl lg:mr-8 xl:mr-16 p-4 sm:p-6 lg:p-10",
      inner:
        "rounded-[2.5rem] border border-white/5 bg-[#151719]/60 backdrop-blur-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-16 text-white shadow-2xl",
    },
  };

  return (
    <section ref={ref} id="about" className={styles.section}>
      <motion.div
        variants={animations.background}
        initial="hidden"
        animate={"visible"}
        className={styles.background}
        style={{
          backgroundImage: `linear-gradient(rgba(15, 17, 19, 0.6), rgba(15, 17, 19, 0.8)), url(${"/team.avif"})`,
        }}
      />

      <motion.div
        variants={animations.card}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={styles.card.container}
        style={{
          perspective: "2000px", // Increased for more dramatic 3D effect
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className={styles.card.inner}
          style={{
            transformStyle: "preserve-3d",
            // Add subtle hover effect for continued interactivity
          }}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            variants={animations.content}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="sm:hidden text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 lg:mb-6 tracking-tight">
              <i>Our Story</i>
            </h2>
            <h1 className="hidden sm:block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 lg:mb-6 tracking-tight">
              <i>Our Story</i>
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-[#B6FF1A] rounded-full" />
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 mt-2 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-white/90"
            variants={animations.content}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.0 }}
          >
            <motion.p
              variants={animations.fadeIn}
              transition={{ delay: 0.8 }}
            >
              LyteLabs was born out of a passion for clean energy and a
              commitment to redefining how Africans power their homes and move
              through their cities. Our innovative ecosystem combines a smart
              power device and a rugged e-bike, both powered by a removable,
              swappable battery system that offers unmatched flexibility and
              convenience.
            </motion.p>
            <motion.p
              variants={animations.fadeIn}
              transition={{ delay: 1.0 }}
            >
              Built for everyday life, our products help users cut down on
              emissions, reduce dependence on fossil fuels, and embrace a more
              sustainable lifestyle. Founded with a bold vision for energy
              independence, LyteLabs is driving the future of clean mobility and
              portable power, one battery at a time.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;