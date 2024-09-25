import React, { useState } from "react";

interface NewsItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

interface NewsProps {
    data: {
        news: NewsItem[];
        partners: string[];
    };
}

const News: React.FC<NewsProps> = ({ data }) => {
    const newsPerPage = 3;
    const [currentNewsPage, setCurrentNewsPage] = useState(1);
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const totalNewsPages = Math.ceil(data.news.length / newsPerPage);

    const handleNewsPageChange = (pageNumber: number) => {
        setCurrentNewsPage(pageNumber);
    };

    const newsStartIndex = (currentNewsPage - 1) * newsPerPage;
    const newsEndIndex = newsStartIndex + newsPerPage;

    const currentNews = data.news.slice(newsStartIndex, newsEndIndex);

    const handlePreviousPartner = () => {
        setCurrentPartnerIndex(
            (prevIndex) =>
                (prevIndex - 1 + data.partners.length) % data.partners.length
        );
    };

    const handleNextPartner = () => {
        setCurrentPartnerIndex(
            (prevIndex) => (prevIndex + 1) % data.partners.length
        );
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-2xl font-bold text-blue-600 text-center mb-8">
                    TIN TỨC - SỰ KIỆN
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentNews.map((newsItem, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden border border-gray-300"
                        >
                            <img
                                src={newsItem.image}
                                alt={`News ${index + 1}`}
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-md md:text-lg mb-2">
                                    {newsItem.title}
                                </h3>
                                <p className="text-gray-700 line-clamp-3 text-sm md:text-base">
                                    {newsItem.description}
                                </p>
                                <a
                                    href={newsItem.link}
                                    className="text-blue-500 hover:underline mt-4 inline-block text-sm md:text-base"
                                >
                                    Xem chi tiết{" >"}
                                    <i className="fas fa-chevron-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Đối tác */}
                <div className="mt-12 relative">
                    <div
                        className="flex space-x-4 overflow-x-hidden"
                        style={{
                            transform: `translateX(-${
                                currentPartnerIndex *
                                (100 / data.partners.length)
                            }%)`,
                        }}
                    >
                        {data.partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-1/5 md:w-1/6 lg:w-1/5"
                            >
                                <img
                                    src={partner}
                                    alt={`Partner ${index + 1}`}
                                    className="h-10 md:h-12 object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handlePreviousPartner}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                        <i className="fas fa-chevron-left fa-lg md:fa-2x"></i>
                    </button>
                    <button
                        onClick={handleNextPartner}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                    >
                        <i className="fas fa-chevron-right fa-lg md:fa-2x"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default News;
