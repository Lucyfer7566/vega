import React from "react";
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
    showNumbers?: boolean;
    isSquare?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    showNumbers = false,
    isSquare = false,
}) => {
    return (
        <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`h-8 w-8 mx-1 font-bold ${
                        currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } ${showNumbers ? "text-white font-bold" : ""} ${
                        isSquare ? "border border-gray-300" : "rounded-full"
                    }`}
                >
                    {showNumbers ? i + 1 : ""}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
