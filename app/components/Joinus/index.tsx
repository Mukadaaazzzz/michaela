/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Join = () => {
    const whatsappNumber = "+14169536994";
    const whatsappMessage = encodeURIComponent("Hi! I'm interested in relationship coaching.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 py-20 mb-40">
            <div className="mx-auto max-w-lg px-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ready for Change?
                        </h3>
                        <p className="text-lg text-gray-700">
                            Take the first step towards transforming your relationships
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-green-600 hover:bg-green-700 text-black text-xl font-semibold rounded-xl transition-colors duration-200 text-center shadow-lg"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <MessageCircle className="w-6 h-6" />
                                <span>Let's Talk</span>
                            </div>
                        </a>
                        
                        <div className="text-center">
                            <p className="font-medium text-gray-900">
                                Free consultation • 100% confidential
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;