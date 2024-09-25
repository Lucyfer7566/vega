import React from "react";
import dadangky from "../assets/dadangky.png";
import dathongbao from "../assets/dathongbao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGooglePlusG,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    const footerData = {
        companyName: "CÔNG TY TNHH CÔNG NGHỆ SAO VEGA",
        address: "Địa chỉ: Số 37 Thi Sách, Q. Hai Bà Trưng, Hà Nội.",
        businessRegistration:
            "0101069142, Nơi cấp: Sở KHĐT - TP Hà Nội. Ngày cấp: 24/07/2018 (Thay đổi lần thứ 21)",
        registrationDate: "24/07/2018 (Thay đổi lần thứ 21)",
        phoneNumber: "Điện thoại: (024)-3.622.77.99",
        mobile: "Mobile: 0965.811.292",
        email: "Email: info@drbinh.com",
        policyLinks: [
            { label: "Chính sách & quy định chung", link: "#" },
            { label: "Quy định & hình thức thanh toán", link: "#" },
            {
                label: "Chính sách bảo mật thông tin cá nhân",
                link: "#",
            },
        ],
        socialLinks: [
            { icon: faFacebookF, link: "#" },
            { icon: faGooglePlusG, link: "#" },
            { icon: faYoutube, link: "#" },
        ],
        copyright: "© Copyright - LOFTY",
    };

    return (
        <footer className="bg-[#0083CB] text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-20">
                <div className="md:row-span-2">
                    <h3 className="text-lg font-bold mb-4">
                        {footerData.companyName}
                    </h3>
                    <p className="text-sm">{footerData.address}</p>
                    <p className="text-sm">
                        Số ĐKKD: {footerData.businessRegistration}
                    </p>
                    <p className="text-sm">{footerData.registrationDate}</p>
                    <p className="text-sm">
                        Điện thoại: {footerData.phoneNumber}
                    </p>
                    <p className="text-sm">Mobile: {footerData.mobile}</p>
                    <p className="text-sm">Email: {footerData.email}</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Chính sách</h3>
                    <ul>
                        {footerData.policyLinks.map((link, index) => (
                            <li
                                key={index}
                                className="text-sm list-disc ml-6 mb-2"
                            >
                                <a href={link.link} className="hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-4">
                        <img src={dadangky} alt="" className="w-48" />
                        <img src={dathongbao} alt="" className="w-48" />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">
                        Các liên kết ứng dụng
                    </h3>
                    <div className="flex space-x-4">
                        {footerData.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                className="text-white text-2xl rounded-full bg-white bg-opacity-20 p-3 hover:bg-opacity-40"
                            >
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="text-sm text-center md:text-left py-4">
                <div className="container mx-auto flex justify-between px-4">
                    <div className="text-sm">{footerData.copyright}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
