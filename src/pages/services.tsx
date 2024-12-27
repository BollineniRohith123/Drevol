import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';
import {
  Brain,
  Network,
  BarChart3,
  Cog,
  Truck,
  Lightbulb,
  Bot,
  Shield
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Strategic guidance to transform your business with AI. We help identify opportunities, assess feasibility, and create implementation roadmaps.',
      features: [
        'Digital Transformation Strategy',
        'AI Readiness Assessment',
        'Technology Stack Planning',
        'ROI Analysis & Metrics'
      ],
      icon: <Lightbulb className="w-12 h-12" />
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'Optimize your supply chain with AI-powered forecasting, inventory management, and logistics optimization.',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Real-time Analytics'
      ],
      icon: <Truck className="w-12 h-12" />
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI models and algorithms designed to address your specific business challenges and opportunities.',
      features: [
        'Small Language Models',
        'Computer Vision Systems',
        'Predictive Analytics',
        'Natural Language Processing'
      ],
      icon: <Brain className="w-12 h-12" />
    },
    {
      title: 'Intelligent Automation',
      description: 'End-to-end process automation combining AI, machine learning, and robotic process automation.',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Quality Control',
        'Decision Support Systems'
      ],
      icon: <Cog className="w-12 h-12" />
    },
    {
      title: 'AI Agents & Assistants',
      description: 'Deploy intelligent AI agents that work alongside your team to enhance productivity and decision-making.',
      features: [
        'Custom AI Assistants',
        'Task Automation',
        'Knowledge Management',
        'Workflow Integration'
      ],
      icon: <Bot className="w-12 h-12" />
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      features: [
        'Business Intelligence',
        'Performance Analytics',
        'Custom Dashboards',
        'Trend Analysis'
      ],
      icon: <BarChart3 className="w-12 h-12" />
    },
    {
      title: 'Enterprise AI Integration',
      description: 'Seamlessly integrate AI solutions with your existing systems and workflows.',
      features: [
        'System Integration',
        'API Development',
        'Legacy System Enhancement',
        'Cloud Migration'
      ],
      icon: <Network className="w-12 h-12" />
    },
    {
      title: 'AI Security & Compliance',
      description: 'Ensure your AI implementations are secure, ethical, and compliant with industry standards.',
      features: [
        'Security Assessment',
        'Compliance Monitoring',
        'Ethics Guidelines',
        'Risk Management'
      ],
      icon: <Shield className="w-12 h-12" />
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services & Solutions - Drevol.ai</title>
        <meta name="description" content="Comprehensive AI services including supply chain optimization, consulting, custom AI solutions, and intelligent automation for enterprise excellence." />
      </Head>

      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <Header />

        <main className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Enterprise AI Solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI services tailored to transform your business operations and drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background/60 backdrop-blur-sm border-2">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-primary">{service.icon}</div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    <div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline" 
                        className="w-full bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white transition-all duration-300"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;