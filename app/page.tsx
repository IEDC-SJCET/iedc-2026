import FloatingNavbar from "./components/FloatingNavbar";
import HeroSection from "./components/HeroSection";
import HabitsShowcase from "./components/HabitsShowcase";
import BentoFeatures from "./components/BentoFeatures";
import UseCaseTabs from "./components/UseCaseTabs";
import SocialProofCards from "./components/SocialProofCards";
import MetricsSection from "./components/MetricsSection";
import AISmartAssist from "./components/AISmartAssist";
import TestimonialsGrid from "./components/TestimonialsGrid";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-white">
      <FloatingNavbar />
      <HeroSection />
      <HabitsShowcase />
      <BentoFeatures />
      <UseCaseTabs />
      <SocialProofCards />
      <MetricsSection />
      <AISmartAssist />
      <TestimonialsGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
