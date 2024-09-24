import React from "react";

interface GeospatialProps {
    data: {
        image: string;
        title: string;
        description: string;
        link: string;
    };
}

const Geospatial: React.FC<GeospatialProps> = ({ data }) => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={data.image}
                        alt="Geospatial Image"
                        className="w-full md:w-1/2"
                    />
                    <div className="p-4 md:w-1/2">
                        <h3 className="font-bold text-xl">{data.title}</h3>{" "}
                        <p className="mt-2 text-gray-600">{data.description}</p>
                        <a
                            href={data.link}
                            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded inline-block"
                        >
                            Tìm hiểu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Geospatial;
