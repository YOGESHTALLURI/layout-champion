import { Users, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our great team of more than 1,000 software experts."
    },
    {
      icon: Zap,
      title: "Quick Support", 
      description: "We'll help you test bold new ideas while sharing ours."
    }
  ];

  return (
    <section className="py-16 bg-brand-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-brand-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-display-sm text-foreground mb-3 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;