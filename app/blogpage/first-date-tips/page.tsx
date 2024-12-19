/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, ArrowLeft, Heart } from 'lucide-react';

const FirstDateTips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white mb-60">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="/images/blogs/first-date-tips.jpg"
          alt="First Date Tips"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Ultimate Guide to First Dates
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              How to Make a Great Impression
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
                <span className="font-medium">August 7, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            First dates can be exciting yet nerve-wracking. Whether you're meeting someone from an online platform or through a mutual connection, making a great first impression is key to building meaningful connections. Here's your ultimate guide to nailing your first date with confidence!
          </p>

          {/* Tips Sections */}
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                Dress to Impress
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Your attire sets the tone for the date. Choose something that reflects your personality and is appropriate for the venue. Feeling comfortable in what you wear boosts your confidence and helps you relax.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                Be Present and Engage
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Put away your phone and give your date your full attention. Show genuine interest by actively listening and asking thoughtful questions. This demonstrates that you value their time and perspective.
              </p>
            </section>

            <blockquote className="border-l-4 border-purple-500 pl-6 py-4 my-8 bg-purple-50 rounded-r-lg">
              <p className="text-xl font-medium text-purple-800 italic">
                "A great first date isn't about impressing; it's about connecting."
              </p>
            </blockquote>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                Plan a Memorable Experience
              </h2>
              <p className="text-gray-700 leading-relaxed pl-14">
                Instead of the usual dinner date, consider an activity that allows you both to bond naturally. Think of fun, low-pressure settings like a coffee tasting, a visit to an art gallery, or a scenic walk.
              </p>
            </section>

            {/* Final Thoughts */}
            <section className="bg-gray-50 p-6 rounded-xl mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed">
                Remember, the goal of a first date is to explore compatibility and enjoy the moment. By being prepared, relaxed, and authentic, you set the stage for meaningful connections.
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

export default FirstDateTips;