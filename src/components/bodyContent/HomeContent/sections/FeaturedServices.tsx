import React from "react";

interface FeaturedService {
    image: string;
    title: string;
    link: string;
}

interface FeaturedServicesProps {
    data: FeaturedService[];
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ data }) => {
    const itemsPerPage = 4;

    return (
        <section className="py-12 text-center">
            <h2 className="text-2xl font-bold">DỊCH VỤ TIÊU BIỂU</h2>
            <p className="mt-2 text-gray-600">
                Các dịch vụ tiêu biểu của chúng tôi được khách hàng đánh giá cao
                về chất lượng và hiệu quả.
            </p>
            <div className="mt-8 overflow-x-auto w-full">
                <div
                    className="flex space-x-4"
                    style={{
                        width: `${data.length * (100 / itemsPerPage)}%`,
                    }}
                >
                    {data.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            style={{ width: `${100 / itemsPerPage}%` }}
                        >
                            <img
                                src={service.image}
                                alt={`Service ${index + 1}`}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">{service.title}</h3>
                                <a
                                    href={service.link}
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

export default FeaturedServices;
