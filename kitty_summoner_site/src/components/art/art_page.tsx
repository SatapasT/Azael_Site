import React, { useState, useEffect } from "react";
import { ArtPageItem } from "../../constants/art_page_item";
import EnlargeImageModal from "../modal/enlarge_image_modal";
import LoadingSpinner from "../../assets/component/loading_spinner"
import PageNavigator from "../image_navigation/page_navigator";
import ImageAmountSelector from "../image_navigation/image_per_page";

const ArtPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageLoading, setPageLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState(new Set());
  const [enlargeImageVisible, setEnlargeImageVisible] = useState(false);
  const [selectedEnlargedImage, setSelectedEnlargedImage] = useState('');

  const totalPage = Math.ceil(ArtPageItem.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ArtPageItem.slice(startIndex, startIndex + itemsPerPage);

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
        <div className="flex">
          <ImageAmountSelector setItemsPerPage={setItemsPerPage}/>
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
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.artist}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        <PageNavigator
          totalPage={totalPage}
          currentPage={currentPage}
          setPageChange={setCurrentPage}
        />
      <EnlargeImageModal 
      image={selectedEnlargedImage} 
      isVisible={enlargeImageVisible} 
      onClose={closeEnlargeImage} />
    </div>
  );
};

export default ArtPage;
