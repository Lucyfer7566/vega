import React from "react";

interface BannerProps {
    data: {
        image: string;
        title: string;
        description: string;
        link: string;
    };
}

const Banner: React.FC<BannerProps> = ({ data }) => {
    return (
        <section className="relative">
            <img src={data.image} alt="Banner" className="w-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-xl mt-2">{data.description}</p>
                <a
                    href={data.link}
                    className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded"
                >
                    Xem chi tiết
                </a>
            </div>
        </section>
    );
};

export default Banner;
