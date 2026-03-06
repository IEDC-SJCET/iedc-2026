"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About IEDC", href: "#features" },
    { label: "Events", href: "#use-case" },
    { label: "Startups", href: "#metrics" },
    { label: "Resources", href: "#smart-assist" },
];

export default function FloatingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "top-3" : "top-4"
                    }`}
            >
                <div className="glass rounded-full border border-white/20 shadow-lg shadow-black/5 px-2 py-1.5 flex items-center gap-1">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 pl-3 pr-4">
                        <div className="w-7 h-7 bg-[#1D1D1F] rounded-lg flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#FF7A00" />
                            </svg>
                        </div>
                        <span className="font-semibold text-[15px] text-text-main">IEDC SJCET</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center bg-white/60 rounded-full border border-gray-200/60 px-1 py-0.5">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${activeSection === link.href
                                    ? "bg-[#1D1D1F] text-white"
                                    : "text-text-muted hover:text-text-main"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right icons */}
                    <div className="hidden md:flex items-center gap-1 pl-3 pr-1">
                        <a
                            href="https://www.apple.com/in/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-[#1D1D1F] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        </a>
                        <a
                            href="https://play.google.com/store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 bg-[#1D1D1F] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.207 12l2.49-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors mr-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-50 glass rounded-2xl border border-white/20 shadow-xl p-4"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`px-4 py-3 text-[15px] font-medium rounded-xl transition-all ${activeSection === link.href
                                        ? "bg-[#1D1D1F] text-white"
                                        : "text-text-muted hover:bg-gray-100 hover:text-text-main"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex gap-2 mt-2 pt-2 border-t border-gray-200">
                                <a
                                    href="https://www.apple.com/in/app-store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 h-11 bg-[#1D1D1F] rounded-xl flex items-center justify-center gap-2 text-white text-sm font-medium"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    iPhone
                                </a>
                                <a
                                    href="https://play.google.com/store/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 h-11 bg-[#1D1D1F] rounded-xl flex items-center justify-center gap-2 text-white text-sm font-medium"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.207 12l2.49-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                                    </svg>
                                    Android
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
