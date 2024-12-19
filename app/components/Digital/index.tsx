import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">YOUR JOURNEY TO LOVE</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Transforming <br /> One Heart, <br /> Two Lives.</h4>
                        <div className="text-center lg:text-start">
                        <div className="text-center lg:text-start">
                            <a 
                                href="/services" 

                                className="text-xl font-semibold text-rose-600 bg-white py-4 px-12 hover:bg-rose-50 transition-colors duration-300 rounded-full inline-block"
                            >
                                Start Your Journey
                            </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle mb-1" >
                            <Image src="/images/digital/y.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
