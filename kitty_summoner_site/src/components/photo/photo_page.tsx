import React, { useState, useEffect } from "react";
import { photoPageImage } from "../../constants/photo_page_item";
import EnlargeImageModal from "../modal/enlarge_image_modal";
import LoadingSpinner from "../../assets/component/loading_spinner"
import PageNavigator from "../image navigation/page_navigator";


const PhotoPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageLoading, setPageLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState(new Set());
  const [enlargeImageVisible, setEnlargeImageVisible] = useState(false);
  const [selectedEnlargedImage, setSelectedEnlargedImage] = useState('');

  const totalPage = Math.ceil(photoPageImage.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = photoPageImage.slice(startIndex, startIndex + itemsPerPage);

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

  useEffect(() => {
    setPageLoading(true);
    const imagePromises = currentItems.map(item => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = item.imageName;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setPageLoading(false);
      setLoadedItems((prevItems) => {
        const newItems = new Set(prevItems);
        currentItems.forEach(item => newItems.add(item.key));
        return newItems;
      });
    }).catch(error => {
      console.error("Error loading images:", error);
      setPageLoading(false);
    });
  }, [currentPage, itemsPerPage, currentItems]);

  const selectEnlargeImage = (imageHD: string) => {
    setEnlargeImageVisible(true);
    setSelectedEnlargedImage(imageHD);
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
              {pageLoading && !loadedItems.has(item.key) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
                  <LoadingSpinner />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center h-full">
                    <a href='javascript:void(0)'>
                      <img
                        alt="gallery"
                        className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={item.imageName}
                        onClick={() => selectEnlargeImage(item.imageHD)}
                      />
                    </a>
                  </div>
                  <div className="text-center font-bold mt-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                      {item.tag}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 py-4">
        <div className="flex flex-col items-center justify-center">
        <PageNavigator
          totalPage={totalPage}
          currentPage={currentPage}
          setPageChange={setCurrentPage}
        />
        </div>
      </div>
      <div className='py-'></div>
      <EnlargeImageModal 
      image={selectedEnlargedImage} 
      isVisible={enlargeImageVisible} 
      onClose={closeEnlargeImage} />
    </div>
  );
};

export default PhotoPage;
