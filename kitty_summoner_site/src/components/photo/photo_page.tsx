import React, { useState, useEffect } from "react";
import { photoPageImage } from "../../constants/photo_page_item";
import EnlargeImageModal from "../modal/enlarge_image_modal";
import PageNavigator from "../image_navigation/page_navigator";
import ImageAmountSelector from "../image_navigation/image_per_page";
import GalleryLoader from "../image_navigation/gallary_loader";

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
      <div className="flex flex-col items-center justify-start mb-4 flex-grow pb-8">
        <ImageAmountSelector setItemsPerPage={setItemsPerPage}/>
        <GalleryLoader
        currentItems={currentItems}
        pageLoading={pageLoading}
        loadedItems={loadedItems}
        selectEnlargeImage={selectEnlargeImage}
        />
      </div>
        <PageNavigator
          totalPage={totalPage}
          currentPage={currentPage}
          setPageChange={setCurrentPage}
        />
        <EnlargeImageModal 
        image={selectedEnlargedImage} 
        isVisible={enlargeImageVisible} 
        onClose={closeEnlargeImage} 
        />
    </div>
  );
};

export default PhotoPage;
