import React, { useState, useEffect } from "react";
import RefSheet from '../../assets/images/ref_sheet.webp';
import Sticker1 from '../../assets/images/sticker_1.webp';
import Sticker2 from '../../assets/images/sticker_2.webp';
import Sticker3 from '../../assets/images/sticker_3.webp';
import Sticker4 from '../../assets/images/sticker_4.webp';
import Sticker5 from '../../assets/images/sticker_5.webp';
import munchingGrassIcon from '../../assets/images/sticker_3.webp';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <svg
      role="status"
      className="w-16 h-16 text-gray-200 animate-spin fill-blue-600"
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
  </div>
);

const FursonaPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = [
      RefSheet,
      Sticker1,
      Sticker2,
      Sticker3,
      Sticker4,
      Sticker5,
      munchingGrassIcon,
    ].map(src => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='flex items-center justify-center w-full h-fill'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full h-full py-12'>
        <div className='flex flex-col items-center flex-1'>
          <div className='py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto animate-glow'>
            Azael
          </div>
          <div className='py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-2xl font-extrabold text-transparent text-center'>
            The Demon Goat
          </div>
          <div className='flex flex-row items-center justify-center w-full'>
            <img
              src={Sticker1}
              title='Sip Tea'
              className='w-1/6 h-auto'
            />
            <img
              src={Sticker2}
              title='Cry'
              className='w-1/6 h-auto'
            />
            <img
              src={Sticker3}
              title='Munching Grass'
              className='w-1/6 h-auto'
            />
            <img
              src={Sticker4}
              title='Sweating'
              className='w-1/6 h-auto'
            />
            <img
              src={Sticker5}
              title='Thumb Up'
              className='w-1/6 h-auto'
            />
          </div>
          <a href="https://t.me/addstickers/Azael_Goat" target="_blank" rel="noopener noreferrer">
            <div className="py-10 flex justify-center font-extrabold">
              <button type="button" className="flex items-center text-white bg-gradient-to-br from-red-500 to-orange-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <img src={munchingGrassIcon} alt="Munching Grass Sticker" className="w-6 h-6 mr-2" />
                <span>Get Azael Telegram Stickers!</span>
              </button>
            </div>
          </a>
        </div>
        <div className='flex flex-col items-center justify-center w-full relative flex-1'>
          <a href={RefSheet} download="ReferenceSheet.png" className='text-white'>
            <img
              src={RefSheet}
              title='Reference Sheet'
              className='w-fill h-auto hover:scale-110 transition-transform duration-300'
            />
          </a>
          <div className='text-white text-center mt-2'>
            Click to download!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FursonaPage;
