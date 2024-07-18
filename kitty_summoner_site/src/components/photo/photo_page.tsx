import React from "react";
import { HomePageItem } from "../../constants/home_page_item";

const PhotoPage = () => {
  return (
    <div className="container w-screen mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {HomePageItem.map((item) => (
          <img
            key={item.photoID}
            alt="gallery"
            className="w-full h-auto rounded-lg py-1 px-1"
            src={`https://drive.google.com/thumbnail?id=${item.photoID}&sz=w1000`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
