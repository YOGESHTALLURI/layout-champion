import { Shield, Smartphone, Database, TestTube, Code } from "lucide-react";

const ITServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Central Security Depository"
    },
    {
      icon: Smartphone,
      title: "Mobility"
    },
    {
      icon: Database,
      title: "Migration Tools & Services"
    },
    {
      icon: TestTube,
      title: "Test Automation Services"
    },
    {
      icon: Code,
      title: "Development Services"
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-2">
            We Offer a Wide Variety of <span className="text-brand-primary font-bold">IT Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl p-6 text-center shadow-sm">
              {/* Icon */}
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-brand-primary" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-foreground leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITServices;