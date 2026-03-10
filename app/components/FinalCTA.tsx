"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function FinalCTA() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 md:py-7 max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left content */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main leading-tight mb-4">
                        A Unified Portal
                        <br />
                        for IEDC Innovators
                    </h2>
                    <p className="text-text-muted text-[15px] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                        Access events, track projects, collaborate with innovators, and manage your startup journey through the IEDC student portal.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                        <a
                            href="https://www.apple.com/in/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors"
                        >
                            Login to Portal
                        </a>
                        <a
                            href="https://play.google.com/store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            View Innovation Dashboard
                        </a>
                    </div>
                </motion.div>

                {/* Right — Phone + QR */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:w-1/2 flex items-center justify-center gap-6"
                >
                    {/* Phone mockup */}
                    <div className="w-56 md:w-64">
                        <div className="bg-[#1D1D1F] rounded-[2rem] p-2.5 shadow-2xl">
                            <div className="bg-white rounded-[1.5rem] overflow-hidden p-4">
                                <div className="text-center mb-3">
                                    <p className="text-[10px] text-text-muted">IEDC Innovation Dashboard</p>
                                    <div className="w-8 h-8 mx-auto mt-1">
                                        <svg viewBox="0 0 24 24" className="text-green-500 w-full h-full">
                                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex gap-3 mb-4">
                                    <div className="flex-1 bg-card-bg rounded-xl p-2 text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <p className="font-bold text-lg">03</p>
                                            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-[8px] text-primary font-bold">86%</div>
                                        </div>
                                        <p className="text-[9px] text-text-muted"> Active Projects</p>
                                    </div>
                                    <div className="flex-1 bg-card-bg rounded-xl p-2 text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <p className="font-bold text-lg">12</p>
                                            <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-[8px] text-red-500 font-bold">80%</div>
                                        </div>
                                        <p className="text-[9px] text-text-muted">Events Attended</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold mb-2">Your Innovation Activity</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between bg-card-bg rounded-lg p-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                                <div>
                                                    <p className="text-[10px] font-medium">Upcoming Bootcamp</p>
                                                    <p className="text-[8px] text-text-muted">Startup Builder Bootcamp – Tomorrow</p>
                                                </div>
                                            </div>
                                            <span className="text-[8px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">Today</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-card-bg rounded-lg p-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                                <div>
                                                    <p className="text-[10px] font-medium">Project Update</p>
                                                    <p className="text-[8px] text-text-muted">Smart Agriculture System – Prototype Phase</p>
                                                </div>
                                            </div>
                                            <span className="text-[8px] text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full">This afternoon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QR Code */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="hidden md:block"
                    >
                        <div className="bg-card-bg rounded-2xl p-5 border border-border">
                            <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center mb-3">
                                {/* QR code pattern */}
                                <div className="grid grid-cols-7 gap-0.5 w-20 h-20">
                                    {Array.from({ length: 49 }, (_, i) => {
                                        const row = Math.floor(i / 7);
                                        const col = i % 7;
                                        const isCorner = (row < 3 && col < 3) || (row < 3 && col > 3) || (row > 3 && col < 3);
                                        const isRandom = mounted && Math.random() > 0.5;
                                        return (
                                            <div
                                                key={i}
                                                className={`w-full aspect-square rounded-[1px] ${isCorner || isRandom ? "bg-[#1D1D1F]" : "bg-white"
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="text-[11px] text-text-main font-medium text-center">
                                Scan to access
                                <br />
                                IEDC Student Portal
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
