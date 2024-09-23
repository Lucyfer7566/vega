import React, { useState } from "react";
import avatar1 from "../../../../assets/avatar1.png";
import avatar2 from "../../../../assets/avatar1.png";

const CustomerFeedback: React.FC = () => {
    const feedbacks = [
        {
            avatar: avatar1,
            content:
                "They know how important it is to eliminate any risk factors that you can in a complex system integration project. Their tools and software components have proven their reliability. For me, that means one less risk to worry about.",
            author: "ỦY BAN PHÒNG CHỐNG CỨU NẠN",
        },
        {
            avatar: avatar2,
            content: "Lorem..............",
            author: "MEO MEO",
        },
    ];

    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handlePreviousFeedback = () => {
        setCurrentFeedbackIndex(
            (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
        );
    };

    const handleNextFeedback = () => {
        setCurrentFeedbackIndex(
            (prevIndex) => (prevIndex + 1) % feedbacks.length
        );
    };

    const currentFeedback = feedbacks[currentFeedbackIndex];

    return (
        <section className="py-12 text-center bg-blue-600 text-white relative">
            <h2 className="text-2xl font-bold">CẢM NHẬN KHÁCH HÀNG</h2>
            <div className="mt-8 container mx-auto px-4 flex justify-between items-center">
                <button
                    onClick={handlePreviousFeedback}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded order-1"
                >
                    Previous
                </button>
                <div className="bg-white rounded-md shadow-md p-8 max-w-lg mx-auto relative order-2">
                    <img
                        src={currentFeedback.avatar}
                        alt="Customer"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-800 text-center">
                        {currentFeedback.content}
                    </p>
                    <p className="mt-4 font-bold text-blue-600 text-center">
                        {currentFeedback.author}
                    </p>
                </div>
                <button
                    onClick={handleNextFeedback}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded order-3"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default CustomerFeedback;
