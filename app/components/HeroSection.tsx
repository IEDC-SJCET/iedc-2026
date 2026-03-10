"use client";

import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import Image from "next/image";

import { FlipWords } from "@/app/components/ui/flip-words";
import { Marquee } from "@/app/components/ui/marquee";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    const words = ["Innovative", "Creative", "Technical"];

    return (
        <section className="relative overflow-hidden bg-transparent">

            <div className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-0 overflow-hidden">

                <div className="absolute inset-0 z-0 bg-[#0A0A0A] overflow-hidden will-change-transform">
                    <Image
                        src="/sjcet.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-60 mix-blend-luminosity"
                        priority
                        sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-[#110A05]/90 via-[#4A1D00]/70 to-[#FF7A00]/50 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF7A00]/40 rounded-full blur-[120px] will-change-[transform,opacity]" />
                    <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF5500]/40 rounded-full blur-[100px] will-change-[transform,opacity]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7A00]/5 rounded-full blur-[120px] will-change-[transform,opacity]" />
                </div>


                <div className="absolute bottom-0 left-0 w-full z-0 flex flex-col justify-end h-[400px]">
                    {/* Massive blur glow behind curve */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[120%] max-w-[2000px] h-[250px] bg-[#FFFAF8] opacity-60 blur-[60px] rounded-[100%]" />

                    {/* Solid curve */}
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full h-[150px] md:h-[220px] relative z-10 bottom-[-2px]">
                        <path
                            fill="rgba(255,255,255,0.4)"
                            className="blur-xl"
                            d="M0,80 C480,280 960,280 1440,80 L1440,320 L0,320 Z"
                        />
                        <path
                            fill="#FFFAF8"
                            d="M0,120 C480,300 960,300 1440,120 L1440,320 L0,320 Z"
                        />
                    </svg>
                    {/* Solid white bottom block to fill any gaps */}
                    <div className="w-full h-10 bg-[#FFFAF8] relative z-10" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pb-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 bg-black/30 hover:bg-black/40 transition-colors border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 mb-8 backdrop-blur-md cursor-pointer"
                        >
                            <span className="bg-white/10 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/5">
                                IEDC
                            </span>
                            <span className="text-white/90 text-sm font-medium">Let Get Your Dreams Incubated </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-xl"
                        >
                            Discovering
                            <br />
                            <FlipWords words={words} duration={1000} className="text-[#FF7A00] font-bold px-0" /><br />
                            <span className="whitespace-nowrap">students among us</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md"
                        >
                            Where Student Ideas Become Startups
                            <br className="hidden md:block" />
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-5"
                        >
                            <a
                                href="#"
                                className="group inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-[16px] font-bold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            >
                                Join IEDC
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-xl text-white rounded-full px-6 py-4 text-[16px] font-semibold transition-all duration-300"
                            >
                                <span className="flex items-center justify-center">
                                    <Play size={18} fill="white" color="white" />
                                </span>
                                Explore Innovations
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-20 w-screen bg-[#FFFAF8] -mt-1"
            >
                <div className="bg-black py-4 md:py-6 overflow-hidden">
                    <Marquee baseVelocity={-5} className="text-white font-black tracking-tighter text-3xl md:text-5xl lg:text-6xl flex items-center">
                        <div className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 whitespace-nowrap">
                            <span>INNOVATIVE</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                            <span>BUILD</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                            <span>LAUNCH</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                            <span>DISRUPT</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                            <span>CREATE</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                            <span>SCALE</span>
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-[#FF7A00] rotate-45" />
                        </div>
                    </Marquee>
                </div>
            </motion.div>
        </section>
    );
}
