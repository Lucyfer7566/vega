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
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center">
                    CÁC ỨNG DỤNG LỚN
                </h2>
                <div className="mt-8 flex flex-col md:flex-row items-center relative">
                    <img
                        src={currentApp.image}
                        alt={`Application ${currentAppIndex + 1}`}
                        className="w-full md:w-1/2"
                    />
                    <div className="p-4 md:w-1/2">
                        <h3 className="font-bold text-xl">
                            {currentApp.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                            {currentApp.description}
                        </p>
                        <a
                            href={currentApp.link}
                            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded inline-block"
                        >
                            Tìm hiểu
                        </a>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-4">
                        <button
                            onClick={handlePrevious}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LargeApplications;
