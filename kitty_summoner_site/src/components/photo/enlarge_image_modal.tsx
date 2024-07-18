import React from 'react';

const EnlargeImageModal = ({ image, isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 relative">
                <button
                    className="absolute top-2 right-2 text-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
                <img src={image} alt="Enlarged image" />
            </div>
        </div>
    );
};

export default EnlargeImageModal;
