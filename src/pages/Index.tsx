import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScoreReportSection from "@/components/ScoreReportSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScoreReportSection />
      <VideoShowcaseSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
