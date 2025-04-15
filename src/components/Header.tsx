
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                CompanyName
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out pt-16",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4 px-4 pt-6 pb-6">
          <a 
            href="#features" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#services" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="py-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="mt-4 w-full" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
