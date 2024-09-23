import React from "react";
import logo from "../assets/logo-vega.png";

interface HeaderProps {
    onMenuClick: (menuItem: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
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
                    className="hover:underline"
                    onClick={() => onMenuClick("Trang chủ")}
                >
                    Trang chủ
                </a>
                <a
                    href="#"
                    className="hover:underline"
                    onClick={() => onMenuClick("Dịch vụ")}
                >
                    Dịch vụ
                </a>
                <a
                    href="#"
                    className="hover:underline"
                    onClick={() => onMenuClick("Sản phẩm")}
                >
                    Sản phẩm
                </a>
                <a
                    href="#"
                    className="hover:underline"
                    onClick={() => onMenuClick("Giải pháp")}
                >
                    Giải pháp
                </a>
                <a
                    href="#"
                    className="hover:underline"
                    onClick={() => onMenuClick("Tin tức")}
                >
                    Tin tức
                </a>
                <a
                    href="#"
                    className="hover:underline"
                    onClick={() => onMenuClick("Liên hệ")}
                >
                    Liên hệ
                </a>
            </nav>
        </header>
    );
};

export default Header;
