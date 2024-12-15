import React from "react";
import LoadingSpinner from "../../assets/component/loading_spinner";

interface GalleryLoaderProps {
    currentItems: {
        imageName: string;
        imageHD: string;
        tag: string;
        link: string;
    }[];
    pageLoading: boolean;
    loadedItems: Set<unknown>;
    selectEnlargeImage: (imageHD: string) => void;
}

const GalleryLoader: React.FC<GalleryLoaderProps> = ({currentItems, pageLoading, loadedItems, selectEnlargeImage}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {currentItems.map((item) => (
                <div
                    className="relative overflow-hidden p-1 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center"
                >
                    {pageLoading && !loadedItems.has(item) ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded shadow mt-2">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center h-full">
                                <a href="javascript:void(0)">
                                    <img
                                        alt="gallery"
                                        className="w-full h-full object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                        src={item.imageName}
                                        onClick={() => selectEnlargeImage(item.imageHD)}
                                    />
                                </a>
                            </div>
                            <div className="text-center font-bold mt-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            {(item.link == 'NONE') ? (
                                item.tag
                            ) : (
                            <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                {item.tag}
                            </a>
                            )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GalleryLoader;
