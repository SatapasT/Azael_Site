import React from "react";

interface PageNavigatorProps {
    totalPage: number;
    currentPage: number;
    setPageChange: (page: number) => void;
}

const PageNavigator: React.FC<PageNavigatorProps> = ({ totalPage, currentPage, setPageChange }) => {
    const nextPage = () => {
        setPageChange(currentPage + 1);
    };

    const previousPage = () => {
        if (currentPage > 1) setPageChange(currentPage - 1);
    };

    const firstPage = () => {
        setPageChange(1);
    };

    const lastPage = () => {
        setPageChange(totalPage);
    };

    const pageSelection = (page: number) => {
        setPageChange(page);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 py-4">
        <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-2 opacity-95">

            <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded 
                ${currentPage === 1 && "bg-gray-900"}`}
                onClick={firstPage}
                disabled={currentPage === 1}
            >
                First
            </button>

            <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded 
                ${currentPage === 1 && "bg-gray-900"}`}
                onClick={previousPage}
                disabled={currentPage === 1}
            >
                Prev
            </button>

            {[...Array(totalPage)].map((_, index) => (
                <button
                    key={index}
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded 
                    ${currentPage === index + 1 && "bg-gray-500"}
                    ${index > currentPage + 1 ? 'hidden' : ""}
                    ${index < currentPage - 3 ? 'hidden' : ""}
                    `}
                    onClick={() => pageSelection(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded 
                ${currentPage === totalPage && "bg-gray-900"}`}
                onClick={nextPage}
                disabled={currentPage === totalPage}
            >
                Next
            </button>
            
            <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded 
                ${currentPage === totalPage && "bg-gray-900"}`}
                onClick={lastPage}
                disabled={currentPage === totalPage}
            >
                Last
            </button>
        </div>
        </div>
        </div>
    );
};

export default PageNavigator;
