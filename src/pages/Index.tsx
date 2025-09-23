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
import SlideNavigation from "@/components/SlideNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="clients">
          <ClientLogos />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="it-services">
          <ITServices />
        </section>
        <section id="cta">
          <CallToAction />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <SlideNavigation />
    </div>
  );
};

export default Index;
