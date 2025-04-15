
import React from 'react';
import { Calendar, Ticket } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EventService = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <Calendar className="h-8 w-8 text-primary" />
          <h1>Event Planning</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Special Events & Occasions</h2>
            <p className="text-muted-foreground mb-6">
              Create unforgettable moments with our expert event planning services. From corporate retreats to 
              destination weddings, we handle every detail.
            </p>
            <Button className="gap-2">
              <Ticket className="h-4 w-4" />
              Explore Events
            </Button>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Event Services Include:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                ✓ Corporate Events Planning
              </li>
              <li className="flex items-center gap-2">
                ✓ Wedding Destinations
              </li>
              <li className="flex items-center gap-2">
                ✓ Special Celebrations
              </li>
              <li className="flex items-center gap-2">
                ✓ Group Activities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventService;
