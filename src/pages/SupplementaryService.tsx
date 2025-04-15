
import React from 'react';
import { Package, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SupplementaryService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Package className="h-8 w-8 text-primary" />
          <h1>Supplementary Services</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Travel Extras & Add-ons</h2>
            <p className="text-muted-foreground mb-6">
              Enhance your travel experience with our comprehensive supplementary services. From airport 
              transfers to travel insurance, we've got all your additional needs covered.
            </p>
            <Button className="gap-2">
              <ShoppingBag className="h-4 w-4" />
              View Services
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">We Provide:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Airport Transfers
              </li>
              <li className="flex items-center gap-2">
                ✓ Travel Insurance
              </li>
              <li className="flex items-center gap-2">
                ✓ Car Rentals
              </li>
              <li className="flex items-center gap-2">
                ✓ Tour Packages
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplementaryService;
