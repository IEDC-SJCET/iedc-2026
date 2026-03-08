"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const quickLinks = [
    { label: "About IEDC", href: "/#features" },
    { label: "Events", href: "/#use-case" },
    { label: "Execom", href: "/execom" },
    { label: "Startups", href: "/#startups" },
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
        <footer className="border-t border-border bg-white text-text-main">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="md:hidden space-y-10">
                    <div className="rounded-xl overflow-hidden border border-border shadow-md h-[200px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339742505!2d76.7260948!3d9.7268467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph's%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1772944294036!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="St. Joseph's College of Engineering and Technology, Palai"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Logo after Map */}
                    <div className="flex justify-start">
                        <Image
                            src="/bootcamp.png"
                            alt="SJCET Bootcamp"
                            width={400}
                            height={120}
                            className="h-auto w-full max-w-[280px] mix-blend-multiply"
                        />
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">FOLLOW US</h4>
                        <div className="flex items-center gap-4 text-text-muted">
                            <Linkedin size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            <Instagram size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="hover:text-text-main transition-colors cursor-pointer">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <Facebook size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="hover:text-text-main transition-colors cursor-pointer">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.291a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="hover:text-text-main transition-colors cursor-pointer">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                    </div>

                    {/* More Links */}
                    <div className="space-y-6">
                        <div className="inline-block border-b-2 border-orange-500 pb-1">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">MORE LINKS</h4>
                        </div>

                        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                            <a href="/" className="text-[13px] font-medium text-text-muted uppercase">Home</a>
                            <a href="/execom" className="text-[13px] font-medium text-text-muted uppercase">Execom</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase">History</a>
                            <a href="/#features" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Why IEDC</a>
                            <a href="/events" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Events</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Location</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Summit 2022</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">SJCET Palai</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Webdev</a>
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2">

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">Reach Us</h4>
                                <div className="rounded-xl overflow-hidden border border-border shadow-md h-[240px] relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339742505!2d76.7260948!3d9.7268467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph's%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1772944294036!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="St. Joseph's College of Engineering and Technology, Palai"
                                        className="transition-all duration-500"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Image
                                    src="/bootcamp.png"
                                    alt="SJCET Bootcamp"
                                    width={400}
                                    height={120}
                                    className="h-auto w-full max-w-[360px] mix-blend-multiply"
                                />
                            </div>
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
                    className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-16 pt-6 border-t border-border gap-4"
                >
                    <p className="text-text-muted text-sm text-center md:text-left">
                        Designed by <a href="https://" target="_blank" rel="noopener noreferrer" className="text-text-main hover:underline font-medium">Tech Team</a>.
                    </p>
                    <div className="hidden md:flex items-center gap-3">
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Facebook size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
