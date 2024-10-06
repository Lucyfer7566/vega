import React from "react";
import HomeContent from "./bodyContent/HomeContent/HomeContent";
import ServicesContent from "./bodyContent/ServicesContent/ServicesContent";
import ProductsContent from "./bodyContent/ProductsContent/ProductsContent";
import SolutionsContent from "./bodyContent/SolutionsContent/SolutionsContent";
import News from "./bodyContent/NewsContent/News";
import ContactContent from "./bodyContent/ContactContent/ContactContent";

interface BodyProps {
    activeMenu: string;
}

const Body: React.FC<BodyProps> = ({ activeMenu }) => {
    switch (activeMenu) {
        case "Trang chủ":
            return <HomeContent />;
        case "Dịch vụ":
            return <ServicesContent />;
        case "Sản phẩm":
            return <ProductsContent />;
        case "Giải pháp":
            return <SolutionsContent />;
        case "Tin tức":
            return <News />;
        case "Liên hệ":
            return <ContactContent />;
        default:
            return <div>Chọn menu để xem nội dung</div>;
    }
};

export default Body;
