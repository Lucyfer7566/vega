import React, { useState } from "react";
import tintuc1 from "../../../../assets/tintuc1.png";
import tintuc2 from "../../../../assets/tintuc2.png";
import tintuc3 from "../../../../assets/tintuc3.png";
import tintuc4 from "../../../../assets/tintuc3.png";
import tintuc5 from "../../../../assets/tintuc3.png";

const News: React.FC = () => {
    const news = [
        {
            image: tintuc1,
            title: "Thường xuyên bị đau lưng có thể khắc phục ngay bằng một số phương pháp sau",
            description:
                "Tình trạng đau lưng xảy ra có thể là do thay đổi thời tiết hoặc vì bạn vận động quá sức. Tuy nhiên, chỉ cần khắc phục ...",
            link: "/tin-tuc-1",
        },
        {
            image: tintuc2,
            title: "Thường xuyên bị đau lưng có thể khắc phục ngay bằng một số phương pháp sau",
            description:
                "Tình trạng đau lưng xảy ra có thể là do thay đổi thời tiết hoặc vì bạn vận động quá sức. Tuy nhiên, chỉ cần khắc phục ...",
            link: "/tin-tuc-2",
        },
        {
            image: tintuc3,
            title: "Thường xuyên bị đau lưng có thể khắc phục ngay bằng một số phương pháp sau",
            description:
                "Tình trạng đau lưng xảy ra có thể là do thay đổi thời tiết hoặc vì bạn vận động quá sức. Tuy nhiên, chỉ cần khắc phục ...",
            link: "/tin-tuc-3",
        },
        {
            image: tintuc4,
            title: "Thường xuyên bị đau lưng có thể khắc phục ngay bằng một số phương pháp sau",
            description:
                "Tình trạng đau lưng xảy ra có thể là do thay đổi thời tiết hoặc vì bạn vận động quá sức. Tuy nhiên, chỉ cần khắc phục ...",
            link: "/tin-tuc-4",
        },
        {
            image: tintuc5,
            title: "Thường xuyên bị đau lưng có thể khắc phục ngay bằng một số phương pháp sau",
            description:
                "Tình trạng đau lưng xảy ra có thể là do thay đổi thời tiết hoặc vì bạn vận động quá sức. Tuy nhiên, chỉ cần khắc phục ...",
            link: "/tin-tuc-5",
        },
    ];

    const newsPerPage = 3;
    const [currentNewsPage, setCurrentNewsPage] = useState(1);

    const totalNewsPages = Math.ceil(news.length / newsPerPage);

    const handleNewsPageChange = (pageNumber: number) => {
        setCurrentNewsPage(pageNumber);
    };

    const newsStartIndex = (currentNewsPage - 1) * newsPerPage;
    const newsEndIndex = newsStartIndex + newsPerPage;

    const currentNews = news.slice(newsStartIndex, newsEndIndex);

    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold">TIN TỨC - SỰ KIỆN</h2>
            <div className="mt-8 overflow-x-auto w-full">
                <div
                    className="flex space-x-4"
                    style={{
                        width: `${news.length * (100 / newsPerPage)}%`,
                    }}
                >
                    {news.map((news, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            style={{ width: `${100 / newsPerPage}%` }}
                        >
                            <img
                                src={news.image}
                                alt={`News ${index + 1}`}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">{news.title}</h3>
                                <a
                                    href={news.link}
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
