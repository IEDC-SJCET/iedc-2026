"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const summitImages = Array.from({ length: 9 }, (_, i) => `/summit2022/${i + 1}.jpg`);

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const floatingCards = [
    { img: 0, x: -320, y: 40, rotate: -18, scale: 0.72, mx: -110, my: -80, ms: 0.55 },
    { img: 1, x: -220, y: -30, rotate: -10, scale: 0.68, mx: -125, my: 30, ms: 0.50 },
    { img: 2, x: -160, y: 80, rotate: -6, scale: 0.65, mx: -100, my: 120, ms: 0.45 },
    { img: 6, x: 160, y: 80, rotate: 6, scale: 0.65, mx: 100, my: 120, ms: 0.45 },
    { img: 7, x: 220, y: -30, rotate: 10, scale: 0.68, mx: 125, my: 30, ms: 0.50 },
    { img: 8, x: 320, y: 40, rotate: 18, scale: 0.72, mx: 110, my: -80, ms: 0.55 },
];

export default function EventsShowcase() {
    const [current, setCurrent] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragStart = useRef(0);
    const dragOffset = useRef(0);
    const [offset, setOffset] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = summitImages.length;
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, total - 1)));
            setOffset(0);
        },
        [total],
    );

    useEffect(() => {
        if (dragging) return;
        autoRef.current = setInterval(() => {
            setCurrent((p) => (p + 1) % total);
        }, 4000);
        return () => {
            if (autoRef.current) clearInterval(autoRef.current);
        };
    }, [dragging, total]);

    const handlePointerDown = (e: React.PointerEvent) => {
        setDragging(true);
        dragStart.current = e.clientX;
        dragOffset.current = 0;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!dragging) return;
        dragOffset.current = e.clientX - dragStart.current;
        setOffset(dragOffset.current);
    };

    const handlePointerUp = () => {
        if (!dragging) return;
        setDragging(false);
        const threshold = 50;
        if (dragOffset.current < -threshold && current < total - 1) {
            goTo(current + 1);
        } else if (dragOffset.current > threshold && current > 0) {
            goTo(current - 1);
        } else {
            setOffset(0);
        }
    };

    return (
        <section className="pt-0 pb-20 md:pb-32 overflow-x-clip">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                        Our Events
                    </span>
                    <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-4 leading-tight">
                        <span className="text-primary">IEDC Summit 2022</span>
                        <br />
                        <span className="text-text-main/70 text-2xl md:text-3xl font-medium">
                            meet their widest audience ever.
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center min-h-[520px] md:min-h-[620px]"
                >
                    {/* Floating background cards — responsive */}
                    {floatingCards.map((card, i) => {
                        const cx = isDesktop ? card.x : card.mx;
                        const cy = isDesktop ? card.y : card.my;
                        const cs = isDesktop ? card.scale : card.ms;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, scale: 0.4 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 + i * 0.08 }}
                                className={`absolute rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border border-white/20 ${isDesktop ? "w-40 h-56" : "w-20 h-28"}`}
                                style={{
                                    left: `calc(50% + ${cx}px)`,
                                    top: `calc(50% + ${cy}px)`,
                                    transform: `translate(-50%, -50%) rotate(${card.rotate}deg) scale(${cs})`,
                                    zIndex: 1,
                                    opacity: isDesktop ? 1 : 0.5,
                                }}
                            >
                                <Image
                                    src={summitImages[card.img]}
                                    alt={`Summit moment ${card.img + 1}`}
                                    fill
                                    className="object-cover will-change-transform"
                                    sizes={isDesktop ? "160px" : "80px"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </motion.div>
                        );
                    })}

                    {/* Phone mockup */}
                    <div className="relative w-[280px] md:w-[300px] mx-auto z-10">
                        <div className="bg-[#1D1D1F] rounded-[2.8rem] p-3 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.5)]">
                            <div className="bg-[#0A0A0A] rounded-[2.2rem] overflow-hidden">
                                <div className="flex items-center justify-between px-6 pt-3 pb-1">
                                    <span className="text-white/70 text-[11px] font-medium">19:26</span>
                                    <div className="w-24 h-6 bg-black rounded-full" />
                                    <span className="text-white/70 text-[11px]">📶 🔋</span>
                                </div>

                                <div className="px-4 pt-2 pb-3">
                                    <h3 className="text-white font-bold text-sm">IEDC Summit 2022</h3>
                                    <p className="text-gray-500 text-[10px] mt-0.5">Swipe to explore</p>
                                </div>

                                {/* Swipeable carousel */}
                                <div
                                    ref={containerRef}
                                    className="relative w-full aspect-[3/4] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y select-none"
                                    onPointerDown={handlePointerDown}
                                    onPointerMove={handlePointerMove}
                                    onPointerUp={handlePointerUp}
                                    onPointerCancel={handlePointerUp}
                                >
                                    <div
                                        className="flex h-full transition-transform duration-300 ease-out will-change-transform"
                                        style={{
                                            transform: `translateX(calc(-${current * 100}% + ${dragging ? offset : 0}px))`,
                                            transitionDuration: dragging ? "0ms" : "400ms",
                                        }}
                                    >
                                        {summitImages.map((src, i) => (
                                            <div key={i} className="relative w-full h-full flex-shrink-0">
                                                <Image
                                                    src={src}
                                                    alt={`IEDC Summit 2022 - Photo ${i + 1}`}
                                                    fill
                                                    className="object-cover pointer-events-none"
                                                    sizes="300px"
                                                    priority={i < 2}
                                                    draggable={false}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                                    {/* Image counter */}
                                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full pointer-events-none">
                                        {current + 1}/{total}
                                    </div>
                                </div>

                                {/* Dot indicators */}
                                <div className="flex justify-center gap-1.5 py-3 bg-[#0A0A0A]">
                                    {summitImages.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goTo(i)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                                                ? "w-5 bg-[#FF7A00]"
                                                : "w-1.5 bg-white/20 hover:bg-white/40"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Bottom bar */}
                                <div className="flex justify-center pb-2">
                                    <div className="w-28 h-1 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-text-muted text-sm mt-10"
                >
                    Drag or swipe to relive the moments
                </motion.p>
            </div>
        </section>
    );
}
