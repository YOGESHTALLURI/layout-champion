import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationDot {
  id: string;
  label: string;
}

const SlideNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navigationDots: NavigationDot[] = [
    { id: "hero", label: "Hero" },
    { id: "clients", label: "Clients" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    { id: "it-services", label: "IT Services" },
    { id: "cta", label: "Call to Action" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationDots.map(dot => document.getElementById(dot.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationDots[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
      {navigationDots.map((dot) => (
        <button
          key={dot.id}
          onClick={() => scrollToSection(dot.id)}
          className={cn(
            "w-3 h-3 rounded-full border-2 border-white/60 transition-all duration-300 hover:scale-125 group relative",
            activeSection === dot.id 
              ? "bg-white border-white shadow-lg shadow-white/30" 
              : "bg-transparent hover:bg-white/20"
          )}
          aria-label={`Navigate to ${dot.label} section`}
        >
          <span className="absolute right-5 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {dot.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SlideNavigation;