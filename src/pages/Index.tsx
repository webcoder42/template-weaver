import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EditorSection from "@/components/EditorSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EditorSection />
      <FeaturesSection />
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © 2026 Templify.ai — AI-Powered Template Generator
      </footer>
    </div>
  );
};

export default Index;
