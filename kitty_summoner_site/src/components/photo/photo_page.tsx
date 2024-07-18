import React, { useState, useEffect } from "react";
import { HomePageItem } from "../../constants/home_page_item";
import EnlargeImageModal from "./enlarge_image_modal";

const PhotoPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPages, setItemPerPage] = useState(9);
  const [PageLoading, setPageLoading] = useState(true);
  const [enlargeImageVisible,setEnlargeImageVisible] = useState(false);
  const [selectedEnlargedImage, setSelectedEnlargedImage] = useState('');

  const totalPage = Math.ceil(HomePageItem.length / itemsPerPages);

  const startIndex = (currentPage - 1) * itemsPerPages;
  const currentItems = HomePageItem.slice(startIndex, startIndex + itemsPerPages);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  };

  const pageSelection = (key: number) => {
    setCurrentPage(key);
    scrollToTop();
  };

  const changeItemPerPage = (pages: number) => {
    const newCurrentPage = Math.floor(((currentPage - 1) * itemsPerPages) / pages) + 1;
    setItemPerPage(pages);
    setCurrentPage(newCurrentPage);
    scrollToTop();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const selectEnlargeImage = (key : string)  => {
    setEnlargeImageVisible(true)
    setSelectedEnlargedImage(`https://drive.google.com/thumbnail?id=${key}&sz=w1000`)
  }

  const closeEnlargeImage = () => {
    setEnlargeImageVisible(!enlargeImageVisible)
  }

  return (
    <div className="container mx-auto px-5 py-1 lg:px-32 lg:pt-2 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center justify-start mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
            Images Per Page :
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
            <div key={item.key} className="relative overflow-hidden p-1 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400">
              {PageLoading ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
                  <div className="flex items-center justify-center p-10">
                    <div role="status" className="flex flex-col items-center justify-center space-y-4">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                        viewBox="0 0 100 101"
                        fill="none"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  alt="gallery"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:z-10 border-1 border-slate-700"
                  src={`https://drive.google.com/thumbnail?id=${item.photoID}&sz=w1000`}
                  onClick={() => selectEnlargeImage(item.photoID)}
                />
              )}
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
      <EnlargeImageModal image={selectedEnlargedImage} isVisible={enlargeImageVisible} onClose={closeEnlargeImage}/>
    </div>
  );
};
export default PhotoPage;
