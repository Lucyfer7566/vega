import React, { useState } from "react";

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
