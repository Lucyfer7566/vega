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
            <img
                src={data.image}
                alt="Banner"
                className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {data.title}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
                    {data.description}
                </p>
                <a
                    href={data.link}
                    className="mt-4 px-6 py-2 bg-transparent border border-white text-white hover:bg-[#0083CB] hover:text-white font-bold"
                >
                    Xem chi tiết
                </a>
            </div>
        </section>
    );
};

export default Banner;
