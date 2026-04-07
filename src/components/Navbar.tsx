import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Templify<span className="gradient-text">.ai</span>
          </span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">Features</Button>
          <Button variant="ghost" size="sm">Pricing</Button>
          <Button variant="ghost" size="sm">Docs</Button>
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="gradient" size="sm">Get Started</Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-2 border-t border-border/50 px-4 py-4 md:hidden">
          <Button variant="ghost" size="sm" className="justify-start">Features</Button>
          <Button variant="ghost" size="sm" className="justify-start">Pricing</Button>
          <Button variant="ghost" size="sm" className="justify-start">Docs</Button>
          <Button variant="outline" size="sm">Login</Button>
          <Button variant="gradient" size="sm">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
