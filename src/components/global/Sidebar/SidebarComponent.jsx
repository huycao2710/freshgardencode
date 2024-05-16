import React from 'react';
import { motion } from 'framer-motion';

const SidebarComponent = ({ open, onClose }) => {
    return (
        <>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div
                        className="absolute inset-0 bg-gray-500 bg-opacity-75"
                        onClick={onClose}
                    ></div>
                    <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                        <div className="w-screen max-w-md">
                            <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-xl font-semibold text-black">Search</h2>
                                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                        <span className="sr-only">Close</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-4 px-4">
                                    <input type="text" placeholder="Search post here" className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                </div>
                                <div className="mt-4 px-4">
                                    <p className="ml-2 text-gray-400">Results</p>
                                </div>
                                <div className="mt-4 px-4 h-full overflow-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[1, 2, 3].map((index) => (
                                            <div key={index} className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                                                <h3 className="text-lg font-semibold text-black mb-2">Card {index}</h3>
                                                <p className="text-gray-600">Content for card {index}.</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            )}
        </>
    );
};

export default SidebarComponent;
