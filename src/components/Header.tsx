import React, { useState, useRef } from "react";
import logo from "../assets/logo-vega.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt,
    faEnvelope,
    faGlobeAsia,
    faSearch,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    onMenuClick: (menuItem: string) => void;
    activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, activeMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="bg-white py-2 text-gray-600 text-sm flex items-center px-20 space-x-8 hidden lg:flex">
                <div>
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" />{" "}
                    0433686568   
                </div>
                <div>Mon-Fri 8:00 to 2:00   </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-1" />{" "}
                    info@anhvientham.com.vn
                </div>
                <div>
                    <FontAwesomeIcon icon={faGlobeAsia} className="mr-1" /> vi
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-[#0083CB] text-white px-8 py-4 flex justify-between items-center relative transition-all duration-300 ease-in-out">
                <div className="flex items-center w-24 md:w-32 lg:w-40 shrink-0">
                    <img src={logo} className="w-[106px]" alt="Logo" />
                </div>

                <div className="lg:flex items-center lg:space-x-8 lg:opacity-100">
                    <nav
                        className={`flex flex-col lg:flex-row lg:space-x-8 items-center gap-4 sm:gap-8 w-full transition-all duration-300 ease-in-out ${
                            isMenuOpen ? "block" : "hidden lg:block"
                        }`}
                    >
                        {[
                            "Trang chủ",
                            "Giới thiệu",
                            "Sản phẩm",
                            "Dịch vụ",
                            "Giải pháp",
                            "Tin tức",
                            "Tuyển dụng",
                            "Liên hệ",
                        ].map((menuItem) => (
                            <a
                                key={menuItem}
                                href="#"
                                className={`hover:underline ${
                                    activeMenu === menuItem ? "underline" : ""
                                }`}
                                onClick={() => onMenuClick(menuItem)}
                            >
                                {menuItem}
                            </a>
                        ))}
                    </nav>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden lg:block"
                        }`}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden absolute top-4 right-4"
                >
                    <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        className="text-2xl"
                    />
                </button>
            </header>
        </div>
    );
};

export default Header;
