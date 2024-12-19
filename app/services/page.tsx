/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Check, Heart, Clock, Star, Phone, Mail, MessageCircle } from "lucide-react";


const RelationshipServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Gain deeper understanding of relationship patterns",
    "Develop effective communication tools",
    "Align relationships with your authentic self",
    "Overcome emotional barriers",
    "Build lasting trust and connection",
    "Create sustainable relationship habits"
  ];

  const services = [
    {
      title: "Quick Clarity Coaching",
      subtitle: "Single Session",
      price: "$99.99",
      duration: "60 minutes",
      description: "Perfect for tackling a specific challenge with immediate, actionable insights.",
      features: [
        "One-on-one focused coaching",
        "Concrete action steps",
        "Follow-up resources",
        "Email support"
      ],
      accent: "from-pink-600 to-rose-600"
    },
    {
      title: "Connection Reset",
      subtitle: "3-Session Package",
      price: "$249.99",
      duration: "3 × 60 minutes",
      description: "A structured program to establish healthier relationship patterns and habits.",
      features: [
        "Three personalized sessions",
        "Progress tracking",
        "Custom action plans",
        "Priority email support",
        "Relationship toolkit access"
      ],
      accent: "from-blue-600 to-indigo-600",
      featured: true
    },
    {
      title: "Personalized Transformation",
      subtitle: "Complete Coaching Experience",
      price: "Starting at $399.99",
      duration: "Custom timeline",
      description: "A comprehensive coaching journey for profound personal transformation.",
      features: [
        "Fully customized program",
        "Regular check-ins",
        "24/7 messaging support",
        "Exclusive resources",
        "Lifetime access to materials"
      ],
      accent: "from-purple-600 to-indigo-600"
    }
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-10 mb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="text-rose-500" size={24} />
            <span className="text-rose-500 font-semibold">Transform Your Love Life</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Expert Guidance for Deeper Connections
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're facing challenges or seeking deeper connections, our coaching 
            services provide the guidance you need for meaningful, lasting transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-gray-600">{feature}</p>
            </div>
          ))}
        </div>

        {/* Services Cards */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                service.featured ? 'ring-2 ring-blue-600 transform lg:-translate-y-4' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${service.accent}`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-500">{service.subtitle}</p>
                  </div>
                  <Clock className="text-gray-400" size={20} />
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-500 ml-2">{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className={`inline-block w-full text-center py-3 px-6 rounded-xl font-semibold text-black bg-gradient-to-r ${service.accent} hover:opacity-90 transition duration-300`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Session Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-8">
            Schedule a free 15-minute consultation to discuss your needs and find the perfect path forward.
          </p>
          <Link href="/booksession" passHref>
  <button
    className="inline-block bg-blue-600 text-black font-semibold py-3 px-8 rounded-xl hover:bg-blue-500 transition duration-300"
  >
    Schedule Free Discovery Session
  </button>
</Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">Choose your preferred way to connect and schedule a session:</p>
            <div className="space-y-4">
              <a
                href="https://wa.me/+14169536994"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-green-600 hover:text-green-500"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:nely_prundu@yahoo.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-500"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="tel:+14169536994"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-500"
              >
                <Phone size={20} />
                <span>Direct Call</span>
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-gray-800 text-black py-2 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelationshipServices;
