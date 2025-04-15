
import React from 'react';
import { Hotel, BedDouble } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HotelService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Hotel className="h-8 w-8 text-primary" />
          <h1>Hotel Bookings</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Luxury Accommodations</h2>
            <p className="text-muted-foreground mb-6">
              Experience comfort and luxury in our carefully selected hotels worldwide. From boutique stays to 
              five-star resorts, we ensure your accommodation matches your travel style.
            </p>
            <Button className="gap-2">
              <BedDouble className="h-4 w-4" />
              Browse Hotels
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Hotel Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Worldwide Hotel Reservations
              </li>
              <li className="flex items-center gap-2">
                ✓ Luxury Resort Bookings
              </li>
              <li className="flex items-center gap-2">
                ✓ Boutique Hotel Selection
              </li>
              <li className="flex items-center gap-2">
                ✓ Special Room Arrangements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelService;
