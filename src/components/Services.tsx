
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: 'Web Development',
    price: '$999',
    description: 'Professional websites built with the latest technologies',
    features: [
      'Responsive design',
      'SEO optimization',
      'Content management',
      'Performance optimization',
      'Analytics integration'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    title: 'App Development',
    price: '$1,999',
    description: 'Cross-platform mobile applications for iOS and Android',
    features: [
      'Native-like experience',
      'Offline capabilities',
      'Push notifications',
      'User authentication',
      'API integration',
      'App store submission'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    title: 'UI/UX Design',
    price: '$799',
    description: 'Beautiful and intuitive user interfaces for digital products',
    features: [
      'User research',
      'Wireframing',
      'Prototyping',
      'Visual design',
      'Usability testing'
    ],
    cta: 'Get Started',
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tailored solutions to help your business grow in the digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-card overflow-hidden ${service.popular ? 'border-primary ring-2 ring-primary/20' : 'border'}`}
            >
              {service.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider py-1 text-center">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-3xl font-bold">{service.price}</div>
                </div>
                <p className="text-foreground/70 mt-2">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={service.popular ? "default" : "outline"}
                >
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
