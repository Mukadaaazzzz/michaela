/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Mail, Calendar, Users, Podcast, BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";

const WorkWithMe = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-14 mb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something{" "}
            <span className="text-blue">Meaningful</span> Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're seeking personal transformation, looking to collaborate, or interested in bringing relationship expertise to your platform—I'm here to help create lasting positive change.
          </p>
        </div>

        {/* Collaboration Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "1:1 Coaching",
              icon: <Calendar className="w-6 h-6" />,
              description: "Personalized coaching sessions tailored to your unique relationship goals and challenges. Available both virtually and in-person.",
              features: [
                "In-depth personal assessment",
                "Customized action plans",
                "Weekly accountability",
                "Priority support between sessions"
              ]
            },
            {
              title: "Group Programs",
              icon: <Users className="w-6 h-6" />,
              description: "Join a supportive community of individuals on similar journeys. Learn, grow, and transform together in a guided group setting.",
              features: [
                "8-week intensive programs",
                "Weekly group coaching calls",
                "Private community access",
                "Worksheets and resources"
              ]
            },
            {
              title: "Speaking Engagements",
              icon: <Podcast className="w-6 h-6" />,
              description: "Engaging talks and workshops on relationships, self-development, and emotional wellness for your event or organization.",
              features: [
                "Customized presentations",
                "Interactive workshops",
                "Q&A sessions",
                "Both virtual and in-person"
              ]
            },
            {
              title: "Content Creation",
              icon: <BookOpen className="w-6 h-6" />,
              description: "Professional content collaboration for blogs, podcasts, or publications focused on relationships and personal growth.",
              features: [
                "Expert articles",
                "Podcast appearances",
                "Video content",
                "Social media collaborations"
              ]
            },
            {
              title: "Corporate Workshops",
              icon: <Sparkles className="w-6 h-6" />,
              description: "Help your team build better relationships, improve communication, and create a more connected workplace culture.",
              features: [
                "Customized workshop series",
                "Team building exercises",
                "Communication training",
                "Follow-up implementation support"
              ]
            },
            {
              title: "Partnership Opportunities",
              icon: <Users className="w-6 h-6" />,
              description: "Open to creative collaborations with aligned brands, coaches, and wellness professionals.",
              features: [
                "Brand partnerships",
                "Joint programs",
                "Cross-promotional opportunities",
                "Long-term collaborations"
              ]
            }
          ].map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 bg-blue/10 rounded-lg flex items-center justify-center mb-6 text-blue">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <ul className="space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue to-blue/80 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg mb-8">
              I'm excited to explore how we can work together. Whether you have a specific collaboration in mind 
              or want to discuss possibilities, let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:nely_prundu@yahoo.com"
                className="inline-flex items-center gap-2 bg-white text-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
            </div>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default WorkWithMe;