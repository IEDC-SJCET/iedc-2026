"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/app/components/ui/globe";


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

function useCountUp(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

export default function MetricsSection() {
    const counter = useCountUp(3500, 2500);

    return (
        <section id="resources" className="py-20 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                        Real ideas, real impact
                    </span>
                    <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-6">
                        How we help ideas
                        <br />
                        become reality
                    </h2>
                </motion.div>

                {/* Big counter */}
                <motion.div
                    ref={counter.ref}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-4"
                >
                    <div className="text-6xl md:text-8xl lg:text-[120px] font-bold text-primary leading-none">
                        {counter.count.toLocaleString()}+
                    </div>
                    <p className="text-text-muted text-sm mt-2">Ideas generated</p>
                </motion.div>

                {/* Earth globe */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center my-12"
                >
                    <div className="relative w-full max-w-2xl h-[400px] md:h-[600px] flex items-center justify-center">
                        <div className="relative h-full w-full z-10 p-2 md:p-6 drop-shadow-2xl">
                            <Globe />
                        </div>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-3 gap-2 md:gap-8 max-w-3xl mx-auto mt-8 px-2"
                >
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-primary">
                            87<span className="text-primary">%</span>
                        </p>
                        <p className="text-text-muted text-sm mt-2">Faster ideation</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-text-main">10<span className="text-primary">+</span></p>
                        <p className="text-text-muted text-sm mt-2">Startups Incubated</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-text-main">
                            2500<span className="text-primary">+</span>
                        </p>
                        <p className="text-text-muted text-sm mt-2">
                            Active
                            <br />
                            IEDC members
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
