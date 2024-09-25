import React from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    return (
        <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`h-3 w-3 rounded-full mx-1 ${
                        currentPage === i + 1 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                ></button>
            ))}
        </div>
    );
};

export default Pagination;
