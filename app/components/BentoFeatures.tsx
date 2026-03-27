"use client";

import { memo } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
};

const floating = {
    animate: {
        y: [0, -15, 0],
        rotate: [0, 2, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

const pulseGlow = {
    animate: {
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
};

const BentoFeatures = memo(function BentoFeatures() {
    return (
        <section id="features" className="py-16 md:py-24 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/20 hover:shadow-xl text-[#FF6B4A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Excellence in Action
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-main mb-6 uppercase italic">
                        WHY <span className="text-[#FF6B4A]">IEDC?</span>
                    </h2>
                    <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Here, students take their first step toward becoming <span className="text-text-main font-bold">innovators</span>, <span className="text-text-main font-bold">creators</span> and <span className="text-text-main font-bold">entrepreneurs</span>.
                    </p>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <motion.div
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[800px]"
            >
                {/* Mentoring */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-4 md:row-span-2 bg-[#0A0A0B] rounded-[2.5rem] p-8 relative overflow-hidden group border border-white/5"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B4A]/5 to-transparent opacity-30" />

                    <motion.div
                        variants={floating}
                        animate="animate"
                        className="absolute inset-x-0 bottom-0 top-6 opacity-[0.2] scale-[1.3] pointer-events-none will-change-transform"
                    >
                        <Image
                            src="/whyiedc/mentoring.png"
                            alt="Mentoring Background"
                            fill
                            className="object-contain transform rotate-[-6deg] drop-shadow-[0_20px_50px_rgba(255,107,74,0.4)]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        />
                    </motion.div>

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-3xl font-black text-white italic uppercase mb-3">Mentoring</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                Guidance from experienced mentors who help you refine ideas, set meaningful goals, and navigate your innovation journey.
                            </p>
                        </div>

                        <div className="flex-1" />

                        <Link href="/login" className="mt-6 flex items-center justify-between bg-white text-black rounded-2xl px-6 py-4 font-bold uppercase tracking-tighter hover:bg-[#FF6B4A] hover:text-white transition-all duration-300 shadow-xl">
                            Learn More
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* Innovation */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-8 md:row-span-1 bg-[#161618] rounded-[2.5rem] p-10 relative overflow-hidden group border border-white/5"
                >
                    <motion.div
                        variants={pulseGlow}
                        animate="animate"
                        className="absolute -right-20 -top-20 w-80 h-80 bg-[#FF6B4A]/20 blur-[100px] rounded-full pointer-events-none"
                    />

                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotateY: [0, 10, 0],
                            scale: 1.2
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 opacity-[0.1] pointer-events-none will-change-transform"
                    >
                        <Image
                            src="/whyiedc/innovation.png"
                            alt="Innovation Background"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        />
                    </motion.div>

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-4xl font-black text-white italic uppercase mb-4">Innovation Support</h3>
                            <p className="text-gray-400 text-base leading-relaxed font-medium mb-8 max-w-md">
                                Access resources and creative guidance to bring your project ideas to life — building skills and solutions that prepare you for future ventures.
                            </p>
                            <Link href="/login" className="inline-block bg-[#FF6B4A] text-white rounded-2xl px-10 py-4 font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300 shadow-2xl shadow-[#FF6B4A]/30">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Networking */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-3 md:row-span-1 bg-[#0A0A0B] rounded-[2.5rem] p-8 relative overflow-hidden group border border-white/5"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B4A]/5 to-transparent opacity-30" />

                    <div className="absolute inset-0 opacity-[0.2] scale-[1.3] pointer-events-none">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="w-full h-full relative will-change-transform"
                        >
                            <Image
                                src="/whyiedc/networking.png"
                                alt="Networking Background"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </motion.div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end">
                        <h3 className="text-2xl font-black text-white italic uppercase mb-2">Networking</h3>
                        <p className="text-gray-400 text-xs font-medium leading-relaxed">
                            Connect with industry experts, founders and like-minded peers. IEDC opens doors to people who will inspire you, challenge you and help you grow.
                        </p>
                    </div>
                </motion.div>

                {/* Incubation */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-5 md:row-span-1 bg-[#FF6B4A] rounded-[2.5rem] p-10 relative overflow-hidden group border border-white/5 shadow-2xl shadow-[#FF6B4A]/20"
                >
                    <motion.div
                        animate={{
                            y: [10, -10, 10],
                            rotate: [12, 10, 12],
                            scale: 1.4
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 opacity-[0.15] pointer-events-none will-change-transform"
                    >
                        <Image
                            src="/whyiedc/incubation.png"
                            alt="Incubation Background"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </motion.div>

                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-3xl font-black text-white italic uppercase">Incubation</h3>
                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-white font-bold leading-relaxed text-sm md:text-base pr-4 max-w-sm">
                            Turn your ideas into functioning prototypes and startups with structured incubation support, opportunities to pitch and hands-on guidance throughout the journey.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
});

export default BentoFeatures;
