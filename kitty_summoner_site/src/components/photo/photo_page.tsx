import React, { useState } from "react";
import { HomePageItem } from "../../constants/home_page_item";

const PhotoPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPages, setItemPerPage] = useState(9);

  const totalPage = Math.ceil(HomePageItem.length / itemsPerPages);

  const startIndex = (currentPage - 1) * itemsPerPages;
  const currentItems = HomePageItem.slice(startIndex, startIndex + itemsPerPages);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const pageSelection = (key: number) => {
    setCurrentPage(key);
  };

  const changeItemPerPage = (pages: number) => {
    const newCurrentPage = Math.floor(((currentPage - 1) * itemsPerPages) / pages) + 1;
    setItemPerPage(pages);
    setCurrentPage(newCurrentPage);
  };

  return (
    <div className="container mx-auto px-5 py-1 lg:px-32 lg:pt-2 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center justify-start mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
            Images Per Page:
          </div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemPerPage(3)}
          >
            3
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemPerPage(9)}
          >
            9
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemPerPage(27)}
          >
            27
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <div key={item.key} className="relative overflow-hidden">
              <img
                alt="gallery"
                className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:z-10"
                src={`https://drive.google.com/thumbnail?id=${item.photoID}&sz=w1000`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex space-x-2">
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l 
            ${currentPage === 1 ? 'bg-gray-900 hover:bg-gray-900 font-bold py-2 px-4 rounded-r ' : ''}`}
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r 
              ${currentPage === index + 1 ? 'bg-gray-500' : 'bg-white'}
              ${index > currentPage + 1 ? 'hidden' : ''}
              ${index < currentPage - 3 ? 'hidden' : ''}`}
              onClick={() => pageSelection(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r 
          ${currentPage === totalPage ? 'bg-gray-900 hover:bg-gray-900 font-bold py-2 px-4 rounded-r' : ''}`}
            onClick={nextPage}
            disabled={currentPage === totalPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
