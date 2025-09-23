import { Database, Code, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Application Migration",
      description: "Automate core legacy systems for multibank establishments."
    },
    {
      icon: Code,
      title: "Database Migration", 
      description: "Automated migration toolkit, robust restructuring, enhanced validations & validation processes."
    },
    {
      icon: Wrench,
      title: "Dev and Deployment",
      description: "With a vast set of client service tools, a history of proof of excellence across multiple products."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-2">
            Delivering <span className="text-brand-primary font-bold">Innovative Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-brand-light/50 rounded-2xl p-8 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;