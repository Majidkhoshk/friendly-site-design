
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="mb-6">
              Explore <span className="text-gradient">Extraordinary</span> Journeys
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover personalized travel experiences that transform your adventures. Besouye Samyar Safar crafts 
              unforgettable journeys tailored to your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Plan Your Trip <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto lg:ml-auto h-[400px] max-w-md lg:max-w-full animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-card shadow-xl rounded-3xl transform -rotate-3 overflow-hidden border">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-6 w-48 bg-muted rounded"></div>
                  </div>
                  <div className="flex-grow grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-full bg-muted rounded-lg"></div>
                    <div className="col-span-1 flex flex-col gap-4">
                      <div className="h-1/3 bg-muted rounded-lg"></div>
                      <div className="h-1/3 bg-muted rounded-lg"></div>
                      <div className="h-1/3 bg-muted rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

