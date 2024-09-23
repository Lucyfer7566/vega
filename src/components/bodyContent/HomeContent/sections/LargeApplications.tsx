import React, { useState } from "react";
import application1 from "../../../../assets/application1.png";

const LargeApplications: React.FC = () => {
    const applications = [
        {
            image: application1,
            title: "TÊN ỨNG DỤNG 01",
            description:
                "Địa chất học là một nhánh trong khoa học Trái Đất, là môn khoa học nghiên cứu về các vật chất rắn và lỏng cấu tạo nên Trái Đất, đúng ra là nghiên cứu thạch quyển bao gồm cả phần vỏ Trái Đất và phần cứng của manti trên. Địa chất học tập trung nghiên cứu: cấu trúc, đặc điểm vật lý, động lực, và lịch sử của các vật liệu trên Trái Đất, kể cả các quá trình hình thành, vận chuyển và biến đổi của các vật liệu này....",
            link: "/ung-dung-1",
        },
        {
            image: application1,
            title: "TÊN ỨNG DỤNG 02",
            description: "Mô tả cho ứng dụng 2. Lorem ipsum dolor sit amet...",
            link: "/ung-dung-2",
        },
        {
            image: application1,
            title: "TÊN ỨNG DỤNG 03",
            description: "Mô tả cho ứng dụng 3. Consectetur adipiscing elit...",
            link: "/ung-dung-3",
        },
    ];

    const [currentAppIndex, setCurrentAppIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentAppIndex(
            (prevIndex) =>
                (prevIndex - 1 + applications.length) % applications.length
        );
    };

    const handleNext = () => {
        setCurrentAppIndex(
            (prevIndex) => (prevIndex + 1) % applications.length
        );
    };

    const currentApp = applications[currentAppIndex];

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
