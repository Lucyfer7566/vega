import React, { useState } from "react";
import bgCustomer from "../../../../assets/bg-customer.png";

interface CustomerFeedbackProps {
    data: {
        avatar: string;
        content: string;
        author: string;
    }[];
}

const CustomerFeedback: React.FC<CustomerFeedbackProps> = ({ data }) => {
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handlePreviousFeedback = () => {
        setCurrentFeedbackIndex(
            (prevIndex) => (prevIndex - 1 + data.length) % data.length
        );
    };

    const handleNextFeedback = () => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const currentFeedback = data[currentFeedbackIndex];

    return (
        <section
            className="py-12 text-center text-white relative"
            style={{
                backgroundImage: `url(${bgCustomer})`,
                backgroundSize: "cover",
            }}
        >
            <h2 className="text-2xl md:text-3xl font-bold">
                CẢM NHẬN KHÁCH HÀNG
            </h2>
            <div className="mt-8 container mx-auto px-4 flex justify-between items-center">
                <button
                    onClick={handlePreviousFeedback}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 md:h-16 md:w-16"
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

                {/* Nội dung phản hồi */}
                <div className="bg-white rounded-md shadow-md p-4 md:p-8 max-w-lg mx-auto relative order-2">
                    <img
                        src={currentFeedback.avatar}
                        alt="Customer"
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 border-solid border-4 border-[#0083CB]"
                    />
                    <p className="text-gray-800 text-center text-sm md:text-base">
                        {currentFeedback.content}
                    </p>
                    <p className="mt-2 md:mt-4 font-bold text-blue-600 text-center text-sm md:text-base">
                        {currentFeedback.author}
                    </p>
                </div>

                <button
                    onClick={handleNextFeedback}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded order-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 md:h-16 md:w-16"
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
        </section>
    );
};

export default CustomerFeedback;
