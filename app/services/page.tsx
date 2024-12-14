"use client";
import React from "react";

const RelationshipServices = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Transform Your Relationships with Expert Guidance
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Whether you're facing challenges in your relationship, seeking clarity 
          on how to navigate love, or ready to embark on a transformative journey 
          toward deeper connections, our coaching services are tailored to meet 
          your needs. Explore personalized options to unlock meaningful insights, 
          actionable strategies, and long-lasting change in your love life.
        </p>
      </div>

      {/* Explanation Section */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Why Choose Relationship Coaching?
        </h2>
        <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
          <p>
            Relationships are at the core of human experience, yet they often 
            come with complexities that can feel overwhelming. Coaching provides 
            a structured, supportive space where you can:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Gain a deeper understanding of your patterns and how they influence 
              your relationships.
            </li>
            <li>
              Develop tools to enhance communication, rebuild trust, and foster 
              connection.
            </li>
            <li>
              Clarify your goals and values to ensure your relationships align 
              with your authentic self.
            </li>
            <li>
              Overcome challenges such as unresolved conflict, misaligned 
              expectations, or emotional barriers.
            </li>
          </ul>
          <p>
            Coaching is not just about solving immediate issues; it's about 
            equipping you with skills to navigate relationships confidently, 
            authentically, and joyfully.
          </p>
        </div>
      </div>

      {/* Choosing the Right Service */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Which Service Is Right for You?
        </h2>
        <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
          <p>
            We offer a variety of services designed to meet you where you are 
            in your relationship journey:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              **Quick Clarity Coaching:** Ideal for individuals who need 
              immediate insights and actionable advice on specific challenges.
            </li>
            <li>
              **Connection Reset (Short Coaching Package):** A focused plan 
              for those looking to address recurring issues, build better habits, 
              and create lasting improvements.
            </li>
            <li>
              **Deep Connection Coaching (Personalized Package):** For those 
              ready to invest in profound transformation with fully customized 
              sessions and tailored action plans.
            </li>
          </ul>
          <p>
            Not sure where to start? During your initial conversation, we'll 
            explore your unique situation and guide you toward the best 
            path forward.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            title: "Single Session: Quick Clarity Coaching",
            price: "$100",
            details:
              "A one-time, 60-minute session to address a specific challenge.",
            link: "https://calendly.com", // Replace with actual link
          },
          {
            title: "Short Coaching Package: Connection Reset",
            price: "$270 (3 Sessions)",
            details:
              "Three focused sessions to build healthier relationship habits.",
            link: "https://calendly.com", // Replace with actual link
          },
          {
            title: "Personalized Transformation Coaching",
            price: "Starting at $800",
            details:
              "A fully tailored coaching experience for profound transformation.",
            link: "https://calendly.com", // Replace with actual link
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="mt-4 text-blue-600 text-lg font-semibold">
              {service.price}
            </p>
            <p className="mt-2 text-gray-600">{service.details}</p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Book Session
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelationshipServices;
