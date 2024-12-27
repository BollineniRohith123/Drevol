import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Pioneering the Future of Enterprise AI
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Drevol.ai, we're not just implementing AI – we're revolutionizing how businesses operate. Our advanced AI solutions 
              combine cutting-edge technology with deep industry expertise to deliver unprecedented results.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-semibold mb-1">Strategic AI Implementation</h3>
                  <p className="text-muted-foreground">Customized solutions aligned with your business objectives</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <h3 className="font-semibold mb-1">Rapid Deployment</h3>
                  <p className="text-muted-foreground">Quick integration with existing systems for immediate impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📈</div>
                <div>
                  <h3 className="font-semibold mb-1">Measurable Results</h3>
                  <p className="text-muted-foreground">Data-driven insights and quantifiable business outcomes</p>
                </div>
              </div>
            </div>
            <Link href="/about">
              <Button className="text-lg px-8 py-6">
                Learn Our Story
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-400/20 backdrop-blur-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      92%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Industries Served
                    </div>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      8hr
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Response Time
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

export default AboutSection;