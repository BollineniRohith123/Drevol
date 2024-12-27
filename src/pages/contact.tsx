import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card } from '@/components/ui/card';

const ContactPage = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'contact@drevol.ai',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: 'Drevol LLC\n5540 Centerview Dr Ste 204 900068\nRaleigh, NC 27606',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Drevol.ai</title>
        <meta name="description" content="Get in touch with Drevol.ai for AI consulting, machine learning solutions, and digital transformation services." />
      </Head>

      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <Header />

        <main className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your business with AI? Get in touch with our team of experts and start your journey towards innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;