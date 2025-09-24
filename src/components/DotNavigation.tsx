import { useEffect, useState } from "react";

interface DotNavigationProps {
  sections: { id: string; label: string }[];
}

const DotNavigation = ({ sections }: DotNavigationProps) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollY / windowHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const targetY = index * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(index);
    }
  };

  return (
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-125 ${
            activeSection === index
              ? "bg-primary border-primary shadow-lg shadow-primary/30"
              : "bg-transparent border-primary/40 hover:border-primary/60"
          }`}
          aria-label={`Go to ${section.label} section`}
          tabIndex={0}
        />
      ))}
    </nav>
  );
};

export default DotNavigation;