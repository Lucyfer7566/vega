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
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img
                            src={data.image}
                            alt="Geospatial Image"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="p-4 md:w-1/2 md:pl-8">
                        <h3 className="font-bold text-xl text-blue-600 mb-4">
                            {data.title}
                        </h3>
                        <p className="mt-2 text-gray-800 text-justify leading-relaxed">
                            {data.description}
                        </p>
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
