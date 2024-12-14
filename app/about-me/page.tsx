import Image from "next/image";

const AboutMe = () => {
    return (
        <div id="aboutme-section" className="bg-lightgrey py-20 px-6 sm:px-16 lg:px-32 mb-40">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <Image 
                            src="/images/michaela.jpeg" 
                            alt="Michaela Prundu" 
                            width={500} 
                            height={500} 
                            className="rounded-3xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navyblue to-transparent rounded-3xl opacity-60"></div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <h1 className="text-5xl font-bold text-navyblue mb-4">Hi, I’m Michaela Prundu</h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            I’ve always been fascinated by the intricacies of love, relationships, and human connection. 
                            Growing up, my parents’ divorce when I was just 4 left a lasting imprint on me. It showed me 
                            how relationships—when they falter—can shape lives, often in painful ways. My father’s second 
                            marriage brought its own lessons, teaching me that happiness in love doesn’t come by chance; 
                            it’s something you work on and nurture.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Those experiences didn’t just shape my perspective—they ignited a fire in me to help others. 
                            I became the person my friends and family turned to for advice, and over time, I realized this 
                            was my calling. Coaching men specifically felt natural because I’ve seen how, when a man grows 
                            and heals, the ripple effects touch everyone connected to him—partners, children, friends, 
                            even communities.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            My approach is deeply personal, grounded in empathy, and tailored to every individual I work with. 
                            I don’t believe in cookie-cutter solutions. Instead, I help you uncover what’s been holding you 
                            back—whether it’s past pain, self-doubt, or fear—and guide you toward the confidence and clarity 
                            you need to thrive in your relationships and beyond.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Coaching isn’t just my career—it’s my purpose. Watching someone transform, rebuild their confidence, 
                            and discover genuine connection fills me with an indescribable sense of fulfillment. 
                            I’d love to help you navigate your challenges and find the love and connection you deserve.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-navyblue text-center mb-6">My Core Beliefs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 shadow-lg rounded-xl">
                            <h3 className="text-xl font-semibold text-blue mb-4">Love Starts With You</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Before you can connect meaningfully with someone else, you need to understand and nurture your own 
                                worth, confidence, and emotional health.
                            </p>
                        </div>
                        <div className="bg-white p-8 shadow-lg rounded-xl">
                            <h3 className="text-xl font-semibold text-blue mb-4">Healing is Powerful</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Every experience—good or bad—offers an opportunity for growth. Together, we’ll turn your challenges 
                                into stepping stones toward a brighter future.
                            </p>
                        </div>
                        <div className="bg-white p-8 shadow-lg rounded-xl">
                            <h3 className="text-xl font-semibold text-blue mb-4">Connections Matter</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Meaningful relationships are the foundation of a fulfilling life. Helping you strengthen those 
                                bonds is at the heart of my coaching.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-700 mb-6">
                        If you’re ready to take the first step toward transforming your relationships and confidence, 
                        I’d love to work with you. Let’s make it happen together.
                    </p>
                    <a 
                        href="/services" 
                        className="bg-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-navyblue transition">
                        Work with Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
