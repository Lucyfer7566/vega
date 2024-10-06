import React from "react";
import { newsData } from "../../../mocks/bodyContent/newsData";

const NewsContent: React.FC = () => {
    return (
        <main className="container mx-auto my-8 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                TIN CÔNG NGHỆ
            </h1>
            <hr className="border-t-2 border-gray-300 my-4" />

            <div className="flex flex-col lg:flex-row">
                {/* Phần nội dung chính */}
                <div className="w-full lg:w-full pr-0 lg:pr-8">
                    <img
                        src={newsData.newsDetail.image}
                        alt="Doctor with medical images"
                        className="w-full mb-4"
                    />
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                        {newsData.newsDetail.title}
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                        {newsData.newsDetail.heading}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                        {newsData.newsDetail.content1}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 text-sm md:text-base">
                        {newsData.newsDetail.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                        {newsData.newsDetail.content2}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                        {newsData.newsDetail.heading2}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                        {newsData.newsDetail.content3}
                    </p>
                    <div className="flex space-x-4 mb-8">
                        <button className="bg-blue-700 text-white px-4 py-2 rounded">
                            Gửi
                        </button>
                        <button className="bg-blue-700 text-white px-4 py-2 rounded">
                            Thích
                        </button>
                        <button className="bg-blue-700 text-white px-4 py-2 rounded">
                            Chia sẻ
                        </button>
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4">
                        Bài Viết Liên Quan
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {newsData.newsDetail.relatedNews.map((news, index) => (
                            <div key={index} className="border p-4">
                                <img
                                    src={news.image}
                                    alt="Satellite image"
                                    className="w-full mb-2"
                                />
                                <h4 className="text-lg font-bold text-gray-700 mb-2">
                                    {news.title}
                                </h4>
                                <p className="text-gray-700 mb-2 text-sm">
                                    {news.date}
                                </p>
                                <p className="text-gray-700 line-clamp-3 text-sm">
                                    {news.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-1/5 mt-8 lg:mt-0">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">
                            Tin Tức
                        </h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {newsData.newsDetail.sideNews.map((news, index) => (
                                <li key={index} className="flex items-center">
                                    <img
                                        src={news.image}
                                        alt="News thumbnail"
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div>
                                        <a
                                            href="#"
                                            className="text-blue-700 hover:underline text-sm"
                                        >
                                            {news.title}
                                        </a>
                                        <p className="text-gray-700 text-xs">
                                            {news.date}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <button className="bg-blue-700 text-white w-full py-2 mb-4">
                            Tải Xuống Hồ Sơ Năng Lực CSIA
                        </button>
                        <button className="bg-blue-700 text-white w-full py-2">
                            Liên Hệ
                        </button>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">
                            Làm Thế Nào Chúng Tôi Có Thể Giúp Bạn?
                        </h3>
                        <p className="text-gray-700 mb-4 text-sm">
                            Nếu bạn muốn khám phá thêm về công ty của chúng tôi
                            hoặc các dịch vụ của chúng tôi, bạn có thể tìm đúng
                            người liên hệ tại đây.
                        </p>
                        <button className="bg-blue-700 text-white w-full py-2">
                            Gọi Cho Chúng Tôi
                        </button>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-700 mb-4">
                            Tags
                        </h3>
                        <div className="flex flex-wrap">
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 m-1 rounded">
                                Forest
                            </span>
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 m-1 rounded">
                                Forest
                            </span>
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 m-1 rounded">
                                Forest
                            </span>
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 m-1 rounded">
                                Forest
                            </span>
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 m-1 rounded">
                                Forest
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default NewsContent;
