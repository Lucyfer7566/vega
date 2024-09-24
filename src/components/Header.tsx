import React from "react";
import logo from "../assets/logo-vega.png";

interface HeaderProps {
    onMenuClick: (menuItem: string) => void;
    activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, activeMenu }) => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    src={logo}
                    width="106px"
                    height="43px"
                    alt="Logo"
                    className="mr-2"
                />
            </div>
            <nav className="space-x-4 text-xl">
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Trang chủ" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Trang chủ")}
                >
                    Trang chủ
                </a>
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Dịch vụ" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Dịch vụ")}
                >
                    Dịch vụ
                </a>
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Sản phẩm" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Sản phẩm")}
                >
                    Sản phẩm
                </a>
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Giải pháp" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Giải pháp")}
                >
                    Giải pháp
                </a>
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Tin tức" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Tin tức")}
                >
                    Tin tức
                </a>
                <a
                    href="#"
                    className={`hover:underline ${
                        activeMenu === "Liên hệ" ? "underline" : ""
                    }`}
                    onClick={() => onMenuClick("Liên hệ")}
                >
                    Liên hệ
                </a>
            </nav>
        </header>
    );
};

export default Header;
