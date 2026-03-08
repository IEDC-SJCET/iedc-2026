"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "About IEDC", href: "/#features" },
    { label: "Events", href: "/#use-case" },
    { label: "Startups", href: "/#startups" },
    { label: "Execom", href: "/execom" },

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
                        <div className="w-7 h-7 bg-[#1D1D1F] rounded-lg flex items-center justify-center overflow-hidden p-1">
                            <Image
                                src="/smallairplane.png"
                                alt="Plane"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
