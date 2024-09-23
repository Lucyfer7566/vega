import React from "react";

const Video: React.FC = () => {
    return (
        <section className="py-12 text-center bg-blue-600 text-white">
            <h2 className="text-2xl font-bold">VIDEO</h2>
            <h2 className="text-xl">
                We are committed to providing our customers with exceptional
                service while offering our employees the best training.
            </h2>
            <div className="mt-8">
                <iframe
                    width="770"
                    height="433"
                    src="https://www.youtube.com/embed/PNhYz6RmIr4?si=8dwy2z0RHLs2dJA0&"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="mx-auto"
                ></iframe>
                <p className="mt-4">JWPlayer Embed Code</p>
            </div>
        </section>
    );
};

export default Video;
