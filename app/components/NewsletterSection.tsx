"use client";

import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ExternalLink } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const NewsletterSection = memo(function NewsletterSection() {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

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
                                onClick={() => setIsViewerOpen(true)}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] rounded-none overflow-hidden bg-[#1D1D1F] border border-black/10 shadow-2xl shadow-black/10 transition-transform duration-500 group-hover:scale-[1.02]">
                                    {/* PDF iframe preview*/}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <iframe
                                            src="/newsletter.pdf#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                                            className="absolute w-full h-[120%] -top-[10%] pointer-events-none"
                                            title="IEDC Newsletter Preview"
                                        />
                                    </div>

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="bg-[#FF7A00] text-black font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-[#FF7A00]/30 scale-90 group-hover:scale-100 transition-transform duration-500">
                                            <FileText size={16} />
                                            Read Newsletter
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

                                    <p className="text-text-muted leading-relaxed text-justify">
                                        Dive into the latest edition of our newsletter — packed with highlights of our bootcamps, hackathons,
                                        innovation challenges, and the inspiring stories of our community members driving change through technology.
                                    </p>

                                    {/* Feature bullets */}
                                    <div className="grid grid-cols-2 gap-4">
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

            {/* Full-screen PDF Viewer Modal */}
            <AnimatePresence>
                {isViewerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsViewerOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-4 md:inset-8 lg:inset-12 bg-white rounded-3xl overflow-hidden z-[201] shadow-2xl flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center">
                                        <FileText size={16} className="text-[#FF7A00]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-text-main">IEDC Newsletter</h3>
                                        <p className="text-text-muted text-xs">Official Publication</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="/newsletter.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-[#FF7A00] transition-colors uppercase tracking-wider"
                                    >
                                        <ExternalLink size={14} />
                                        Open in Tab
                                    </a>
                                    <button
                                        onClick={() => setIsViewerOpen(false)}
                                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                    >
                                        <X size={18} className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 bg-gray-100">
                                <iframe
                                    src="/newsletter.pdf"
                                    className="w-full h-full"
                                    title="IEDC Newsletter"
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
});

export default NewsletterSection;
