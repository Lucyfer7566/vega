import React, { useState } from "react";
import videoCustomer from "../../../../assets/bg-customer.png";
import Pagination from "../../../../functions/Pagination";

interface VideoItem {
    src: string;
    title: string;
}

interface VideoProps {
    data: VideoItem[];
}

const Video: React.FC<VideoProps> = ({ data }) => {
    const videosPerPage = 1; // Hiển thị 1 video mỗi trang
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / videosPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;

    const currentVideos = data.slice(startIndex, endIndex);

    return (
        <section
            className="py-12 text-center bg-blue-600 text-white"
            style={{
                backgroundImage: `url(${videoCustomer})`,
                backgroundSize: "cover",
            }}
        >
            <h2 className="text-2xl font-bold">VIDEO</h2>
            <h2 className="text-xl">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
            </h2>
            <div className="mt-8">
                {currentVideos.map((video, index) => (
                    <div
                        key={index}
                        className="relative mx-auto"
                        style={{ maxWidth: "770px", height: "auto" }}
                    >
                        <iframe
                            src={video.src}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            className="w-full h-auto"
                            style={{
                                aspectRatio: "770 / 433",
                                border: "none",
                            }}
                        ></iframe>
                    </div>
                ))}

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

export default Video;
