"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const RiderTrustSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="py-24 px-4 sm:px-8 lg:px-20 bg-[#0F1113] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header - Aligned with the Brand Story */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-4 text-left"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter max-w-3xl leading-[1.1] italic uppercase">
                        The Hustle <span className="text-white/60">Never Stops</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-white/20 rounded-full mt-3" />
                    <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed font-sans mt-4">
                        Stride EV provides the intelligence needed for maximum efficiency in motion.
                        Ride smart, deliver fast, and dominate the streets with precision telemetry.
                    </p>
                </motion.div>

                {/* Bento Grid - Structured for Storytelling */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[340px]"
                >
                    {/* Card 2: Live Asset Tracking Dashboard - The Centerpiece (3 cols) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="relative md:col-span-3 md:row-span-2 border border-white/5 rounded-[2rem] overflow-hidden group shadow-2xl bg-[#151719] flex flex-col min-h-[600px] md:min-h-0"
                    >
                        {/* High-Fidelity Dashboard Map Layer */}
                        <div className="absolute inset-0">
                            <Image
                                src="/stride_ev_tracking_map_dashboard.png"
                                alt="Stride EV Asset Tracking Dashboard"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            />
                            {/* Technical Overlay */}
                            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        </div>

                        {/* Stride EV Control Center Panels */}
                        <div className="relative z-10 p-5 sm:p-10 flex h-full pointer-events-none">
                            <div className="flex flex-col justify-between w-full max-w-[340px] h-full">
                                {/* Panel A: Unit Identity */}
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-200/50 shadow-2xl pointer-events-auto">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#B6FF1A] flex items-center justify-center shadow-lg shadow-[#B6FF1A]/20 overflow-hidden relative">
                                            <Image
                                                src="/stride_icon.png"
                                                alt="Stride Icon"
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-[#2A2D30] font-black leading-none mb-1">Live Asset</p>
                                            <h4 className="text-gray-900 font-black text-base tracking-tight font-sans">SEV-MODEL-X</h4>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5 border-t border-gray-100 pt-4 font-sans">
                                        <div className="flex justify-between items-center bg-gray-50/80 p-2.5 rounded-xl border border-gray-100/50">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                                            <span className="flex items-center gap-1.5 text-green-600 text-[10px] font-black uppercase italic">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                Active
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center text-[11px] px-1 font-mono text-gray-900">
                                            <span className="text-gray-500 font-bold uppercase">Identity</span>
                                            <span className="font-bold tracking-tighter">Stride Rider A1</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[11px] px-1 font-mono text-gray-900">
                                            <span className="text-gray-500 font-bold uppercase">LatLong</span>
                                            <span className="font-bold tracking-tighter">6.45N, 3.39E</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Panel B: Health Diagnostics - Pushed to bottom with more space */}
                                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-200/50 shadow-2xl pointer-events-auto mt-8 sm:mt-0">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-0.5 font-sans">Energy Cell</p>
                                            <h5 className="text-gray-900 font-black text-sm font-sans tracking-tight">OPTIMIZED</h5>
                                        </div>
                                        <span className="text-sm font-black text-gray-900 italic">92%</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "92%" }}
                                                className="h-full bg-[#B6FF1A]"
                                            />
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#0F1113] text-white py-3 rounded-xl text-center text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all duration-200 font-sans hover:bg-[#1A1C1E]">
                                        Asset Control
                                    </button>
                                </div>
                            </div>


                            {/* Live Badge */}
                            <div className="ml-auto hidden lg:block">
                                <div className="bg-white/95 text-black px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                                    <span className="text-xs font-black uppercase tracking-[0.2em] italic font-sans">Live Telemetry</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Main Rider (1 col, spans 2 rows) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="relative md:col-span-1 md:row-span-2 border border-white/10 rounded-[2rem] overflow-hidden group shadow-2xl bg-black"
                    >
                        <Image
                            src="/Stride_bike_man.jpeg"
                            alt="Professional Integrity"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90"
                        />

                        {/* Top Badge */}
                        <div className="absolute top-6 left-6">
                            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                                <div className="bg-white p-1 rounded-full">
                                    <Star className="w-3 h-3 text-black fill-black" />
                                </div>
                                <span className="text-white font-bold text-[10px] tracking-widest uppercase font-sans">Top Professional</span>
                            </div>
                        </div>

                        {/* Bottom Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-white">
                                    <span className="text-4xl font-black italic tracking-tighter font-sans">4.95</span>
                                    <div className="flex flex-col leading-none">
                                        <div className="flex gap-0.5 mb-1.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-2.5 h-2.5 text-white fill-white" />
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70 font-sans">Rider Score</span>
                                    </div>
                                </div>
                                <div className="text-white/20 text-3xl font-black italic tracking-tighter select-none font-sans lowercase">verified fleet</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 1: Operation Scale (2 cols) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="relative md:col-span-2 border border-white/5 rounded-[2rem] overflow-hidden group shadow-2xl bg-[#151719]"
                    >
                        <Image
                            src="/bike_tire.avif"
                            alt="Deliveries Powered"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-center p-8 text-center px-4">
                            <span className="text-white/80 text-lg font-medium mb-1 font-sans">Operation Scale:</span>
                            <h3 className="text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter italic leading-none font-sans">15,000+</h3>
                            <p className="text-white font-black uppercase tracking-[0.3em] text-[9px] items-center flex gap-3">
                                <span className="w-4 h-[1px] bg-white/40" />
                                Successful Missions
                                <span className="w-4 h-[1px] bg-white/40" />
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: No Downtime, Just Hustle (2 cols) */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="relative md:col-span-2 border border-white/15 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm flex flex-col justify-center p-8 sm:p-12 overflow-hidden shadow-2xl group min-h-[300px]"
                    >
                        <div className="relative z-10 flex flex-col items-start gap-5">
                            <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white font-sans">Never Stop</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter italic leading-[1] font-sans">
                                No Downtime, <br />
                                <span className="text-white/70">Just Hustle</span>
                            </h3>

                            <p className="text-sm sm:text-base text-white/90 max-w-lg leading-relaxed font-sans mt-2">
                                When your battery runs low, don&apos;t stop. Head to a Stride Station,
                                switch in a fresh battery, and get back on the road in minutes.
                                <span className="text-white block mt-2 font-black">More deliveries, no interruptions.</span>
                            </p>

                            <div className="h-[2px] w-20 bg-white/20 mt-4" />
                        </div>

                        {/* Modern Decorative elements */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 pointer-events-none" />

                        {/* Subtle grid pattern for technical feel */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default RiderTrustSection;
