
import React from 'react';
import { Zap, Shield, LineChart, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuresData = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for speedy load times and smooth user experience.'
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Secure by Design',
    description: 'Built with security best practices to protect your data and users.'
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'Analytics Driven',
    description: 'Make data-informed decisions with integrated analytics and insights.'
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: 'Always Evolving',
    description: 'Continuous updates and improvements to stay ahead of the curve.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Powerful Features</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to create exceptional digital experiences for your customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="hover-card border bg-card">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
