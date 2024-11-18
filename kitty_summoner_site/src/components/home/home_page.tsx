import '../../assets/styles.css';
import xIcon from '../../assets/images/x_icon.webp';
import tiktokIcon from '../../assets/images/tiktok_icon.webp';
import instagarmIcon from '../../assets/images/instagram_icon.webp';
import telegarmIcon from '../../assets/images/telegarm_icon.webp';
import AzaelHeadshotImage from '../../assets/images/azael_headshot.webp';
import TwitchIcon from '../../assets/images/twitch_icon.webp';
import YoutubeIcon from '../../assets/images/youtube_icon.webp'

const HomePage: React.FC = () => {

    const title = " '  Kitty Summoner ' ";

    return (
        <div className='flex items-center justify-center w-full h-fill'>
            <div className='flex flex-col items-center justify-center w-full h-full pb-12 pt-10 '>
                <img
                    src={AzaelHeadshotImage}
                    alt='Azael Icon'
                    className='p-2 box-border w-1/5 h-auto border-2 rounded-lg border-red-600 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8b0000,0_0_15px_#8b0000,0_0_30px_#8b0000]'
                />
                <div className='py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto animate-glow'>
                    Azael
                </div>
                <div className='bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 bg-clip-text text-1xl font-extrabold text-transparent text-center select-auto'>
                    {title}
                </div>
                <div className='w-1/2 py-5 flex justify-center'>
                    <hr className='w-1/2 border-t-2' />
                </div>

                <div className=' text-center flex items-center justify-center bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent select-auto pb-5'>
                        He/Him
                        <div className='text-red-500 mx-2'>𖤐</div>
                        Demon Goat
                        <div className='text-red-500 mx-2'>𖤐</div>
                        CS Major
                </div>

                <div className='border-2 rounded-lg border-orange-600 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#8b0000,0_0_15px_#8b0000,0_0_30px_#8b0000]'>
                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 justify-center items-center p-4'>
                        <a href="https://www.twitch.tv/azaelgoat" target="_blank" rel="noopener noreferrer">
                            <img src={TwitchIcon} alt="Telegram Social Media" className="enlarge uniform-size" />
                        </a>
                        <a href="https://x.com/Azael_Goat" target="_blank" rel="noopener noreferrer">
                            <img src={xIcon} alt="X Social Media" className="enlarge uniform-size" />
                        </a>
                        <a href="https://www.tiktok.com/@azael_goat" target="_blank" rel="noopener noreferrer">
                            <img src={tiktokIcon} alt="TikTok Social Media" className="enlarge uniform-size" />
                        </a>
                        <a href="https://www.youtube.com/@AzaelGoat" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeIcon} alt="Instagram Social Media" className="enlarge uniform-size" />
                        </a>
                        <a href="https://www.instagram.com/azael_goat/" target="_blank" rel="noopener noreferrer">
                            <img src={instagarmIcon} alt="Instagram Social Media" className="enlarge uniform-size" />
                        </a>
                        <a href="https://t.me/KittySummoner" target="_blank" rel="noopener noreferrer">
                            <img src={telegarmIcon} alt="Telegram Social Media" className="enlarge uniform-size" />
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HomePage;
