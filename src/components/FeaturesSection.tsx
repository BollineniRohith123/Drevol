import React from 'react';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: "Custom AI Models",
    description: "Tailored AI solutions designed specifically for your business challenges, delivering precision and performance.",
    icon: "🧠"
  },
  {
    title: "Intelligent Automation",
    description: "Advanced automation systems that learn and adapt, streamlining operations and reducing manual intervention.",
    icon: "⚡"
  },
  {
    title: "Predictive Analytics",
    description: "Transform data into foresight with our advanced predictive modeling and business intelligence solutions.",
    icon: "📊"
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows for maximum efficiency.",
    icon: "🔄"
  },
  {
    title: "AI Security",
    description: "Enterprise-grade security protocols ensuring your AI implementations are safe and compliant.",
    icon: "🛡️"
  },
  {
    title: "24/7 AI Operations",
    description: "Round-the-clock AI systems monitoring and optimization for consistent performance.",
    icon: "⏰"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Advanced AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge artificial intelligence to transform your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;