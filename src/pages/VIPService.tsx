
import React from 'react';
import { Globe, Plane } from 'lucide-react';
import { Button } from "@/components/ui/button";

const VIPService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Globe className="h-8 w-8 text-primary" />
          <h1>VIP International</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Premium Travel Experience</h2>
            <p className="text-muted-foreground mb-6">
              Experience luxury travel at its finest with our VIP international services. Enjoy personalized 
              attention, exclusive access, and premium arrangements worldwide.
            </p>
            <Button className="gap-2">
              <Plane className="h-4 w-4" />
              Discover VIP Services
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">VIP Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Private Jet Arrangements
              </li>
              <li className="flex items-center gap-2">
                ✓ Luxury Transportation
              </li>
              <li className="flex items-center gap-2">
                ✓ Personal Concierge
              </li>
              <li className="flex items-center gap-2">
                ✓ Executive Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPService;
