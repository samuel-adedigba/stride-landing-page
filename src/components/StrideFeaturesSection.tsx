"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Layers, Bike, Settings } from "lucide-react";
import Button from "./Button";

const features = [
  {
    id: 1,
    title: "Live Ride Updates",
    description:
      "You don't have to guess how much distance you have covered any longer, you can see everything in real time, as clear as day",
    icon: <Zap size={22} />,
  },
  {
    id: 2,
    title: "Anti-Theft",
    description:
      "The bike is yours, hence we have in-build technology to help make sure it stays yours, no one is allowed to steal it ever",
    icon: <Layers size={22} />,
  },
  {
    id: 3,
    title: "Zero Paddling",
    description:
      "You can get going without even breaking or stopping at intervals to catch your breath, let the motor do the work while you enjoy the view",
    icon: <Bike size={22} />,
  },
  {
    id: 4,
    title: "Removable Battery",
    description:
      "Battery low? Easily remove the battery and swap it for a fully charged one at one of our shops around you",
    icon: <Settings size={22} />,
  },
];

export default function StrideFeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 30,
      rotateY: -5,
      scale: 0.95,
      backfaceVisibility: "hidden"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.16, 1, 0.3, 1] as any
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 2,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="feature"
      className="relative bg-transparent text-white px-4 py-16 sm:px-8 sm:py-24 lg:px-20 lg:py-32 overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter max-w-3xl leading-[1.1] italic uppercase">
            Smart <span className="text-white/50">Transportation</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#B6FF1A]/30 rounded-full mt-3" />
          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl font-sans">
            Reliable, innovative technology that delivers efficiency. Stride EV is built for the hustle,
            keeping you moving faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="h-full bg-[#151719]/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 sm:p-10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-[#151719]/70 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-white group-hover:bg-[#B6FF1A] group-hover:text-[#0F1113] transition-colors duration-500 flex-shrink-0 border border-white/10"
                  >
                    {feature.icon}
                  </motion.div>

                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-[13px] sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connect Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-16 flex justify-start"
        >
          <Button
            variant="secondary"
            size="lg"
            href="/contact-us"
            className="px-12"
          >
            Connect With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
