/* eslint-disable react/no-unescaped-entities */
"use client";

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const FAQ = () => {
    return (
        <div>
            {/* FAQ Section */}
            <div id="faq-section" className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg">
                <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
                <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
                    Frequently Asked Questions
                </h2>
                <div className="w-full px-4 pt-16">
                    <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>What kind of coaching do you provide?</span>
                                        <ChevronUpIcon
                                            className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                        I specialize in relationship and dating coaching, helping men build confidence, navigate challenges, and form meaningful connections.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>

                    <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>How can I schedule a session?</span>
                                        <ChevronUpIcon
                                            className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                        You can book a free discovery session through the "Book a Session" page on my website. From there, we can explore how I can support you.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>

                    <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                        <span>What results can I expect?</span>
                                        <ChevronUpIcon
                                            className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                        My clients often see improvements in confidence, better communication skills, and the ability to build healthy, fulfilling relationships.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;
