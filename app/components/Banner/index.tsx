"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Handle mouse move for parallax effect
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
        if (!isMobile) {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) * 0.02;
            const moveY = (clientY - window.innerHeight / 2) * 0.02;
            setMousePosition({ x: moveX, y: moveY });
        }
    };

    useEffect(() => {
        setIsVisible(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div 
            className="relative w-full overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic background with parallax effect */}
            <div className="absolute inset-0 w-full h-full">
                <div 
                    className="relative w-full h-full transform transition-transform duration-200"
                    style={{ 
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
                    }}
                >
                    <Image
                        src="/images/couple.jpg"
                        alt="Happy Couple"
                        fill
                        className="object-cover object-center transform scale-110"
                        priority
                        sizes="100vw"
                        quality={100}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                opacity: 0.3
                            }}
                        >
                            <Sparkles 
                                className="text-pink-300" 
                                size={Math.random() * 10 + 5} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content container */}
            <div className="relative min-h-screen flex items-center ">
                <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="max-w-3xl">
                        {/* Animated badge */}
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-pulse">
                            <Heart className="text-pink-400 w-4 h-4" />
                            <span className="text-white text-sm font-medium">
                                Transform Your Relationship Journey
                            </span>
                        </div>

                        {/* Enhanced heading with more visible Love Story text */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                            Create The
                            <br/>
                            Relationship
                            <div className="relative mt-2 inline-block">
                                {/* Added background glow for better visibility */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-30 blur-xl animate-pulse" />
                                {/* Additional glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-lg" />
                            </div>
                            <span className="block mt-2">You Deserve.</span>
                        </h1>

                        {/* Glassmorphism description box */}
                        <div className="mb-12 transform hover:scale-105 transition-all duration-300">
                            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
                                <p className="text-lg md:text-x1 text-white ">
                                    Expert guidance to help men improve confidence, deepen connections, 
                                    and build meaningful relationships.
                                </p>
                            </div>
                        </div>

                        {/* Interactive CTA section */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Link
                                    href="/booksession"
                                    className="group inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 border border-white/20"
                                >
                                    Begin Your Journey Today
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                
                                <div className="flex items-center space-x-4 pl-2">
                                    <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" />
                                    <p className="text-white font-medium">
                                     Book Free Discovery Session
                                    </p>
                                </div>
                            </div>

                            {/* Enhanced social proof */}
                            <div className="pt-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white shadow-lg transform hover:scale-110 transition-transform duration-200"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-white font-medium animate-pulse">
                                            100+
                                        </span>
                                        <p className="text-white text-sm font-medium">
                                            happy couples this month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="h-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
            </div>
        </div>
    );
};

export default Banner;