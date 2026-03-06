"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const quickLinks = [
    { label: "About IEDC", href: "#features" },
    { label: "Events", href: "#use-case" },
    { label: "Startups", href: "#metrics" },
    { label: "Resources", href: "#smart-assist" },
];

const pages = [
    { label: "About", href: "#" },
    { label: "Waitlist", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Error 404", href: "#" },
];

const support = [
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#1D1D1F] rounded-lg flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#FF7A00" />
                                </svg>
                            </div>
                            <span className="font-semibold text-lg text-text-main">IEDC SJCET</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-2">Stay on top of your habits</h3>
                        <p className="text-text-muted text-sm mb-6">
                            No spam. Just simple advice for staying consistent.
                        </p>
                        {/* Email form */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="flex-1 bg-card-bg border border-border rounded-full px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
                            />
                            <button className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Quick links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Pages</h4>
                        <ul className="space-y-2.5">
                            {pages.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Support</h4>
                        <ul className="space-y-2.5">
                            {support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between mt-16 pt-6 border-t border-border gap-4"
                >
                    <p className="text-text-muted text-sm">
                        Designed by <a href="https://www.webestica.com/" target="_blank" rel="noopener noreferrer" className="text-text-main hover:underline font-medium">Tech Team IEDC</a>.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Instagram size={16} className="text-text-muted" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Linkedin size={16} className="text-text-muted" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Facebook size={16} className="text-text-muted" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
