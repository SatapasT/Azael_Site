import '../../assets/styles.css';
import xIcon from '../../assets/images/x_icon.png';
import tiktokIcon from '../../assets/images/tiktok_icon.png';
import instagarmIcon from '../../assets/images/instagram_icon.png';
import telegarmIcon from '../../assets/images/telegarm_icon.png';

const HomePage = () => {
    return (
        <div className='justify marker:items-center w-fit h-auto flex flex-col'> 
            <div className='relative top-0 py-2 justify-center flex bg-gradient-to-r items-center from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto animate-glow'> 
                Azael
            </div>
            <div className='relative top-0 justify-center flex bg-gradient-to-r items-center from-red-400 via-orange-400 to-pink-400 bg-clip-text text-1xl font-extrabold text-transparent text-center select-auto'> 
                ' Kitty Summoner  '
            </div>
            <div className='w-full py-10 flex justify-center'>
                <hr className='w-3/4 border-t-2 border-gradient-to-r from-red-400 via-orange-400 to-pink-400' />
            </div>
            <div className='container mx-auto'>
                <div className='relative top-0 flex-row justify-center flex bg-gradient-to-r items-center space-x-4'> 
                    <a href="https://x.com/Azael_Goat" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://www.tiktok.com/@azael_goat" target="_blank" rel="noopener noreferrer">
                        <img src={tiktokIcon} alt="TikTok Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://www.instagram.com/azael_goat/" target="_blank" rel="noopener noreferrer">
                        <img src={instagarmIcon} alt="TikTok Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://t.me/KittySummoner" target="_blank" rel="noopener noreferrer">
                        <img src={telegarmIcon} alt="TikTok Social Media" className="enlarge uniform-size" />
                    </a>
                </div>
            </div>
            <div className='w-full py-10 flex justify-center'>
                hello
            </div>
        </div>
    );
};

export default HomePage;
