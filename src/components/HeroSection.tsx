import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  const scrollToEditor = () => {
    document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="container relative mx-auto grid gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-8 lg:py-0">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkle /> AI-Powered Design Tool
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Turn Any Image Into an{" "}
            <span className="gradient-text">Editable Template</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Upload any screenshot, poster, or design — our AI instantly analyzes the layout and converts it into a fully editable template you can customize.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="gradient" size="lg" onClick={scrollToEditor}>
              <Upload className="h-5 w-5" />
              Upload Image
            </Button>
            <Button variant="glass" size="lg">
              See How It Works
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Free to try
            </span>
            <span>No signup required</span>
            <span>Export in seconds</span>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-2xl glow">
            <img
              src={heroMockup}
              alt="AI Template Generator preview"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function Sparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  );
}

export default HeroSection;
