import React from "react";
import service1 from "../../../../assets/service1.png";
import service2 from "../../../../assets/service2.png";
import service3 from "../../../../assets/service3.png";
import service4 from "../../../../assets/service4.png";

const FeaturedServices: React.FC = () => {
    const services = [
        {
            image: service1,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
        {
            image: service2,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
        {
            image: service3,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
        {
            image: service4,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
        {
            image: service1,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
        {
            image: service2,
            title: "HỆ THỐNG THÔNG TIN CƠ ĐỘNG",
            link: "/hethongthongtincodong",
        },
    ];

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
                        width: `${services.length * (100 / itemsPerPage)}%`,
                    }}
                >
                    {services.map((service, index) => (
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
