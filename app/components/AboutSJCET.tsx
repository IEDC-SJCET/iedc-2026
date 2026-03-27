"use client";

import { memo } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.2 } },
};

const AboutSJCET = memo(function AboutSJCET() {
    return (
        <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-6 overflow-hidden">
            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="md:col-span-12"
                >
                    <span className="text-[#FF6B4A] text-xs font-bold uppercase tracking-widest mb-4 block">
                        ABOUT
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-8 uppercase">
                        SJCET BOOTCAMP - <span className="text-[#FF6B4A]">IEDC</span>
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium max-w-4xl text-justify">
                        SJCET Bootcamp – IEDC is a student-driven innovation and entrepreneurship hub of St. Joseph’s College of Engineering and Technology, Palai, functioning under Kerala Startup Mission (KSUM). We empower students to explore ideas, build solutions and step into the world of startups through hands-on learning, mentorship and real-world opportunities.
                    </p>
                </motion.div>
            </div>

            {/* Mission & Vision Section */}
            <div className="relative">
                <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block select-none pointer-events-none z-0" viewBox="0 0 1200 100" fill="none">
                    <motion.path
                        d="M100 50 Q 300 0, 600 50 T 1100 50"
                        stroke="#FF6B4A"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>

                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10"
                >
                    {/* Vision Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative group"
                    >
                        {/* 3D Pin */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.5 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 w-16 h-16 drop-shadow-2xl"
                        >
                            <Image
                                src="/ui/red_pin.png"
                                alt="Pin"
                                width={64}
                                height={64}
                                className="object-contain"
                                sizes="64px"
                            />
                        </motion.div>

                        <div className="bg-white rounded-[2.5rem] p-10 pt-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic select-none">01</div>
                            <h3 className="text-4xl font-black text-black italic uppercase mb-6 flex items-center gap-2">
                                Vision<span className="text-[#FF6B4A] text-5xl">.</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium text-justify">
                                To empower students to turn their ideas into reality by providing every opportunity, resource and support they need. We aim to be the strongest support system for student entrepreneurship and startup development, creating an environment where countless successful ventures are born.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative group md:mt-24"
                    >
                        {/* 3D Pin */}
                        <motion.div
                            initial={{ scale: 0, rotate: 45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.7 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 w-16 h-16 drop-shadow-2xl"
                        >
                            <Image
                                src="/ui/blue_pin.png"
                                alt="Pin"
                                width={64}
                                height={64}
                                className="object-contain"
                                sizes="64px"
                            />
                        </motion.div>

                        <div className="bg-white rounded-[2.5rem] p-10 pt-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic select-none">02</div>
                            <h3 className="text-4xl font-black text-black italic uppercase mb-6 flex items-center gap-2">
                                Mission<span className="text-[#3b82f6] text-5xl">.</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium text-justify">
                                To build a collaborative environment that encourages learning, growth and creative exploration; to promote innovation and entrepreneurship through skill-building workshops and hands-on initiatives; and to support students in developing practical solutions and launching impactful startups.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});

export default AboutSJCET;
