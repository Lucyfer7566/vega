import React from "react";
import banner from "../../../../assets/banner.png";

const Banner: React.FC = () => {
    return (
        <section className="relative">
            <img
                src={banner}
                alt="Big Data Visualization Background"
                className="w-full"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl font-bold">BIG DATA VISUALIZATION</h1>
                <p className="text-xl mt-2">MADE EASY WITH TERRALENS WEB</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded">
                    Xem chi tiết
                </button>
            </div>
        </section>
    );
};

export default Banner;
