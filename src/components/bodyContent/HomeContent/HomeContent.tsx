import React from "react";
import Banner from "./sections/Banner";
import FeaturedServices from "./sections/FeaturedServices";
import LargeApplications from "./sections/LargeApplications";
import Video from "./sections/Video";
import Images from "./sections/Images";
import Geospatial from "./sections/Geospatial";
import CustomerFeedback from "./sections/CustomerFeedback";
import News from "./sections/News";

const HomeContent: React.FC = () => {
    return (
        <div>
            <Banner />
            <FeaturedServices />
            <LargeApplications />
            <Video />
            <Images />
            <Geospatial />
            <CustomerFeedback />
            <News />
        </div>
    );
};

export default HomeContent;
