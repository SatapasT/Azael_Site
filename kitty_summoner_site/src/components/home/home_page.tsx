import React, { useState, useEffect } from 'react';
import '../../assets/styles.css';
import xIcon from '../../assets/images/x_icon.webp';
import tiktokIcon from '../../assets/images/tiktok_icon.webp';
import instagarmIcon from '../../assets/images/instagram_icon.webp';
import telegarmIcon from '../../assets/images/telegarm_icon.webp';
import AzaelHeadshotImage from '../../assets/images/azael_headshot.webp';
import LoadingSpinner from "../loading_spinner"

const HomePage: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imagePromises = [
            xIcon,
            tiktokIcon,
            instagarmIcon,
            telegarmIcon,
            AzaelHeadshotImage,
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

    const title = " 'Kitty Summoner ' ";

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='flex items-center justify-center w-full h-fill'>
            <div className='flex flex-col items-center justify-center w-full h-full py-12'>
                <img
                    src={AzaelHeadshotImage}
                    alt='Azael Icon'
                    className='p-2 box-border w-1/5 h-auto'
                />
                <div className='py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto animate-glow'>
                    Azael
                </div>
                <div className='bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-1xl font-extrabold text-transparent text-center select-auto'>
                    {title}
                </div>
                <div className='w-1/2 py-10 flex justify-center'>
                    <hr className='w-3/4 border-t-2 border-gradient-to-r from-red-400 via-orange-400 to-pink-400' />
                </div>
                <div className='flex flex-row justify-center items-center space-x-4'>
                    <a href="https://x.com/Azael_Goat" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://www.tiktok.com/@azael_goat" target="_blank" rel="noopener noreferrer">
                        <img src={tiktokIcon} alt="TikTok Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://www.instagram.com/azael_goat/" target="_blank" rel="noopener noreferrer">
                        <img src={instagarmIcon} alt="Instagram Social Media" className="enlarge uniform-size" />
                    </a>
                    <a href="https://t.me/KittySummoner" target="_blank" rel="noopener noreferrer">
                        <img src={telegarmIcon} alt="Telegram Social Media" className="enlarge uniform-size" />
                    </a>
                </div>
                <div className='text-red-600 font-extrabold py-5'>
                    SOME PAGE IS STILL UNDER WORK, MANY OF THE STUFF NOT ADDED YET
                </div>
            </div>
        </div>
    );
};

export default HomePage;
