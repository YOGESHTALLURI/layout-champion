import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                ARKIN SOFTWARE TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#clients" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
              Clients
            </a>
            <a href="#contact" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Button variant="default" size="sm" className="btn-primary">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#clients" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
                Clients
              </a>
              <a href="#contact" className="text-body-md text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button variant="default" size="sm" className="btn-primary self-start">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;