import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-display-md text-foreground mb-8">
            Let's Build Your <span className="text-brand-primary font-bold">Application</span>
          </h2>
          
          <Button 
            size="lg" 
            className="btn-primary bg-brand-primary hover:bg-brand-secondary font-semibold px-8 py-4 h-auto"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;