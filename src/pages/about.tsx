import React from 'react';
import Head from 'next/head';
import { Card } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      description: 'Ph.D. in Machine Learning with 15+ years of experience in developing AI solutions for enterprise clients.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Solutions',
      description: 'Former Tech Lead at major AI research labs, specializing in natural language processing and computer vision.',
    },
    {
      name: 'Emma Thompson',
      role: 'AI Ethics Director',
      description: 'Expert in responsible AI development and implementation, ensuring ethical considerations in all our solutions.',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - Drevol.ai</title>
        <meta name="description" content="Learn about Drevol.ai's mission, vision, and our team of AI experts dedicated to transforming businesses through innovative AI solutions." />
      </Head>

      <div className="relative min-h-screen bg-background">
        <AnimatedBackground />
        <Header />

        <main className="relative pt-20 pb-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-12">
              <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  About Drevol.ai
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Pioneering the future of AI solutions with innovation and expertise
                </p>
              </section>

              <section className="space-y-8">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    At Drevol.ai, we're committed to democratizing artificial intelligence and making it accessible to businesses of all sizes. Our mission is to transform complex AI technologies into practical, efficient solutions that drive real business value and innovation.
                  </p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    We envision a future where AI enhances human capabilities rather than replacing them. Our goal is to create a world where businesses can harness the power of AI to solve complex problems, improve efficiency, and create better experiences for their customers.
                  </p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <li className="list-none">
                      <Card className="p-6 h-full">
                        <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">
                          Constantly pushing boundaries and exploring new possibilities in AI technology
                        </p>
                      </Card>
                    </li>
                    <li className="list-none">
                      <Card className="p-6 h-full">
                        <h3 className="text-lg font-semibold mb-2">Integrity</h3>
                        <p className="text-muted-foreground">
                          Maintaining the highest standards of ethical AI development and implementation
                        </p>
                      </Card>
                    </li>
                    <li className="list-none">
                      <Card className="p-6 h-full">
                        <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                        <p className="text-muted-foreground">
                          Delivering exceptional results through rigorous methodology and expertise
                        </p>
                      </Card>
                    </li>
                    <li className="list-none">
                      <Card className="p-6 h-full">
                        <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                        <p className="text-muted-foreground">
                          Working closely with clients to ensure solutions align with their goals
                        </p>
                      </Card>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mt-16">
                <h2 className="text-2xl font-semibold mb-8 text-center">Our Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <Card key={member.name} className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                      <p className="text-sm text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;