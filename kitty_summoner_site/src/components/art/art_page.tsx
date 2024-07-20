import React, { useState } from "react";
import { ArtPageItem } from "../../constants/art_page_item";
import EnlargeImageModal from "../modal/enlarge_image_modal";


const ArtPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [enlargeImageVisible, setEnlargeImageVisible] = useState(false);
  const [selectedEnlargedImage, setSelectedEnlargedImage] = useState('');

  const totalPage = Math.ceil(ArtPageItem.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ArtPageItem.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(totalPage);
  };

  const pageSelection = (key: number) => {
    setCurrentPage(key);
  };

  const changeItemsPerPage = (pages: number) => {
    const newCurrentPage = Math.floor(((currentPage - 1) * itemsPerPage) / pages) + 1;
    setItemsPerPage(pages);
    setCurrentPage(newCurrentPage);
  };

  const selectEnlargeImage = (key: string) => {
    setEnlargeImageVisible(true);
    setSelectedEnlargedImage(`https://drive.google.com/thumbnail?id=${key}&sz=w1000`);
  };

  const closeEnlargeImage = () => {
    setEnlargeImageVisible(false);
  };

  return (
    <div className="container mx-auto px-5 py-1 lg:px-32 lg:pt-2 min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-start mb-4 flex-grow">
        <div className="flex items-center space-x-2 py-2">
          <div className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
            Images Per Page :
          </div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemsPerPage(3)}
          >
            3
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemsPerPage(9)}
          >
            9
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2"
            onClick={() => changeItemsPerPage(27)}
          >
            27
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {currentItems.map((item) => (
            <div key={item.key} className="relative overflow-hidden p-1 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center h-full">
                    <a href='javascript:void(0)'>
                      <img
                        loading='lazy'
                        alt="gallery"
                        className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={`https://drive.google.com/thumbnail?id=${item.photoID}&sz=w1000`}
                        onClick={() => selectEnlargeImage(item.photoID)}
                      />
                    </a>
                  </div>
                  <div className="text-center font-bold mt-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.artist}
                    </a>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 py-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-2 opacity-95">
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r 
              ${currentPage === 1 ? 'bg-gray-900 hover:bg-gray-900 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r' : ''}`}
              onClick={firstPage}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-l 
              ${currentPage === 1 ? 'bg-gray-900 hover:bg-gray-900 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r ' : ''}`}
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPage)].map((_, index) => (
              <button
                key={index}
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r 
                ${currentPage === index + 1 ? 'bg-gray-500' : 'bg-white'}
                ${index > currentPage + 1 ? 'hidden' : ''}
                ${index < currentPage - 3 ? 'hidden' : ''}
                `}
                onClick={() => pageSelection(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r 
              ${currentPage === totalPage ? 'bg-gray-900 hover:bg-gray-900 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r' : ''}`}
              onClick={nextPage}
              disabled={currentPage === totalPage}
            >
              Next
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r 
              ${currentPage === totalPage ? 'bg-gray-900 hover:bg-gray-900 font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-r' : ''}`}
              onClick={lastPage}
              disabled={currentPage === totalPage}
            >
              Last
            </button>
          </div>
        </div>
      </div>
      <div className='py-'></div>
      <EnlargeImageModal image={selectedEnlargedImage} isVisible={enlargeImageVisible} onClose={closeEnlargeImage} />
    </div>
  );
};

export default ArtPage;
