
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              CompanyName
            </div>
            <p className="text-foreground/70 mb-4">
              Creating beautiful digital experiences that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} CompanyName. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-4 md:mt-0">
            Designed with ❤️ for exceptional experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
