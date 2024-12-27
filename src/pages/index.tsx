import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drevol.ai - Revolutionizing Business with AI</title>
        <meta name="description" content="Discover the transformative potential of AI with our comprehensive consulting, AI-powered product development, and advanced supply chain management services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <Header />
        
        <main className="relative">
          <HeroSection />
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="services">
            <FeaturesSection />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}