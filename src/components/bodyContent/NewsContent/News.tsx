import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../../mocks/bodyContent/newsData";
import Pagination from "../../../functions/Pagination";

const News: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 9;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = newsData.newsList.slice(
        indexOfFirstNews,
        indexOfLastNews
    );

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className="container mx-auto my-8 px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
                TIN CÔNG NGHỆ
            </h1>
            <div className="flex items-center mb-4">
                <a href="#" className="text-blue-500 text-sm md:text-base">
                    Trang chủ
                </a>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500 text-sm md:text-base">
                    Tin tức - Sự kiện
                </a>
                <span className="mx-2">/</span>
                <span className="text-sm md:text-base">Tin công nghệ</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentNews.map((news, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden"
                    >
                        <img
                            src={news.image}
                            alt=""
                            className="w-full h-auto md:h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-base md:text-lg font-bold mb-2">
                                {news.title}
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm mb-2">
                                {news.date}
                            </p>
                            <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-3">
                                {news.content}
                            </p>
                            <Link
                                to="/tin-cong-nghe"
                                className="text-blue-500 text-sm md:text-base"
                            >
                                Xem chi tiết
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
                totalPages={Math.ceil(newsData.newsList.length / newsPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                showNumbers={true}
                isSquare={true}
            />
        </main>
    );
};

export default News;
