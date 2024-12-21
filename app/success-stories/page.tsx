/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Star, Heart, Quote, Sparkles } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Vezeteu Daniel",
      title: "Rebuilding Confidence After Heartbreak",
      story: `I came to Mihaela after a painful breakup that left me doubting my self-worth. Through consistent coaching, I learned to heal emotionally, regain my confidence, and approach relationships with a new sense of purpose. Today, I describe myself as more open, resilient, and emotionally aware than ever before. I'm now in a happy, thriving relationship built on trust and understanding.`,
      highlights: [
        "Rediscovered self-confidence",
        "Overcame emotional barriers",
        "Found a meaningful relationship",
      ],
    },
    {
      name: "Bogdan Mihaila",
      title: "Finding Direction and Emotional Balance",
      story: `Before working with Mihaela, I was struggling to balance my career and personal life. I felt disconnected and unsure of how to express myself in relationships. Michaela's coaching helped me create clarity and actionable steps to prioritize what truly matters. Now, I'm thriving in my career and have built deeper connections with my loved ones.`,
      highlights: [
        "Achieved work-life balance",
        "Improved communication skills",
        "Strengthened family relationships",
      ],
    },
    {
      name: "David Christopher",
      title: "Rediscovering Self-Worth After Divorce",
      story: `After a difficult divorce, I felt like I had lost my sense of identity. Mihaela helped me navigate my emotions, rebuild my self-esteem, and rediscover my passions. Today, I'm focused on self-growth and have cultivated a life that reflects my true values.`,
      highlights: [
        "Recovered from divorce",
        "Found new passions",
        "Built a fulfilling life of self-growth",
      ],
    },
    {
      name: "Mihai Rosu",
      title: "Transforming Communication in Marriage",
      story: `I was facing communication challenges in my marriage that were creating a distance between me and my partner. With Mihaela's guidance, I learned effective communication techniques and emotional awareness. Today, my wife and I describe our marriage as stronger and more connected than ever.`,
      highlights: [
        "Enhanced communication",
        "Rebuilt trust",
        "Strengthened marital bond",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-purple-50 py-10 px-6 lg:px-8 mb-60">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <Heart className="text-rose-500 animate-pulse" size={40} />
            <Sparkles className="absolute -top-4 -right-4 text-yellow-400 animate-bounce" size={20} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text">
            Success Stories
          </h1>
          <div className="relative">
            <Heart className="text-rose-500 animate-pulse" size={40} />
            <Sparkles className="absolute -top-4 -left-4 text-yellow-400 animate-bounce" size={20} />
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Hear how Mihaela's coaching has transformed lives. Real people, real
          growth, real impact.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-32">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-16 group`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Quote 
                  className="absolute -top-8 -left-8 text-rose-300 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" 
                  size={56} 
                />
                <div className="bg-gradient-to-br from-rose-100/80 to-purple-100/80 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    {story.story}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text">
                  {story.name}
                </h2>
                <h3 className="text-xl font-medium text-rose-600">
                  {story.title}
                </h3>
              </div>

              <div className="space-y-4">
                {story.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-center space-x-3 text-gray-700 group/highlight hover:-translate-y-1 transition-transform duration-200"
                  >
                    <Star className="h-6 w-6 text-yellow-400 flex-shrink-0 group-hover/highlight:rotate-12 transition-transform duration-200" />
                    <span className="text-lg font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;