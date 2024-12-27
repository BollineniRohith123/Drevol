import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'AI Strategy Development',
    description: 'We craft an AI strategy that aligns with your business vision, ensuring that the AI initiatives are in line with your overall business goals.',
    icon: '🎯',
  },
  {
    title: 'AI Implementation',
    description: 'We ensure successful AI implementation by providing solutions tailored to your specific business needs, maximizing the return on your AI investments.',
    icon: '⚙️',
  },
  {
    title: 'Supply Chain Management',
    description: 'Leverage the power of AI to optimize your supply chain processes. We provide comprehensive solutions for maximum efficiency and productivity.',
    icon: '🔄',
  },
  {
    title: 'AI Agents',
    description: 'We build intelligent AI agents that automate processes and enhance customer interaction, contributing to business efficiency and growth.',
    icon: '🤖',
  },
  {
    title: 'AI Training and Support',
    description: 'We offer continuous training and support to ensure smooth AI adoption across your organization. Our team is always on standby to assist you every step of the way.',
    icon: '📚',
  },
];

const benefits = [
  {
    title: 'Experienced Team',
    description: 'Benefit from our team\'s extensive experience in AI consulting and development. Our experts have a deep understanding of AI technologies and their potential implications for businesses.',
    icon: '👥',
  },
  {
    title: 'Customized Solutions',
    description: 'We provide AI solutions tailored to fit your unique business needs. We understand that every business is different, and we design our AI solutions accordingly.',
    icon: '🎨',
  },
  {
    title: 'Cost-Efficiencies',
    description: 'Achieve cost savings with our strategic AI solutions. By automating routine tasks and optimizing processes, we help you reduce operational costs.',
    icon: '💰',
  },
  {
    title: 'Enhanced Customer Experience',
    description: 'Improve customer engagement and satisfaction with our advanced AI solutions. We help you deliver personalized customer experiences that foster loyalty and drive growth.',
    icon: '🌟',
  },
];

const ConsultingPage = () => {
  return (
    <>
      <Head>
        <title>AI Consulting Services - Drevol.ai</title>
        <meta name="description" content="Transform your business with our expert AI consulting services. We help organizations leverage artificial intelligence for growth and innovation." />
      </Head>
      
      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Fueling Business Growth with Expert AI Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Experience custom AI solutions designed to enhance business value and drive operational efficiency.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 mt-8"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Comprehensive AI Consulting Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Why Choose Drevol.ai for AI Consulting
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Are You Ready to Accelerate Your Business with AI Consulting?
            </h2>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Reach Out To Us
            </Button>
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </>
  );
};

export default ConsultingPage;