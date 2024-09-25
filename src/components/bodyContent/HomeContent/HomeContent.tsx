import React from "react";
import { mockData } from "../../../mocks/bodyContent/HomeContent";
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
            <Banner data={mockData.banner} />
            <FeaturedServices data={mockData.featuredServices} />
            <LargeApplications data={mockData.largeApplications} />
            <Video data={mockData.videos} />
            <Images data={mockData.images} />
            <Geospatial data={mockData.geospatial} />
            <CustomerFeedback data={mockData.customerFeedbacks} />
            <News data={{ news: mockData.news, partners: mockData.partners }} />
        </div>
    );
};

export default HomeContent;
