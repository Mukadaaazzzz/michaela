/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, ArrowLeft, Heart } from 'lucide-react';

const RebuildConfidence = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white mb-60">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/images/blogs/confidence.jpg"
          alt="Rebuild Confidence"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Rebuilding Confidence After Setbacks
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Practical Steps to Regain Your Inner Strength
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
                <Calendar className="w-5 h-5 text-purple-500" />
                <span className="font-medium">May 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Life is full of challenges, and setbacks are inevitable. However, your ability to bounce back and rebuild your confidence is what sets you apart. Here's a step-by-step guide to regaining your inner strength and thriving.
          </p>

          {/* Tips Sections */}
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                Acknowledge Your Feelings
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                It's okay to feel upset, disappointed, or even angry after a setback. Embrace your emotions without judgment, as this is the first step toward healing and moving forward.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                Reframe Negative Thoughts
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Challenge self-doubt and negative beliefs. Instead of thinking, "I failed," reframe it as, "I learned something valuable that will help me grow."
              </p>
            </section>

            <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 rounded-r-lg">
              <p className="text-xl font-medium text-purple-800 italic">
                "Confidence isn't about being perfect; it's about embracing your imperfections and trying anyway."
              </p>
            </blockquote>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                Set Small, Achievable Goals
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Rebuilding confidence starts with taking small steps. Focus on manageable tasks that give you a sense of accomplishment and gradually increase in difficulty.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
                Surround Yourself with Support
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Lean on friends, family, or mentors who believe in you and your potential. Positive encouragement and constructive feedback are vital for growth.
              </p>
            </section>

            {/* Final Thoughts */}
            <section className="bg-gray-50 p-6 rounded-xl mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed">
                Rebuilding confidence is a journey, not a destination. Celebrate your progress, no matter how small, and remember that every step forward is a victory. You've got this!
              </p>
            </section>
          </div>
        </article>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto mt-12 mb-20 text-center">
          <a
            href="/blogpage"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-black px-8 py-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Blog</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default RebuildConfidence;
