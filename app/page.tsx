"use client";

import dynamic from "next/dynamic";
import FloatingNavbar from "./components/FloatingNavbar";
import HeroSection from "./components/HeroSection";
import HabitsShowcase from "./components/HabitsShowcase";
import BentoFeatures from "./components/BentoFeatures";
import AboutSJCET from "./components/AboutSJCET";
import EventSection from "./components/EventSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

// Lazy load heavy components
const EventsShowcase = dynamic(() => import("./components/EventsShowcase"), { ssr: false });
const GlobeSection = dynamic(() => import("./components/GlobeSection"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("./components/TestimonialsGrid"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen text-black overflow-hidden bg-[#FFFAF8]">
      <div className="fixed inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#FF7A00]/10 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute top-[20%] right-[-5%] w-[50%] h-[30%] bg-[#FF7A00]/5 rounded-full blur-[100px] -rotate-12" />

        <div className="absolute top-1/2 right-[10%] w-[40%] h-[40%] bg-[#FF7A00]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7A00]/10 rounded-full blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
      </div>

      <FloatingNavbar />
      <div className="relative z-10 bg-white/20 backdrop-blur-3xl">
        <HeroSection />
        <HabitsShowcase />
        <BentoFeatures />
        <AboutSJCET />
        <EventSection />
        <EventsShowcase />
        <GlobeSection />
        <TestimonialsGrid />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
