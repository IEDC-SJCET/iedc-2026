"use client";

import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-0 overflow-hidden bg-white">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0A] overflow-hidden h-[85%]">
                <Image
                    src="/sjcet.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity"
                    priority
                />
                {/* Dark to Orange Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#110A05]/90 via-[#4A1D00]/70 to-[#FF7A00]/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF7A00]/40 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF5500]/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7A00]/50 rounded-full blur-[120px]" />
            </div>

            {/* White Blur Gradient Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full z-0 flex flex-col justify-end h-[400px]">
                {/* Massive blur glow behind curve */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[120%] max-w-[2000px] h-[250px] bg-white opacity-60 blur-[60px] rounded-[100%]" />

                {/* Solid curve */}
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full h-[150px] md:h-[220px] relative z-10 bottom-[-2px]">
                    <path
                        fill="rgba(255,255,255,0.4)"
                        className="blur-xl"
                        d="M0,80 C480,280 960,280 1440,80 L1440,320 L0,320 Z"
                    />
                    <path
                        fill="#ffffff"
                        d="M0,120 C480,300 960,300 1440,120 L1440,320 L0,320 Z"
                    />
                </svg>
                {/* Solid white bottom block to fill any gaps */}
                <div className="w-full h-10 bg-white relative z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-between pb-10">

                <div className="max-w-4xl mx-auto px-6 text-center mt-12 md:mt-20">
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
                        <span className="text-white/90 text-sm font-medium">Discovering Innovators Among Us</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-xl"
                    >
                        Discovering Creative
                        <br />
                        students among us
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

                {/* Floating Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative z-20 w-full max-w-5xl mx-auto px-6 mt-16 md:mt-24 pointer-events-none"
                >
                    <div className="relative flex items-end justify-center gap-4 md:gap-8">
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="hidden md:flex flex-col items-center bg-black/40 backdrop-blur-xl border border-white/10 text-white rounded-[2rem] p-6 shadow-2xl w-48 relative z-10"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A00] to-[#E55000] rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,122,0,0.4)]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" fill="white" />
                                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88C14.68 14.63 13.38 15.06 12 15.06C10.62 15.06 9.32 14.63 8.21 13.89Z" fill="white" />
                                    <path d="M12 9.5L10.5 6L7 5.5L9.5 3L9 0L12 1.5L15 0L14.5 3L17 5.5L13.5 6L12 9.5Z" fill="#FF7A00" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-center">7-day streak</p>
                            <p className="text-[13px] text-gray-300 font-medium text-center mt-0.5">unlocked</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="bg-[#1C1C1E] text-white rounded-[2.5rem] shadow-2xl border-[6px] border-[#2C2C2E] p-0 w-[260px] md:w-[320px] overflow-hidden relative z-20"
                        >
                            <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[11px] text-gray-400 font-medium relative">
                                <span>Mon, 07:32</span>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-[14px]" />
                                <div className="flex items-center gap-1.5 text-white">
                                    <svg width="14" height="10" viewBox="0 0 14 10" className="fill-current"><rect x="1" y="5" width="2" height="5" rx="1" /><rect x="5" y="3" width="2" height="7" rx="1" /><rect x="9" y="1" width="2" height="9" rx="1" /><rect x="13" y="0" width="2" height="10" rx="1" opacity="0.3" /></svg>
                                    <svg width="12" height="10" viewBox="0 0 12 10" className="fill-current"><path d="M6 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /><path d="M2.47 5.53A4.98 4.98 0 016 4.5c1.38 0 2.63.56 3.53 1.47a.75.75 0 101.06-1.06A6.47 6.47 0 006 3a6.47 6.47 0 00-4.59 1.91.75.75 0 101.06 1.06z" /><path d="M.35 3.41A7.98 7.98 0 016 1.5c2.21 0 4.21.9 5.65 2.35a.75.75 0 001.06-1.06A9.47 9.47 0 006 0 9.47 9.47 0 00-.71 2.7.75.75 0 10.35 3.41z" /></svg>
                                    <svg width="18" height="10" viewBox="0 0 18 10" className="fill-current"><rect x="1" y="1" width="14" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="2" width="10" height="6" rx="1" /><path d="M17 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                </div>
                            </div>

                            <div className="px-5 pb-6 pt-3 h-[350px]">
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <h4 className="font-bold text-[18px]">Today Task</h4>
                                        <p className="text-[12px] text-gray-400 font-medium">3 of 8 habits done</p>
                                    </div>
                                    <span className="text-[10px] bg-white/10 text-white rounded-md px-2.5 py-1.5 flex items-center gap-1.5 font-medium">
                                        <div className="bg-white rounded p-0.5"><Check size={8} color="black" strokeWidth={4} /></div>
                                        18 day streak
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl border border-white/5">
                                        <div className="w-5 h-5 rounded-full bg-[#32D74B] flex items-center justify-center">
                                            <Check size={12} color="white" strokeWidth={3} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[14px] font-semibold text-white">Morning walk</p>
                                            <p className="text-[11px] text-gray-400">At least 15 minutes</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400 mb-1">12 / 14 days</p>
                                            <span className="text-[10px] font-bold bg-[#E8A317] text-black rounded-full px-2 py-0.5 inline-block">85%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 bg-white/10 rounded-2xl border border-white/5 opacity-90">
                                        <div className="w-5 h-5 rounded-full bg-[#32D74B] flex items-center justify-center">
                                            <Check size={12} color="white" strokeWidth={3} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[14px] font-semibold text-white">Drink 3 glasses of water</p>
                                            <p className="text-[11px] text-gray-400">Before 11:00 am</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400 mb-1">9 / 9 days</p>
                                            <span className="text-[10px] font-bold bg-[#32D74B] text-black rounded-full px-2 py-0.5 inline-block">100%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/5 opacity-70">
                                        <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center">
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[14px] font-semibold text-gray-300">Read 10 pages</p>
                                            <p className="text-[11px] text-gray-400">Before bed</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-400 mb-1">6 / 9 days</p>
                                            <span className="text-[10px] font-bold bg-gray-600 text-white rounded-full px-2 py-0.5 inline-block">67%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1C1C1E] to-transparent pointer-events-none" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="hidden md:block bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 w-52 shadow-2xl relative z-10"
                        >
                            <p className="text-[12px] text-gray-300 mb-1 font-medium text-center">Today&apos;s goal:</p>
                            <p className="text-[15px] font-bold text-white text-center mb-5">Complete 3 habits</p>
                            <div className="flex justify-between items-center px-1">
                                {[
                                    { icon: "🚶‍♂️", pct: "66%" },
                                    { icon: "🧹", pct: "87%" },
                                    { icon: "📖", pct: "94%" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg mb-2 shadow-inner border border-white/5">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] text-gray-300 font-medium">{item.pct}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
