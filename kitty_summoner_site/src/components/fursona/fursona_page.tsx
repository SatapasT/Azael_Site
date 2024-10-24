import RefSheet from '../../assets/images/ref_sheet.webp';
import RefSheetDownload from '../../assets/images/ref_sheet_download.png';
import Sticker1 from '../../assets/images/sticker_1.webp';
import Sticker2 from '../../assets/images/sticker_2.webp';
import Sticker3 from '../../assets/images/sticker_3.webp';
import Sticker4 from '../../assets/images/sticker_4.webp';
import Sticker5 from '../../assets/images/sticker_5.webp';
import munchingGrassIcon from '../../assets/images/sticker_3.webp';
import VRchat_Model_1 from '../../assets/images/vrchat_model_1.webp';
import VRchat_Model_2 from '../../assets/images/vrchat_model_2.webp';
import Cult_Caprine from '../../assets/images/cult_caprine.webp';

const FursonaPage: React.FC = () => {

  return (
    <div className="container mx-auto">
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
          <a href={RefSheetDownload} download="Azael Reference Sheet" className='text-white'>
            <img
              src={RefSheet}
              title='Reference Sheet'
              className='w-auto max-w-xs lg:max-w-2xl h-auto hover:scale-110 transition-transform duration-300'
            />
          </a>
            <div className='text-white text-center pt-5'>
              Click to download!
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center py-10'>
        <hr className='w-11/12 border-t-2' />
      </div>
        
      <div className='flex items-center justify-center w-full h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-center w-full h-full'>
          <div className='flex justify-center items-center space-x-4'>
            <img
              src={VRchat_Model_1}
              title='VR model 1'
              className=' w-auto h-auto max-w-xs md:max-w-md '
            />
            <img
              src={VRchat_Model_2}
              title='VR model 2'
              className='w-auto h-auto max-w-xs md:max-w-md'
            />
          </div>
          <div className="flex flex-col items-center justify-center pb-5 w-auto">
            <div className='bg-gradient-to-r from-orange-500 via-red-400 to-red-500 bg-clip-text  text-transparent mt-2 text-4xl text-center flex items-center justify-center font-semibold '>
              VRChat and V-tuber model!
            </div>
            <div className='text-white mb-2 text-2xl text-center flex items-center justify-center '>
              Base model by&nbsp;
              <a className="underline text-blue-500" href="https://x.com/wolkehond?lang=en" target="_blank" rel="noopener noreferrer">
                Wolke
              </a>
            </div>
            <a className='underline text-blue-500 text-center flex items-center justify-center pt-5' 
            href="https://wolkehond.gumroad.com/l/caprine" 
            target="_blank" 
            rel="noopener noreferrer">
              Cult Caprine | VRC Avatar + Vtuber | v. 1.1
            </a>
            <a 
              href="https://wolkehond.gumroad.com/l/caprine"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-1/2 h-auto max-w-xs md:max-w-md pt-3"
              title='Cult Caprine'
            >
              <img
              src={Cult_Caprine}
              title='Cult Caprine'
              className="enlarge"
            />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FursonaPage;
