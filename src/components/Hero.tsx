import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Database, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroSlides = [
  {
    badge: { icon: Sparkles, text: "INNOVATION AWAITS" },
    title: "AI & DATA",
    subtitle: "FOR YOUR FUTURE",
    description: "Transform your business with cutting-edge AI and data solutions. We empower organizations to leverage the power of artificial intelligence and data analytics to drive innovation, optimize operations, and achieve sustainable growth.",
    buttonText: "Learn More"
  },
  {
    badge: { icon: Brain, text: "SMART SOLUTIONS" },
    title: "MACHINE LEARNING",
    subtitle: "THAT DELIVERS",
    description: "Harness the power of advanced machine learning algorithms to unlock insights from your data. Our intelligent solutions adapt and learn from your business patterns to provide predictive analytics and automated decision-making.",
    buttonText: "Explore AI"
  },
  {
    badge: { icon: Database, text: "DATA EXCELLENCE" },
    title: "BIG DATA",
    subtitle: "ANALYTICS",
    description: "Turn your data into your competitive advantage. Our comprehensive data analytics platform processes massive datasets to reveal hidden patterns, trends, and opportunities that drive strategic business decisions.",
    buttonText: "See Analytics"
  },
  {
    badge: { icon: Zap, text: "FUTURE READY" },
    title: "AUTOMATION",
    subtitle: "& EFFICIENCY",
    description: "Streamline your operations with intelligent automation solutions. From robotic process automation to AI-powered workflows, we help you eliminate manual tasks and focus on what matters most.",
    buttonText: "Automate Now"
  }
];

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden h-screen">
      <Carousel className="w-full h-full" opts={{ loop: true, align: "start", axis: "y" }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                    <slide.badge.icon className="w-4 h-4 text-white" />
                    <span className="text-body-sm font-medium text-white">{slide.badge.text}</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-display-lg text-white mb-6">
                    {slide.title}
                    <br />
                    <span className="text-brand-light">{slide.subtitle}</span>
                  </h1>

                  {/* Description */}
                  <p className="text-body-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    size="lg" 
                    className="btn-primary bg-white text-brand-navy hover:bg-white/95 font-semibold px-8 py-4 h-auto"
                  >
                    {slide.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="top-4 left-1/2 -translate-x-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="bottom-4 left-1/2 -translate-x-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-full h-full bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero;