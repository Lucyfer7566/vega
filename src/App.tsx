import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("Trang chủ");

    const handleMenuClick = (menuItem: string) => {
        setActiveMenu(menuItem);
    };

    return (
        <div>
            <Header onMenuClick={handleMenuClick} />
            <Body activeMenu={activeMenu} />
            <Footer />
        </div>
    );
};

export default App;
