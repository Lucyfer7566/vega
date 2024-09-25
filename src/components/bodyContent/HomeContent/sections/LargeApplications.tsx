import React, { useState } from "react";

interface Application {
    image: string;
    title: string;
    description: string;
    link: string;
}

interface LargeApplicationsProps {
    data: Application[];
}

const LargeApplications: React.FC<LargeApplicationsProps> = ({ data }) => {
    const [currentAppIndex, setCurrentAppIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentAppIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
        );
    };

    const handleNext = () => {
        setCurrentAppIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const currentApp = data[currentAppIndex];

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8">
                    CÁC ỨNG DỤNG LOFTY
                </h2>
                <p className="text-gray-600 text-center text-lg md:text-xl mb-8">
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                </p>

                <div className="flex flex-col md:flex-row items-start relative">
                    <div className="md:w-1/2 relative mb-4 md:mb-0">
                        <img
                            src={currentApp.image}
                            alt={`Application ${currentAppIndex + 1}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <div className="p-4 md:w-1/2 md:pl-8 relative">
                        <h3 className="font-bold text-xl md:text-2xl text-blue-600 mb-4">
                            {currentApp.title}
                        </h3>
                        <p className="mt-2 text-gray-800 text-justify leading-relaxed text-sm md:text-base">
                            {currentApp.description}
                        </p>
                        <button className="mt-4 px-4 md:px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white font-bold">
                            Tiếp tục
                        </button>

                        <div className="absolute bottom-0 right-0 flex space-x-4">
                            <button
                                onClick={handlePrevious}
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LargeApplications;
