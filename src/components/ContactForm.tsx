import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    ARKIN Software Tech. Inc.<br />
                    Ontario, Toronto, NY14
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">
                    +1 (705) 555-0199
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">
                    info@arkinsoftware.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={6}
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="btn-primary bg-brand-primary hover:bg-brand-secondary w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;