"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Member {
    name: string;
    role: string;
    image: string;
    bio?: string;
    linkedin?: string;
    email?: string;
    letter?: string;
}

interface TeamMemberCardProps {
    member: Member;
    index: number;
    onSelect: (member: Member) => void;
    isTapped?: boolean;
    onTap?: () => void;
}

export function TeamMemberCard({ member, index, onSelect, isTapped = false, onTap }: TeamMemberCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={(e) => {
                e.stopPropagation();
                if (onTap) {
                    onTap();
                }
            }}
            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer text-white"
        >
            {/* Background Orange Gradient on Hover/Tap */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-[#FF7A00]/40 via-transparent to-transparent transition-opacity duration-500 z-10 ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
            />

            <div className="absolute inset-0 z-0 will-change-transform">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={`object-cover transition-all duration-700 ${isTapped ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                            }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
                        <span className="text-white/10 text-8xl font-black">{member.name[0]}</span>
                    </div>
                )}

                {/* Default Info Overlay (Bottom) */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 z-20 ${isTapped ? 'opacity-0' : 'group-hover:opacity-0'
                    }`}>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-[#FF7A00] font-medium text-sm mt-1 uppercase tracking-widest">{member.role}</p>
                </div>
            </div>

            {/* Orange Hover/Tap Overlay Content */}
            <div
                className={`absolute inset-0 z-30 bg-[#FF7A00] p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-[0.16, 1, 0.3, 1] ${isTapped ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                    }`}
            >
                <div>
                    <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                    <p className="text-black/60 font-bold text-xs uppercase tracking-widest mt-1 mb-8">{member.role}</p>
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-white/10 [mask-image:linear-gradient(to_bottom_left,black,transparent)] pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                    />
                    <p className="text-black/80 text-sm leading-relaxed font-medium">
                        {member.bio || "Dedicated member of IEDC SJCET, contributing to our innovation ecosystem."}
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
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(member);
                        }}
                        className="bg-black text-white h-10 px-4 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                        View Profile <ArrowRight size={12} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
