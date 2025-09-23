import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-body-sm font-medium text-white">INNOVATION AWAITS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-display-lg text-white mb-6">
            AI & DATA
            <br />
            <span className="text-brand-light">FOR YOUR FUTURE</span>
          </h1>

          {/* Description */}
          <p className="text-body-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI and data solutions. We empower organizations 
            to leverage the power of artificial intelligence and data analytics to drive innovation, 
            optimize operations, and achieve sustainable growth.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="btn-primary bg-white text-brand-navy hover:bg-white/95 font-semibold px-8 py-4 h-auto"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero;