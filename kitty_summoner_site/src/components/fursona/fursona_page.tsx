import React from "react";
import RefSheet from '../../assets/images/ref_sheet.webp';
import Sticker1 from '../../assets/images/sticker_1.webp';
import Sticker2 from '../../assets/images/sticker_2.webp';
import Sticker3 from '../../assets/images/sticker_3.webp';
import Sticker4 from '../../assets/images/sticker_4.webp';
import Sticker5 from '../../assets/images/sticker_5.webp';
import munchingGrassIcon from '../../assets/images/sticker_3.webp';


const FursonaPage: React.FC = () => {
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
