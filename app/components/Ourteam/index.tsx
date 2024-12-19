/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"; 

const Index = () => {
    return (
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 my-32 shadow-lg">
            <h2 className="text-4xl sm:text-5xl font-bold text-center">
                Rebuilding Relationships, <br /> One Step at a Time.
            </h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-75">
                I believe you deserve fulfilling connections. Whether you're starting fresh or navigating challenges, I am here to guide you.
            </h3>
            <div className="grid grid-cols-1 my-16">
                <Image
                    src="/images/team/coaching.jpg"
                    alt="coaching-session"
                    height={684}
                    width={1296}
                    className="rounded-xl" // Adds rounded corners
                />
            </div>
        </div>
    );
};

export default Index;
