const ClientLogos = () => {
  const clients = [
    "HSBC",
    "OneBeacon", 
    "Liberty Mutual",
    "CEVALDOM",
    "United Bulgarian",
    "SUNAT"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-display-sm text-foreground mb-4">
            WE BUILD SOFTWARE APPLICATIONS
          </h2>
          <h2 className="text-display-sm text-brand-primary">
            USING <span className="font-bold">IN-HOUSE FRAMEWORKS</span>
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium"
            >
              {client}
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-body-lg text-muted-foreground italic leading-relaxed">
            "At Arkin Software Technologies, we build fast, cost-effective, and domain-based in-house 
            solutions for our clients. Our flagship ARK Depository™ products are Compliant Securities 
            Depository solutions."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;