/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, ArrowLeft, AlertCircle } from 'lucide-react';

const RedFlagsInRelationships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white mb-60">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/images/blogs/red-flags.jpg"
          alt="Red Flags in Relationships"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Recognizing Red Flags in Relationships
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Learn to Spot the Signs and Protect Your Heart
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className=" max-w-7xl mx-auto px-4 -mt-20 relative ">
        {/* Meta Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 text-gray-600">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="font-medium">April 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Relationships are built on trust, respect, and mutual understanding. However, sometimes subtle—or not so subtle—signs may indicate deeper issues. Here's a guide to recognizing red flags early and taking action to protect your emotional well-being.
          </p>

          {/* Red Flags Sections */}
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                Controlling Behavior
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Does your partner dictate who you can see, what you can wear, or how you spend your time? Controlling behavior is a significant red flag that can escalate over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                Lack of Communication
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Open and honest communication is essential for a healthy relationship. If your partner avoids meaningful conversations or shuts you out, it can lead to long-term issues.
              </p>
            </section>

            <blockquote className="border-l-4 border-red-500 pl-6 py-4 my-8 bg-red-50 rounded-r-lg">
              <p className="text-xl font-medium text-red-800 italic">
                "Red flags are warnings, not invitations to change someone."
              </p>
            </blockquote>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                Disrespect or Criticism
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                A loving partner respects you and values your opinions. Constant criticism, mocking, or dismissiveness can erode your self-esteem and happiness.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
                Emotional Manipulation
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Manipulation can take many forms, such as guilt-tripping, gaslighting, or using your insecurities against you. Pay attention to patterns of behavior that make you doubt your reality or self-worth.
              </p>
            </section>

            {/* Final Thoughts */}
            <section className="bg-gray-50 p-6 rounded-xl mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed">
                Recognizing red flags is the first step to safeguarding your emotional health. Trust your instincts, seek support when needed, and remember that healthy relationships empower you, not drain you.
              </p>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto mt-12 mb-20 text-center">
          <a
            href="/blogpage"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-black px-8 py-4 rounded-xl shadow-lg hover:from-red-700 hover:to-orange-700 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Blog</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default RedFlagsInRelationships;
