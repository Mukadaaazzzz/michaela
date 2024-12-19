/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { QuoteIcon, Award } from "lucide-react";

const AboutMe = () => {
  return (
    <div id="aboutme-section" className="bg-gradient-to-b from-gray-50 to-white py-24 mb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Container */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden">
              <Image 
                src="/images/michaela.jpeg"
                alt="Michaela Prundu - Relationship Coach"
                width={600}
                height={800}
                className="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                priority
                quality={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue/40 to-transparent mix-blend-multiply rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue/10 rounded-full blur-3xl" />
          </div>

          {/* Introduction */}
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-blue/10">
              <QuoteIcon size={80} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
             I'm{" "}
              <span className="text-blue">
                Mihaela Prundu
              </span>
            </h1>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <div className="flex items-center gap-3 mb-6 bg-blue/5 p-4 rounded-lg">
                <Award className="text-blue w-6 h-6 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Certified Relationship Coach | Evercoach by Mindvalley (2022)
                </p>
              </div>
              <p>
                I've always been fascinated by the intricacies of love, relationships, and human connection. 
                Growing up, my parents' divorce when I was just 4 left a lasting imprint on me. It showed me 
                how relationships—when they falter—can shape lives, often in painful ways.
              </p>
              <p>
                Those experiences didn't just shape my perspective—they ignited a fire in me to help others. 
                This passion led me to pursue professional certification, 
                where I honed my skills in relationship coaching and personal development.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed">
            <p>
              My approach combines professional expertise with deep personal understanding. Through my 
              years of experience, I've developed a 
              methodology that's both empathetic and effective. I don't believe in cookie-cutter solutions. 
              Instead, I help you uncover what's been holding you back—whether it's past pain, self-doubt, 
              or fear—and guide you toward the confidence and clarity you need.
            </p>
            <p>
              Coaching isn't just my career—it's my purpose. I blend proven coaching techniques with 
              genuine empathy to create transformative experiences. Watching someone rebuild their confidence 
              and discover authentic connections fills me with joy. I'd love to help you navigate your 
              challenges and find the love and connection you deserve.
            </p>
          </div>
        </div>

        {/* Core Beliefs */}
        <div className="mb-24">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">My Core Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Love Starts With You",
                description: "Before you can connect meaningfully with someone else, you need to understand and nurture your own worth, confidence, and emotional health."
              },
              {
                title: "Healing is Powerful",
                description: "Every experience—good or bad—offers an opportunity for growth. Together, we'll turn your challenges into stepping stones toward a brighter future."
              },
              {
                title: "Connections Matter",
                description: "Meaningful relationships are the foundation of a fulfilling life. Helping you strengthen those bonds is at the heart of my coaching methodology."
              }
            ].map((belief, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-blue text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{belief.title}</h3>
                <p className="text-gray-600">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue to-blue/80 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Having gained a deep understanding of 
            relationship dynamics, I'm here to help you create lasting positive change. Let's begin 
            your journey together.
          </p>
          <a 
            href="/services" 
            className="inline-block bg-white text-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
          >
            Explore my services
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;