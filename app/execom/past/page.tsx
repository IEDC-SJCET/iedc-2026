"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import FloatingNavbar from "../../components/FloatingNavbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { execomHistory, Member as DataMember } from "../data";

interface LocalMember {
    name: string;
    role: string;
    image: string;
    bio?: string;
    linkedin?: string;
    email?: string;
    letter?: string;
}

function PastExecomContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const rawYearParam = searchParams.get("year");
    const selectedYear = rawYearParam ? rawYearParam.replace("-", "/") : null;

    const [selectedMember, setSelectedMember] = useState<LocalMember | null>(null);

    const handleSetYear = (year: string | null) => {
        if (!year) {
            router.push(pathname);
        } else {
            router.push(`${pathname}?year=${year.replace("/", "-")}`);
        }
    };

    // Filter out current year
    const pastYears = execomHistory.filter(e => e.year !== "26/27");
    const currentData = execomHistory.find(e => e.year === selectedYear);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="relative min-h-screen text-black overflow-hidden bg-[#FFFAF8]">
            {/* Background elements */}
            <div className="fixed inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden text-black/[0.015]">
                    <h2 className="text-[35vw] font-black leading-none tracking-tighter select-none uppercase">
                        {selectedYear ? "HISTORY" : "LEGACY"}
                    </h2>
                </div>
                <div className="absolute top-0 right-0 w-[50%] h-[30%] bg-[#FF7A00]/10 rounded-full blur-[100px] -rotate-12" />
                <div className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] bg-[#FF7A00]/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#FF7A00]/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            </div>

            <div className="relative z-10 bg-white/30 backdrop-blur-3xl min-h-screen flex flex-col">
                <FloatingNavbar />

                <AnimatePresence mode="wait">
                    {!selectedYear ? (
                        <motion.section
                            key="gallery"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex-1 pt-48 pb-20 px-6 max-w-7xl mx-auto w-full"
                        >
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-block mb-6"
                                >
                                    <span className="px-4 py-2 rounded-full border border-[#FF7A00]/20 bg-[#FF7A00]/5 text-[#FF7A00] text-xs font-bold uppercase tracking-widest">
                                        The Legacy
                                    </span>
                                </motion.div>
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-black uppercase">
                                    PAST <span className="text-[#FF7A00]">EXECOMS</span>
                                </h1>
                                <p className="text-gray-500 text-lg max-w-xl mx-auto italic font-medium">
                                    "Exploring the journey of innovation and leadership across the years."
                                </p>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {pastYears.map((entry) => (
                                    <motion.div
                                        key={entry.year}
                                        variants={itemVariants}
                                        onClick={() => handleSetYear(entry.year)}
                                        className="group relative h-64 rounded-[2.5rem] overflow-hidden cursor-pointer border border-black/5 bg-white/40 backdrop-blur-md hover:bg-black transition-all duration-500 shadow-xl shadow-black/5"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                                        <div className="absolute top-8 left-8">
                                            <span className="text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2 block">Session</span>
                                            <h3 className="text-4xl font-black text-black group-hover:text-white transition-colors duration-500">{entry.year}</h3>
                                        </div>

                                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-400 transition-colors">
                                                {entry.leads ? `${entry.leads.length} Leads • ` : ""}{entry.teamSections.length} Departments
                                            </p>
                                            <div className="w-12 h-12 rounded-full bg-black group-hover:bg-[#FF7A00] flex items-center justify-center transition-all translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-lg shadow-[#FF7A00]/20">
                                                <ArrowRight size={20} className="text-white" />
                                            </div>
                                        </div>

                                        <div className="absolute -right-4 -top-4 text-black/[0.03] group-hover:text-white/5 text-9xl font-black select-none pointer-events-none transition-colors">
                                            {entry.year.split('/')[0]}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.section>
                    ) : (
                        <motion.section
                            key="detail"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1"
                        >
                            <div className="pt-48 pb-12 px-6 max-w-7xl mx-auto w-full">
                                <button
                                    onClick={() => handleSetYear(null)}
                                    className="group flex items-center gap-2 text-black/40 hover:text-[#FF7A00] font-bold text-sm uppercase tracking-widest mb-12 transition-colors"
                                >
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    Back to Legacy
                                </button>

                                <div className="text-center mb-16">
                                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-black uppercase">
                                        EXECOM <span className="text-[#FF7A00]">{selectedYear}</span>
                                    </h1>
                                    <p className="text-gray-500 text-lg italic font-medium"> Architects of Session {selectedYear} </p>
                                </div>
                            </div>

                            {currentData && (
                                <>
                                    {currentData.leads && currentData.leads.length > 0 && (
                                        <section className="h-[60vh] md:h-[75vh] min-h-[500px] flex overflow-hidden border-y border-white/5">
                                            {currentData.leads.map((lead, index) => (
                                                <motion.div
                                                    key={`${selectedYear}-${index}`}
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                    onClick={() => setSelectedMember(lead as LocalMember)}
                                                    className="relative flex-1 group cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0 hover:flex-[1.5] transition-all duration-700 ease-out"
                                                >
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[40vw] font-black select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                                                        {lead.letter}
                                                    </div>
                                                    <div className="absolute inset-0 bg-[#FF7A00]/10 group-hover:bg-[#FF7A00]/0 transition-colors duration-500 will-change-[flex]">
                                                        {lead.image ? (
                                                            <Image
                                                                src={lead.image}
                                                                alt={lead.name}
                                                                fill
                                                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                                                sizes="(max-width: 768px) 100vw, 25vw"
                                                                priority={index < 2}
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#222] flex items-center justify-center">
                                                                <span className="text-[#FF7A00]/20 text-9xl font-black group-hover:scale-110 transition-transform duration-700">
                                                                    {lead.letter}
                                                                </span>
                                                            </div>
                                                        )}
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
                                    )}

                                    <section className="pb-32 pt-24 space-y-24">
                                        {currentData.teamSections.map((section, sIndex) => (
                                            <div key={`${selectedYear}-${section.title}`} className="space-y-10 group/section">
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
                                                            <TeamMemberCard key={`${selectedYear}-${mIndex}`} member={member} index={mIndex} onSelect={setSelectedMember} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="md:hidden">
                                                    <div className="overflow-x-auto hide-scrollbar px-6 flex gap-6 snap-x snap-mandatory pb-4">
                                                        {section.members.map((member, mIndex) => (
                                                            <div key={`${selectedYear}-${mIndex}`} className="min-w-[280px] snap-center">
                                                                <TeamMemberCard member={member} index={mIndex} onSelect={setSelectedMember} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                </>
                            )}
                        </motion.section>
                    )}
                </AnimatePresence>

                <Footer />
            </div>

            {/* Sidebar Details Drawer */}
            <AnimatePresence>
                {selectedMember && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
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
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                            >
                                <X size={20} />
                            </button>
                            <div className="mt-8 text-white">
                                <span className="text-primary text-xs font-bold tracking-[0.2em] mb-4 block uppercase whitespace-nowrap overflow-hidden text-ellipsis">{selectedMember.role}</span>
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">{selectedMember.name}</h2>
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 border border-white/10 relative">
                                    {selectedMember.image ? (
                                        <Image
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 450px"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
                                            <span className="text-white/10 text-9xl font-black">{selectedMember.letter || selectedMember.name[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-6">
                                    {selectedMember.bio && (
                                        <div>
                                            <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">Biography</h4>
                                            <p className="text-gray-400 leading-relaxed text-[15px]">
                                                {selectedMember.bio}
                                            </p>
                                        </div>
                                    )}
                                    <div className="pt-6 flex gap-4">
                                        {selectedMember.linkedin && (
                                            <a
                                                href={selectedMember.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-white text-black h-14 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-gray-200 transition-colors"
                                            >
                                                <Linkedin size={18} /> LinkedIn
                                            </a>
                                        )}
                                        {selectedMember.email && (
                                            <a href={`mailto:${selectedMember.email}`} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 text-white">
                                                <Mail size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

export default function PastExecomPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#FFFAF8] flex items-center justify-center text-[#FF7A00] font-bold tracking-widest uppercase">Loading Legacy...</div>}>
            <PastExecomContent />
        </Suspense>
    );
}

function TeamMemberCard({ member, index, onSelect }: { member: any, index: number, onSelect: (m: LocalMember) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF7A00]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 z-0 will-change-transform">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
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
                    {member.linkedin ? (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Linkedin size={18} className="text-black" />
                        </a>
                    ) : (
                        <div className="w-10 h-10" />
                    )}
                    <button
                        onClick={() => onSelect(member as LocalMember)}
                        className="bg-black text-white h-10 px-4 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                        View Profile <ArrowRight size={12} />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
