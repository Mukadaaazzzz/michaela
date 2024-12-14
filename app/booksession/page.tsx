"use client"
import { useState } from 'react';
import { Send, Clock, Users, Heart, ArrowRight } from 'lucide-react';

const BookSession = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        story: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        setIsSubmitting(false);
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
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Clock className="w-12 h-12 text-blue mb-4" />
                    <h3 className="text-xl font-semibold mb-2">15 Minutes That Matter</h3>
                    <p className="text-gray-600">A focused session to understand your unique situation and determine how we can best support your journey.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Users className="w-12 h-12 text-blue mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">Every relationship is unique. We carefully review each application to ensure we can provide meaningful guidance.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Heart className="w-12 h-12 text-blue mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Get insights from an experienced relationship coach who understands the complexities of modern relationships.</p>
                </div>
            </div>

            {/* Selection Criteria */}
            <div className="bg-lightblue/10 p-6 rounded-2xl mb-12">
                <h2 className="text-2xl font-bold mb-4 text-center">Selection Criteria</h2>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    <div className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue mt-1 mr-2 flex-shrink-0" />
                        <p>Uniqueness of your relationship story and challenges</p>
                    </div>
                    <div className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue mt-1 mr-2 flex-shrink-0" />
                        <p>Commitment to growth and transformation</p>
                    </div>
                    <div className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue mt-1 mr-2 flex-shrink-0" />
                        <p>Readiness to engage in meaningful change</p>
                    </div>
                    <div className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue mt-1 mr-2 flex-shrink-0" />
                        <p>Alignment with our coaching approach</p>
                    </div>
                </div>
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
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
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
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                            onChange={(e) => setFormData({...formData, story: e.target.value})}
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