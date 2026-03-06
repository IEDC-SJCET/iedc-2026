"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const testimonials = [
    {
        quote: "Habitline made my mornings feel manageable again.",
        name: "Maya Zong",
        role: "Student",
    },
    {
        quote: "I used to ignore reminders from other apps, but these feel calm and well-timed. It's like the app knows when I'm actually able to do something.",
        name: "Ethan Miller",
        role: "Gym Trainer",
    },
    {
        quote: "It's the first habit app that doesn't overwhelm me.",
        name: "Hannah Lee",
        role: "Content Writer",
    },
    {
        quote: "The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty or overwhelmed.",
        name: "Daniel Perez",
        role: "Software Engineer",
    },
    {
        quote: "Focus blocks changed the way I work. I get more done in two hours now than what used to take half a day.",
        name: "Laura Kim",
        role: "Product Designer",
    },
    {
        quote: "I actually stick to my routines now. Small steps finally add up",
        name: "Priya Shah",
        role: "Marketing Specialist",
    },
    {
        quote: "This is the first habit app that doesn't overwhelm me. Everything feels calm, structured, and intentional.",
        name: "Andre Lewis",
        role: "University Student",
    },
    {
        quote: "The simple visuals and progress cues make it easy to stay consistent every day.",
        name: "Kevin Brooks",
        role: "Fitness Coach",
    },
    {
        quote: "Feels tailored to my day and keeps me motivated.",
        name: "Sofia Martinez",
        role: "UX Researcher",
    },
];

export default function TestimonialsGrid() {
    return (
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-4"
            >
                <span className="inline-block bg-card-bg border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                    A closer look
                </span>
                <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-4">
                    Alumni Testimonials
                </h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-primary font-bold text-lg">4.5/5</span>
                </div>
                <p className="text-text-muted text-sm">(Trusted by 1582+ users)</p>
            </motion.div>

            {/* Testimonial avatars carousel */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center gap-3 mb-12 overflow-x-auto no-scrollbar pb-2"
            >
                {[
                    { name: "Marcus Reed", role: "Fitness Instructor" },
                    { name: "Aisha Khan", role: "Digital Marketer" },
                    { name: "Olivia Park", role: "Project Manager" },
                    { name: "Ryan Cooper", role: "Software Developer" },
                ].map((person, i) => (
                    <div key={i} className="flex items-center gap-2 bg-card-bg border border-border rounded-full px-3 py-1.5 shrink-0">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />
                        <div>
                            <p className="text-[11px] font-medium text-text-main">{person.name}</p>
                            <p className="text-[9px] text-text-muted">{person.role}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Masonry grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="break-inside-avoid bg-card-bg rounded-2xl p-6 border border-border/50"
                    >
                        <p className="text-text-main text-sm leading-relaxed mb-4">{t.quote}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />
                                <div>
                                    <p className="text-sm font-semibold text-text-main">{t.name}</p>
                                    <p className="text-[11px] text-text-muted">{t.role}</p>
                                </div>
                            </div>
                            <X size={16} className="text-text-muted" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View all reviews button */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center mt-12"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#1D1D1F] text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-[#333] transition-colors"
                >
                    View all Reviews
                </motion.button>
            </motion.div>
        </section>
    );
}
