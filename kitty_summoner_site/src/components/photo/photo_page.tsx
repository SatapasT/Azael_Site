import React from "react";
import { HomePageItem } from "../../constants/home_page_item";

const PhotoPage = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {HomePageItem.map((item) => (
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
  );
};

export default PhotoPage;
