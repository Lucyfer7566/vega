import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    CÔNG TY CỔ PHẦN CÔNG NGHỆ CAO VIỆT NAM
                </p>
                <p className="text-sm mt-2">
                    Địa chỉ: Số 123, Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                </p>
                <p className="text-sm mt-2">
                    Điện thoại: (84-28) 1234 5678 - Email: info@company.com
                </p>
                <div className="mt-4 space-x-4">
                    <a href="#" className="hover:underline">
                        Chính sách bảo mật
                    </a>
                    <a href="#" className="hover:underline">
                        Điều khoản sử dụng
                    </a>
                </div>
                <div className="mt-4 space-x-4">
                    <a href="#" className="text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
