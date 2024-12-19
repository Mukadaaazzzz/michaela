import Link from "next/link";

const footerSections = [
    {
        id: 1,
        section: "Quick Links",
        links: [
            { name: 'Home', href: '/' },
            { name: 'About Me', href: '/about-me' },
            { name: 'Services', href: '/services' },
            { name: 'Blog', href: '/blogpage' },
        ],
    },
    {
        id: 2,
        section: "Get in Touch",
        links: [
            { name: 'Success Stories', href: '/success-stories' },
            { name: 'Work With Me', href: '/workwithme' },
            { name: 'Contact', href: 'mailto:nely_prundu@yahoo.com' }, // Replace with actual email
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12" id="footer">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
                    {/* Mission Statement */}
                    <div className="col-span-full lg:col-span-6">
                        <div className="flex flex-col gap-6">
                            <p className="text-gray-400 text-lg">
                                Empowering individuals to build meaningful connections and discover their authentic selves through compassionate coaching and guidance.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    {footerSections.map((section) => (
                        <div key={section.id} className="col-span-full sm:col-span-1 lg:col-span-3">
                            <h3 className="text-xl font-semibold mb-4">{section.section}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-blue-500 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Mihaela Prundu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
