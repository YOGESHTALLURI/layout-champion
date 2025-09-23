import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-2">
            What Our <span className="text-brand-primary font-bold">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-brand-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <blockquote className="text-body-lg text-muted-foreground italic leading-relaxed mb-8">
                "Very well thought out & articulate communication. Clear milestones, deadlines and fast 
                work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. 
                The best part... always solving problems with great original ideas!"
              </blockquote>

              {/* Attribution */}
              <div className="text-right">
                <p className="font-semibold text-foreground mb-1">
                  Senior Technology Director
                </p>
                <p className="text-brand-primary font-medium">
                  Fortune 500 Financial Services
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;