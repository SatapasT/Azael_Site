import React, { useState, useEffect } from 'react';
import '../../assets/styles.css';
import xIcon from '../../assets/images/x_icon.webp';
import tiktokIcon from '../../assets/images/tiktok_icon.webp';
import instagarmIcon from '../../assets/images/instagram_icon.webp';
import telegarmIcon from '../../assets/images/telegarm_icon.webp';
import AzaelHeadshotImage from '../../assets/images/azael_headshot.webp';

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
