import React, { useState } from "react";
import Pagination from "../../../../functions/Pagination";

interface ImageItem {
    image: string;
    title: string;
    description: string;
}

interface ImagesProps {
    data: ImageItem[];
}

const Images: React.FC<ImagesProps> = ({ data }) => {
    const imagesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / imagesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const currentImages = data.slice(startIndex, endIndex);

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mr-4">
                        ẢNH
                    </h2>
                </div>
                <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl mb-8">
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                </p>

                <div className="grid grid-cols-3 gap-4">
                    {currentImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                            <img
                                src={image.image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-auto transform hover:scale-110 transition duration-300 ease-in-out"
                                style={{
                                    maxHeight: "370px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Phân trang */}
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default Images;
