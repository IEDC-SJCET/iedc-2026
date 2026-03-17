"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LogIn, ArrowRight, Sparkles, Rocket, Shield } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.2 } },
};

export default function LoginPage() {
    return (
        <main className="relative min-h-screen w-full bg-[#0A0F1D] flex flex-col items-center justify-between py-6 md:py-8 px-6">

            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[#0A0F1D]" />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-15%] left-[-10%] w-[70%] h-[70%] bg-[#FF7A00]/10 rounded-full blur-[140px]"
                />

                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0.2, scale: 1.5, y: 100 }}
                    animate={{ opacity: 0.2, scale: 1.7, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="relative w-full h-full opacity-50 blur-[1px]"
                >
                    <Image
                        src="/laptop-hero.png"
                        alt=""
                        fill
                        className="object-cover md:object-contain object-center scale-150 md:scale-100"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/60 via-transparent to-[#0A0F1D]/80" />
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-between h-full gap-4 md:gap-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl"
                >
                    <Link
                        href="/"
                        className="text-white/80 hover:text-white text-xs md:text-sm font-bold uppercase tracking-widest transition-all"
                    >
                        Home
                    </Link>

                    <span className="text-white text-lg md:text-xl font-black tracking-tighter uppercase opacity-90 text-right md:text-center">
                        <span className="hidden md:inline">iedc bootcamp sjcet</span>
                        <span className="md:hidden">iedc sjcet</span>
                    </span>

                    <div className="hidden md:block w-[60px]" />
                </motion.div>

                <div className="w-full flex-1 flex flex-col items-center justify-center py-4 md:py-10">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 relative z-20"
                    >
                        <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-black italic tracking-tighter leading-none select-none drop-shadow-2xl">
                            WELCOME TO THE
                        </h1>
                        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase drop-shadow-2xl mt-4 md:mt-6 lg:mt-10">
                            IEDC PORTAL
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="relative mt-6 md:mt-8 z-30"
                    >
                        <Link
                            href="#"
                            className="group relative flex items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition-all active:scale-95"
                        >
                            <div className="bg-black rounded-full p-2">
                                <LogIn className="text-white w-4 h-4 md:w-[18px] md:h-[18px]" />
                            </div>
                            <span className="text-black text-base md:text-lg font-black uppercase tracking-tighter">
                                Coming Soon
                            </span>
                            <ArrowRight className="text-black group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="relative group"
                    >

                        <div className="backdrop-blur-2xl bg-white/10 rounded-[2rem] p-6 pt-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black italic select-none text-white">01</div>
                            <h3 className="text-2xl font-black text-white italic uppercase mb-3 flex items-center gap-2">
                                Innovation<span className="text-[#FF6B4A] text-3xl">.</span>
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-medium text-justify">
                                IEDC SJCET fosters innovation, startup development, and entrepreneurial thinking by providing students with mentorship, resources, and real-world opportunities.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="relative group md:mt-12"
                    >

                        <div className="backdrop-blur-2xl bg-white/10 rounded-[2rem] p-6 pt-12 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-white/10 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black italic select-none text-white">02</div>
                            <h3 className="text-2xl font-black text-white italic uppercase mb-3 flex items-center gap-2">
                                Portal Access<span className="text-[#3b82f6] text-3xl">.</span>
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-medium text-justify">
                                Access events, innovation programs, startup resources, and project collaboration tools through the IEDC student portal.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="w-full pt-4 md:pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 pb-2 md:pb-4"
                >
                    <span className="text-white/20 tracking-[1em] md:tracking-[1.5em] font-black text-[10px] md:text-[11px] uppercase">
                        Building the Next Generation of Innovators
                    </span>
                </motion.div>
            </div>

            <style jsx global>{`
                .glass-white {
                    background: rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(30px);
                    -webkit-backdrop-filter: blur(30px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </main>
    );
}
