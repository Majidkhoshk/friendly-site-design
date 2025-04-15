
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    quote: "Working with this team transformed our online presence. The website they built exceeded our expectations and truly represents our brand.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "SJ"
  },
  {
    quote: "The app development process was smooth and efficient. They delivered on time and the final product is exactly what we needed.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    avatar: "MC"
  },
  {
    quote: "Their UI/UX design expertise helped us create an intuitive interface that our users love. Our conversion rates have increased by 40%.",
    author: "Alex Rodriguez",
    role: "Marketing Director, GrowthBrand",
    avatar: "AR"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="hover-card border bg-card">
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 text-6xl text-primary opacity-20">"</div>
                  <p className="relative z-10 text-lg italic text-foreground/80">{testimonial.quote}</p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t pt-6">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
