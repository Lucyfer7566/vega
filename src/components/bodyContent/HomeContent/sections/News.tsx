import React, { useState } from "react";

interface NewsItem {
    image: string;
    title: string;
    description: string;
    link: string;
}

interface NewsProps {
    data: NewsItem[];
}

const News: React.FC<NewsProps> = ({ data }) => {
    const newsPerPage = 3;
    const [currentNewsPage, setCurrentNewsPage] = useState(1);

    const totalNewsPages = Math.ceil(data.length / newsPerPage);

    const handleNewsPageChange = (pageNumber: number) => {
        setCurrentNewsPage(pageNumber);
    };

    const newsStartIndex = (currentNewsPage - 1) * newsPerPage;
    const newsEndIndex = newsStartIndex + newsPerPage;

    const currentNews = data.slice(newsStartIndex, newsEndIndex);

    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold">TIN TỨC - SỰ KIỆN</h2>
            <div className="mt-8 overflow-x-auto w-full">
                <div
                    className="flex space-x-4"
                    style={{
                        width: `${data.length * (100 / newsPerPage)}%`,
                    }}
                >
                    {currentNews.map((newsItem, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            style={{ width: `${100 / newsPerPage}%` }}
                        >
                            <img
                                src={newsItem.image}
                                alt={`News ${index + 1}`}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">{newsItem.title}</h3>
                                <a
                                    href={newsItem.link}
                                    className="text-blue-500 hover:underline"
                                >
                                    Xem chi tiết
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
