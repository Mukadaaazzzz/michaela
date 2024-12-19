const Beliefs = () => {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5">

                {/* COLUMN-1 */}
                <div className="bg-darkblue pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">MY BELIEFS</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
                        Honesty, Empathy, <span className="text-grey">and Transformation.</span>
                    </h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
                        I believe that everyone has the potential to build meaningful and fulfilling relationships 
                        when guided with honesty and supported through empathy. Transformation starts with 
                        understanding yourself and your goals.
                    </h5>
                    <div className="text-center sm:text-start">
                        <a href="/about-me">
                            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                                About Me
                            </button>
                        </a>
                    </div>
                </div>

                {/* COLUMN-2 */}
                <div className="bg-lightblue pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">BUILD CONNECTION</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
                        Reconnect, <span className="text-blue">Rebuild,</span> and Thrive.
                    </h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">
                        Building healthy relationships starts with understanding your needs, your partner’s perspective, 
                        and the dynamics at play. Let’s rebuild connection and create strategies for lasting growth together.
                    </h5>
                    <div className="text-center sm:text-start">
                        <a href="/booksession">
                            <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                                Free Session
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Beliefs;
