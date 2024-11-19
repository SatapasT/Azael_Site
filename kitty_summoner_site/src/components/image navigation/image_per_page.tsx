import React from "react";

interface PageNavigatorProps {
    itemsPerPage: number;
    setItemsPerPage: (item: number) => void;
}

const ImageAmountSelector: React.FC<PageNavigatorProps> = ({itemsPerPage, setItemsPerPage}) => {
    return (
        <div className="flex items-center space-x-2 py-2">
            <div className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
                Images Per Page :
            </div>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
                onClick={() => setItemsPerPage(3)}
            >
                3
            </button>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
                onClick={() => setItemsPerPage(9)}
            >
                9
            </button>
            <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
                onClick={() => setItemsPerPage(27)}
            >
                27
            </button>
        </div>
    )
}

export default ImageAmountSelector;