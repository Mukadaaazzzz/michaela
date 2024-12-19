/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { Send, Clock, Users, Heart, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import emailjs from '@emailjs/browser';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const MANAGER_EMAIL = process.env.NEXT_PUBLIC_MANAGER_EMAIL!;

const BookSession = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    story: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save data to Supabase
      const { error } = await supabase
        .from('applications')
        .insert([{ 
          full_name: formData.fullName, 
          email: formData.email, 
          story: formData.story 
        }]);

      if (error) {
        console.error('Error saving to Supabase:', error);
        alert('Failed to save data. Please try again.');
        return;
      }

      // Send email using EmailJS
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email: MANAGER_EMAIL,
            from_name: formData.fullName,
            from_email: formData.email,
            story: formData.story,
            subject: 'New Coaching Session Application',
            message: `
New application received:

Name: ${formData.fullName}
Email: ${formData.email}

Their Story:
${formData.story}

This application has been automatically saved to Supabase.
            `.trim(),
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        alert('Application saved, but email notification failed.');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error processing application:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-40">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-darkpurple mb-4">
          Your Journey to an Extraordinary Relationship
          <br />
          <span className="text-blue">Begins Here</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take the first step towards transforming your relationship with our exclusive 15-minute discovery session.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Benefits */}
      </div>

      {/* Application Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Apply for Your Discovery Session</h2>

          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
              Your Story
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Share your relationship journey and what you hope to achieve through coaching.
            </p>
            <textarea
              id="story"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent"
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-hoblue transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Application</span>
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="max-w-2xl mx-auto text-center bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for sharing your story. We'll review your application and get back to you within 24-48 hours.
          </p>
          <p className="text-sm text-gray-500">
            Please check your email for confirmation and next steps.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookSession;
