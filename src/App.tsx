import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NewsContent from "./components/bodyContent/NewsContent/NewsContent";

const App: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("Trang chủ");

    const handleMenuClick = (menuItem: string) => {
        setActiveMenu(menuItem);
    };

    return (
        <BrowserRouter>
            <div>
                <Header onMenuClick={handleMenuClick} activeMenu={activeMenu} />
                <Routes>
                    <Route
                        path="/"
                        element={<Body activeMenu={activeMenu} />}
                    />
                    <Route path="/tin-cong-nghe" element={<NewsContent />} />{" "}
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
