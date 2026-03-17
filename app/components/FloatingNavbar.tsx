"use client";

import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About IEDC", href: "/#about" },
    { label: "Events", href: "/#events" },
    // { label: "Startups", href: "/events" },
    { label: "Execom", href: "/execom" },

];

const FloatingNavbar = memo(function FloatingNavbar() {
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
                        <span className="font-semibold text-[15px] text-text-main whitespace-nowrap">IEDC SJCET</span>
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

            {/* Mobile Menu Backdrop & Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[300px] bg-[#111] z-[101] p-8 shadow-2xl flex flex-col md:hidden"
                        >
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-6 py-4 text-lg font-bold rounded-2xl transition-all ${activeSection === link.href
                                            ? "bg-[#FF7A00] text-black"
                                            : "text-white/70 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/10 text-white/30 text-xs font-bold tracking-widest uppercase">
                                IEDC SJCET © 2026
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
});

export default FloatingNavbar;
