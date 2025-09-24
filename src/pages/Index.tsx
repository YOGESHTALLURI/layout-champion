import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ITServices from "@/components/ITServices";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import DotNavigation from "@/components/DotNavigation";

const Index = () => {
  const sections = [
    { id: "hero", label: "Hero" },
    { id: "clients", label: "Clients" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    { id: "it-services", label: "IT Services" },
    { id: "cta", label: "Call to Action" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
    { id: "footer", label: "Footer" }
  ];

  return (
    <div className="bg-background">
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="hero" className="snap-start h-screen flex items-center">
          <Hero />
        </section>
        <section id="clients" className="snap-start h-screen flex items-center">
          <ClientLogos />
        </section>
        <section id="features" className="snap-start h-screen flex items-center">
          <Features />
        </section>
        <section id="services" className="snap-start h-screen flex items-center">
          <Services />
        </section>
        <section id="it-services" className="snap-start h-screen flex items-center">
          <ITServices />
        </section>
        <section id="cta" className="snap-start h-screen flex items-center">
          <CallToAction />
        </section>
        <section id="testimonials" className="snap-start h-screen flex items-center">
          <Testimonials />
        </section>
        <section id="contact" className="snap-start h-screen flex items-center">
          <ContactForm />
        </section>
        <section id="footer" className="snap-start h-screen flex items-center">
          <Footer />
        </section>
      </main>
      <DotNavigation sections={sections} />
    </div>
  );
};

export default Index;
