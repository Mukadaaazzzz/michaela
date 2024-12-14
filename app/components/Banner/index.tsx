"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background image with overlays */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/couple.jpg" 
                    alt="Happy Couple"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Multiple overlay layers for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/80 to-purple-900/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
            </div>

            {/* Content container */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="min-h-screen flex items-center">
                    <motion.div 
                        className="max-w-3xl py-20"
                        initial={fadeIn.initial}
                        animate={fadeIn.animate}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Top badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
                        >
                            <span className="text-white/90 text-sm font-medium">
                                Transforming Relationships • Building Lasting Connections
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1 
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Create the 
                            <span className="block mt-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Love Story
                            </span>
                            You Deserve
                        </motion.h1>

                        {/* Description */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                                Expert guidance to help you navigate relationships, deepen connections, 
                                and build the meaningful partnership you've always dreamed of.
                            </p>
                        </motion.div>

                        {/* CTA section */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <div className="space-y-4">
                                <Link
                                    href="/booksession"
                                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300"
                                >
                                    Begin Your Journey Today
                                </Link>
                                <div className="flex items-center space-x-4 pl-2">
                                    <div className="h-px w-12 bg-white/20" />
                                    <p className="text-white/80 font-medium">
                                        Complimentary Discovery Session
                                    </p>
                                </div>
                            </div>
                            
                            {/* Social proof */}
                            <div className="pt-8 flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 border-2 border-white"
                                        />
                                    ))}
                                </div>
                                <p className="text-white/80 text-sm">
                                    Joined by 100+ happy couples this month
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
};

export default Banner;