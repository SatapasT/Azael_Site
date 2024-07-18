import React, { MouseEvent } from 'react';

interface EnlargeImageModalProps {
    image: string;
    isVisible: boolean;
    onClose: () => void;
}

const EnlargeImageModal: React.FC<EnlargeImageModalProps> = ({ image, isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleBackgroundClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleBackgroundClick}
        >
            <div className="bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 rounded-lg p-2 relative">
                <button
                    className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l opacity-70"
                    onClick={onClose}
                >
                    X
                </button>
                <img src={image} alt="Enlarged image" className="max-w-[95vw] max-h-[95vh] object-contain" />
            </div>
        </div>
    );
};

export default EnlargeImageModal;
