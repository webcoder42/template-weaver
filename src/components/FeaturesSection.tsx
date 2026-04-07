import { ScanSearch, Type, Wand2, Copy } from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "AI Template Detection",
    description: "Our AI automatically detects layout structure, text zones, images, and shapes from any uploaded image.",
  },
  {
    icon: Type,
    title: "Smart Text Editing",
    description: "Extracted text is fully editable — change fonts, sizes, colors, and positioning with ease.",
  },
  {
    icon: Wand2,
    title: "Instant Redesign",
    description: "Apply different styles, themes, and color palettes to your detected template in one click.",
  },
  {
    icon: Copy,
    title: "One-Click Variations",
    description: "Generate multiple design variations instantly, perfect for A/B testing and creative exploration.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Everything you need to turn images into editable designs</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass hover-lift group rounded-2xl p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
