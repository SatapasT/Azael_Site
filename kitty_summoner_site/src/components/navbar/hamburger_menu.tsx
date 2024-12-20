import React from 'react';
import { PageItems } from '../../constants/page_item';
import xIcon from '../../assets/images/x_icon.webp';
import tiktokIcon from '../../assets/images/tiktok_icon.webp';
import instagarmIcon from '../../assets/images/instagram_icon.webp';
import AzaelHeadshotImage from '../../assets/images/azael_headshot.webp';
import TwitchIcon from '../../assets/images/twitch_icon.webp'; 
import YoutubeIcon from '../../assets/images/youtube_icon.webp'
import telegarmIcon from '../../assets/images/telegarm_icon.webp';


type HamburgerMenuProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className='absolute inset-0 bg-slate-900 opacity-95 m-0 p-0 flex flex-col h-screen border-4 items-center justify-center overflow-y-auto' onClick={toggleMenu}>
                <div className='flex justify-center w-full py-4'>
                    <a className='block' href='#home'>
                        <img
                            loading='lazy'
                            src={AzaelHeadshotImage}
                            width={70}
                            height={70}
                            alt='Home Page Icon'
                            className='enlarge'
                        />
                    </a>
                </div>
                <div className='flex flex-col items-center w-full flex-grow'>
                    {PageItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className='block text-4xl lg:text-2xl md:text-xl sm:text-lg uppercase text-white font-semibold transition-colors duration-300 px-6 py-6'>
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className='flex flex-row justify-center items-center space-x-4 py-16'>
                    <a href="https://www.twitch.tv/azaelgoat" target="_blank" rel="noopener noreferrer">
                        <img src={TwitchIcon} alt="Telegram Social Media" className="enlarge nav-icon" />
                    </a>
                    <a href='https://x.com/Azael_Goat' target='_blank' rel='noopener noreferrer'>
                        <img loading='lazy' src={xIcon} alt='X Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://www.tiktok.com/@azael_goat' target='_blank' rel='noopener noreferrer'>
                        <img loading='lazy' src={tiktokIcon} alt='TikTok Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://www.instagram.com/azael_goat/' target='_blank' rel='noopener noreferrer'>
                        <img loading='lazy' src={instagarmIcon} alt='Instagram Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://www.youtube.com/@AzaelGoat' target='_blank' rel='noopener noreferrer'>
                        <img loading='lazy' src={YoutubeIcon} alt='Telegram Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href="https://t.me/KittySummoner" target="_blank" rel="noopener noreferrer">
                        <img src={telegarmIcon} alt="Telegram Social Media" className="enlarge nav-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
