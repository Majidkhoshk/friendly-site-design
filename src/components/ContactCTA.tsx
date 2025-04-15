
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of satisfied customers who have transformed their digital presence with our solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
              />
              <Button variant="secondary" className="shrink-0 gap-2">
                Get Started <ArrowRight size={16} />
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-white/60">
              No credit card required. Start your free 14-day trial today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
