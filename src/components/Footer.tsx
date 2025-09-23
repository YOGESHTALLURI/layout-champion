import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg">
                ARKIN SOFTWARE TECHNOLOGIES
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transform your business with cutting-edge AI and data solutions. 
              We build fast, cost-effective software applications using in-house frameworks.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Application Migration</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Database Migration</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Test Automation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Arkin Software Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;