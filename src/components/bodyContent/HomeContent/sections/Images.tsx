import React, { useState } from "react";
import image1 from "../../../../assets/image1.png";
import image2 from "../../../../assets/image2.png";
import image3 from "../../../../assets/image3.png";
import image4 from "../../../../assets/image4.png";
import image5 from "../../../../assets/image5.png";
import image6 from "../../../../assets/image6.png";
import image7 from "../../../../assets/image6.png";
import image8 from "../../../../assets/image5.png";
import image9 from "../../../../assets/image4.png";
import image10 from "../../../../assets/image3.png";
import image11 from "../../../../assets/image2.png";
import image12 from "../../../../assets/image1.png";

const Images: React.FC = () => {
    const images = [
        {
            image: image1,
            title: "HÌNH ẢNH 01",
            description: "Lorem ipsum dolor sit amet...",
        },
        {
            image: image2,
            title: "HÌNH ẢNH 02",
            description: "Consectetur adipiscing elit...",
        },
        {
            image: image3,
            title: "HÌNH ẢNH 03",
            description: "Sed do eiusmod tempor...",
        },
        {
            image: image4,
            title: "HÌNH ẢNH 04",
            description: "Lorem.........",
        },
        {
            image: image5,
            title: "HÌNH ẢNH 05",
            description: "Lorem.........",
        },
        {
            image: image6,
            title: "HÌNH ẢNH 06",
            description: "Lorem.........",
        },
        {
            image: image7,
            title: "HÌNH ẢNH 07",
            description: "Lorem.........",
        },
        {
            image: image8,
            title: "HÌNH ẢNH 08",
            description: "Lorem.........",
        },
        {
            image: image9,
            title: "HÌNH ẢNH 09",
            description: "Lorem.........",
        },
        {
            image: image10,
            title: "HÌNH ẢNH 10",
            description: "Lorem.........",
        },
        {
            image: image11,
            title: "HÌNH ẢNH 11",
            description: "Lorem.........",
        },
        {
            image: image12,
            title: "HÌNH ẢNH 12",
            description: "Lorem.........",
        },
    ];

    const imagesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const currentImages = images.slice(startIndex, endIndex);

    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold">ẢNH</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentImages.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                        <img
                            src={image.image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>

            {/* Phân trang */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`h-6 w-6 rounded-full mx-1 ${
                            currentPage === i + 1
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Images;
