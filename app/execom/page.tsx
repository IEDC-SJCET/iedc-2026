"use client";

import { useState } from "react";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, X, ArrowRight } from "lucide-react";

interface Member {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin: string;
    email: string;
    letter: string;
}

import { execomHistory } from "./data";

const currentExecom = execomHistory.find(e => e.year === "26/27")!;
const leads = currentExecom.leads || [];
const teamSections = currentExecom.teamSections;

export default function ExecomPage() {
    const [selectedLead, setSelectedLead] = useState<Member | null>(null);

    return (
        <main className="relative min-h-screen text-black overflow-hidden bg-[#FFFAF8]">
            <div className="fixed inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#FF7A00]/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden text-black/[0.015]">
                    <h2 className="text-[35vw] font-black leading-none tracking-tighter select-none uppercase">
                        EXECOM
                    </h2>
                </div>
                <div className="absolute top-0 right-0 w-[50%] h-[30%] bg-[#FF7A00]/10 rounded-full blur-[100px] -rotate-12" />
                <div className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] bg-[#FF7A00]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black/[0.02] rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#FF7A00]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            </div>

            <div className="relative z-10 bg-white/30 backdrop-blur-[140px] min-h-screen">
                <FloatingNavbar />

                <section className="pt-48 pb-20 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center relative z-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-black"
                        >
                            EXECOM <span className="text-[#FF7A00]">26/27</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-500 text-lg max-w-xl mx-auto italic font-medium"
                        >
                            "The visionary team behind next-gen innovation."
                        </motion.p>
                    </div>
                </section>

                <section className="h-[60vh] md:h-[75vh] min-h-[500px] flex overflow-hidden border-y border-white/5">
                    {leads.map((lead, index) => (
                        <motion.div
                            key={index}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => setSelectedLead(lead)}
                            className="relative flex-1 group cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0 hover:flex-[1.5] transition-all duration-700 ease-out"
                        >
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[40vw] font-black select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                {lead.letter}
                            </div>
                            <div className="absolute inset-0 bg-[#FF7A00]/10 group-hover:bg-[#FF7A00]/0 transition-colors duration-500">
                                <img
                                    src={lead.image}
                                    alt={lead.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-12 whitespace-nowrap hidden md:block group-hover:opacity-0 transition-opacity">
                                <p className="text-xs font-bold tracking-[0.4em] uppercase text-[#FF7A00] rotate-180 [writing-mode:vertical-rl]">
                                    {lead.role}
                                </p>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <motion.div
                                    initial={{ y: 20 }}
                                    whileHover={{ y: 0 }}
                                    className="space-y-2 text-white"
                                >
                                    <h3 className="text-2xl font-bold leading-none">{lead.name}</h3>
                                    <p className="text-[#FF7A00] font-medium text-sm">{lead.role}</p>
                                    <div className="pt-4">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-white/50 border border-white/20 px-3 py-1 rounded-full">Explore Profile</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Sidebar Details Drawer */}
                <AnimatePresence>
                    {selectedLead && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedLead(null)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 w-full md:w-[450px] bg-[#111] z-[101] p-10 shadow-2xl overflow-y-auto"
                            >
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="mt-8 text-white">
                                    <span className="text-[#FF7A00] text-xs font-bold tracking-[0.2em] mb-4 block uppercase">{selectedLead.role}</span>
                                    <h2 className="text-4xl font-bold mb-6">{selectedLead.name}</h2>
                                    <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-8 border border-white/10">
                                        <img src={selectedLead.image} alt={selectedLead.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Biography</h4>
                                            <p className="text-gray-400 leading-relaxed text-[15px]">
                                                {selectedLead.bio}
                                            </p>
                                        </div>
                                        <div className="pt-6 flex gap-4">
                                            <a href={selectedLead.linkedin} className="flex-1 bg-white text-black h-14 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-gray-200 transition-colors">
                                                <Linkedin size={18} /> LinkedIn
                                            </a>
                                            <a href={`mailto:${selectedLead.email}`} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                                                <Mail size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <section className="pt-24 pb-12 px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-black">The Core Team</h2>
                            <p className="text-gray-500 mt-2">The architects of our success.</p>
                        </div>
                    </div>
                </section>

                <section className="pb-32 pt-12 space-y-24">
                    {teamSections.map((section, sIndex) => (
                        <div key={sIndex} className="space-y-10 group/section">
                            <div className="px-6 relative text-black">
                                <div className="max-w-7xl mx-auto flex items-center gap-6">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                                        {section.title}
                                    </h3>
                                    <div className="h-px flex-1 bg-gradient-to-r from-[#FF7A00]/50 to-transparent opacity-30 group-hover/section:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                            <div className="hidden md:block px-6">
                                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {section.members.map((member, mIndex) => (
                                        <TeamMemberCard key={mIndex} member={member} index={mIndex} />
                                    ))}
                                </div>
                            </div>
                            <div className="md:hidden">
                                <div className="overflow-x-auto hide-scrollbar px-6 flex gap-6 snap-x snap-mandatory pb-4">
                                    {section.members.map((member, mIndex) => (
                                        <div key={mIndex} className="min-w-[280px] snap-center">
                                            <TeamMemberCard member={member} index={mIndex} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center pt-8">
                        <a
                            href="/execom/past"
                            className="group flex items-center gap-3 px-8 py-4 border-2 border-black text-black rounded-2xl font-bold hover:bg-black hover:text-white transition-all duration-300"
                        >
                            View All Past Execoms
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}

function TeamMemberCard({ member, index }: { member: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF7A00]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 z-0">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
                        <span className="text-white/10 text-8xl font-black">{member.name[0]}</span>
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300 z-20">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-[#FF7A00] font-medium text-sm mt-1 uppercase tracking-widest">{member.role}</p>
                </div>
            </div>
            <motion.div
                className="absolute inset-0 z-30 bg-[#FF7A00] p-8 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
            >
                <div>
                    <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                    <p className="text-black/60 font-bold text-xs uppercase tracking-widest mt-1 mb-8">{member.role}</p>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 [mask-image:linear-gradient(to_bottom_left,black,transparent)] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    <p className="text-black/80 text-sm leading-relaxed font-medium">
                        Dedicated member of IEDC SJCET, contributing to our innovation ecosystem.
                    </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
                        <Linkedin size={18} className="text-black" />
                    </div>
                    <div className="bg-black text-white h-10 px-4 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                        View Profile <ArrowRight size={12} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
