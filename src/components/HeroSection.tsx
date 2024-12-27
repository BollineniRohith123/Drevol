import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Enterprise AI Evolution
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Elevate your business with cutting-edge AI solutions that transform data into strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                Transform Your Business
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-300">
                View Solutions
              </Button>
            </Link>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">95%</span>
              <span className="text-sm text-muted-foreground mt-2">Accuracy Rate</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">60%</span>
              <span className="text-sm text-muted-foreground mt-2">Cost Savings</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">10x</span>
              <span className="text-sm text-muted-foreground mt-2">Faster Insights</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">500+</span>
              <span className="text-sm text-muted-foreground mt-2">AI Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;