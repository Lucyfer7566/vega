import React from "react";
import diakhonggian from "../../../../assets/diakhonggian.png";

const Geospatial: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={diakhonggian}
                        alt="Geospatial Image"
                        className="w-full md:w-1/2"
                    />
                    <div className="p-4 md:w-1/2">
                        <h3 className="font-bold text-xl">ĐỊA KHÔNG GIAN</h3>
                        <p className="mt-2 text-gray-600">
                            Địa chất học là một nhánh trong khoa học Trái Đất,
                            là môn khoa học nghiên cứu về các vật chất rắn và
                            lỏng cấu tạo nên Trái Đất, đúng ra là nghiên cứu
                            thạch quyển bao gồm cả phần vỏ Trái Đất và phần cứng
                            của manti trên. Địa chất học tập trung nghiên cứu:
                            cấu trúc, đặc điểm vật lý, động lực, và lịch sử của
                            các vật liệu trên Trái Đất, kể cả các quá trình hình
                            thành, vận chuyển và biến đổi của các vật liệu
                            này....
                        </p>
                        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                            Tìm hiểu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Geospatial;
