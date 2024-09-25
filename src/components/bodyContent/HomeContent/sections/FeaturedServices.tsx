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
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
                    DỊCH VỤ TIÊU BIỂU
                </h2>
                <p className="text-gray-600 text-center text-lg md:text-xl mb-8">
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                </p>
                <div className="mt-8 overflow-x-auto flex w-full">
                    <div
                        className="flex space-x-4"
                        style={{
                            width: `${data.length * (100 / itemsPerPage)}%`,
                        }}
                    >
                        {data.map((service, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg overflow-hidden"
                                style={{ width: `${100 / itemsPerPage}%` }}
                            >
                                <img
                                    src={service.image}
                                    alt={`Service ${index + 1}`}
                                    className="w-full h-auto"
                                />

                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 md:p-4">
                                    <h3 className="font-bold text-white text-base md:text-lg">
                                        {service.title}
                                    </h3>
                                    <a
                                        href={service.link}
                                        className="text-blue-300 hover:underline text-sm md:text-base"
                                    >
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
