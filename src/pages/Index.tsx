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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ClientLogos />
      <Features />
      <Services />
      <ITServices />
      <CallToAction />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;
