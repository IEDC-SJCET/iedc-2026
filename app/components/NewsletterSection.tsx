"use client";

import { useState, memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Loader2 } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const NewsletterSection = memo(function NewsletterSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function initPdf() {
            try {
                // Load PDF.js from CDN
                const script = document.createElement("script");
                script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
                script.onload = async () => {
                    if (!isMounted) return;

                    const pdfjsLib = (window as any).pdfjsLib;
                    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

                    try {
                        const loadingTask = pdfjsLib.getDocument("/Newsletter.pdf");
                        const pdf = await loadingTask.promise;
                        const page = await pdf.getPage(1);
                        const viewport = page.getViewport({ scale: 1.5 });

                        if (!isMounted || !canvasRef.current) return;

                        const canvas = canvasRef.current;
                        const context = canvas.getContext("2d");
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };

                        await page.render(renderContext).promise;
                        setIsLoading(false);
                    } catch (err) {
                        console.error("PDF loading error:", err);
                        if (isMounted) {
                            setHasError(true);
                            setIsLoading(false);
                        }
                    }
                };
                document.head.appendChild(script);
            } catch (err) {
                console.error("Script loading error:", err);
                if (isMounted) {
                    setHasError(true);
                    setIsLoading(false);
                }
            }
        }

        initPdf();
        return () => { isMounted = false; };
    }, []);

    return (
        <>
            <section className="py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                                Latest Issue
                            </span>
                            <h2 className="text-4xl md:text-[56px] font-bold tracking-tight leading-none">
                                <span className="text-[#FF7A00]">IEDC</span>
                                <br />
                                <span className="text-text-main">NEWSLETTER</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-text-muted text-sm md:text-base max-w-sm font-medium"
                        >
                            Stay updated with our latest innovations, events, and stories from the IEDC community.
                        </motion.p>
                    </div>

                    {/* Newsletter Card */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* PDF Preview Card */}
                            <div
                                onClick={() => window.open("/Newsletter.pdf", "_blank")}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] rounded-none overflow-hidden bg-[#1D1D1F] border border-black/10 shadow-2xl shadow-black/10 transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                                    {/* PDF canvas preview */}
                                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-gray-900">
                                        {isLoading && (
                                            <div className="flex flex-col items-center gap-2">
                                                <Loader2 className="animate-spin text-[#FF7A00]" size={32} />
                                                <p className="text-xs text-white/50 animate-pulse">Loading Preview...</p>
                                            </div>
                                        )}
                                        {hasError && (
                                            <div className="text-center p-8">
                                                <FileText size={48} className="text-white/20 mx-auto mb-4" />
                                                <p className="text-sm text-white/40">Front page preview unavailable</p>
                                                <p className="text-xs text-white/20 mt-1 italic">(Click to open PDF)</p>
                                            </div>
                                        )}
                                        <canvas
                                            ref={canvasRef}
                                            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
                                        />
                                    </div>

                                    {/* Subtle Overlay gradient - significantly reduced for better visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />

                                    {/* Hover overlay hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/5">
                                        <div className="bg-[#FF7A00] text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform duration-500">
                                            <ExternalLink size={14} />
                                            Open Newsletter
                                        </div>
                                    </div>

                                    {/* Corner badge */}
                                    <div className="absolute top-6 right-6 bg-[#FF7A00] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                        PDF
                                    </div>
                                </div>
                            </div>

                            {/* Info Panel */}
                            <div className="flex flex-col gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main">IEDC SJCET Newsletter</h3>
                                        <p className="text-text-muted text-sm">Official Publication</p>
                                    </div>

                                    {/* Mobile-only concise text */}
                                    <p className="text-text-muted leading-relaxed text-justify lg:hidden">
                                        Dive into the latest edition of our newsletter — packed with highlights of our bootcamps, hackathons,
                                        innovation challenges, and the inspiring stories of our community members driving change through technology.
                                    </p>

                                    {/* Desktop-only detailed text */}
                                    <div className="hidden lg:flex flex-col gap-4 text-text-muted leading-relaxed text-justify text-sm">
                                        <p>
                                            The IEDC SJCET Newsletter captures the spirit of innovation, creativity and entrepreneurship that thrives within our campus.
                                            It highlights the milestones, initiatives and achievements that shaped our journey throughout the year.
                                            This edition reflects the hard work, passion and commitment of our student innovators, mentors and the entire Bootcamp community.
                                        </p>
                                        <p>
                                            Inside, you will find a comprehensive overview of our flagship events ranging from Prayana, Insendium 10.0 and Wednesday Café to Creative Pedia, SIH engagements and KTU Idea Pitching.
                                            Each section showcases the enthusiasm and active participation of students as they explore ideas, build projects, collaborate, and step closer to the startup ecosystem.
                                        </p>
                                        <p>
                                            The newsletter also highlights our impactful collaborations, including Project of the Week, Digital Fortress, Techipedia, Season of Commits and UI/UX Sprint.
                                            These partnerships offered students hands-on learning, exposure to industry best practices and opportunities to build real-world solutions.
                                            Along with this, orientation programs for first-years, internship initiatives, and teacherpreneur activities further strengthened our innovation-driven culture.
                                        </p>
                                        <p>
                                            From YIP Orientation to our Annual General Meeting and farewell, this edition captures every moment that contributed to a vibrant year of growth and transformation.
                                            The newsletter stands as a testament to the continuous efforts of the Bootcamp team and the supportive ecosystem that empowers students to dream, build and achieve.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 lg:hidden">
                                        {[
                                            "Event Highlights",
                                            "Student Stories",
                                            "Innovation Updates",
                                            "Community News",
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 text-sm font-medium text-text-main"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
});

export default NewsletterSection;
