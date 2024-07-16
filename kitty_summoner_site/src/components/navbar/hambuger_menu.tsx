import React from 'react';
import { Items } from '../../constants/item';
import xIcon from '../../assets/images/x_icon.png';
import tiktokIcon from '../../assets/images/tiktok_icon.png';
import instagarmIcon from '../../assets/images/instagram_icon.png';
import telegarmIcon from '../../assets/images/telegarm_icon.png';
import AzaelHeadshotImage from './azael_headshot.png';

const HamburgerMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className='absolute inset-0 bg-slate-700 opacity-95 m-0 p-0 flex flex-col h-screen border-4 items-center justify-center overflow-y-auto' onClick={toggleMenu}>
                <div className='flex justify-center w-full py-4'>
                    <a className='block' href='#home'>
                        <img
                            src={AzaelHeadshotImage}
                            width={70}
                            height={70}
                            alt='Home Page Icon'
                            className='enlarge'
                        />
                    </a>
                </div>
                <div className='flex flex-col items-center w-full flex-grow'>
                    {Items.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            className='block text-4xl lg:text-2xl md:text-xl sm:text-lg uppercase text-white font-semibold transition-colors duration-300 px-6 py-6'>
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className='flex flex-row justify-center items-center space-x-4 py-4'>
                    <a href='https://x.com/Azael_Goat' target='_blank' rel='noopener noreferrer'>
                        <img src={xIcon} alt='X Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://www.tiktok.com/@azael_goat' target='_blank' rel='noopener noreferrer'>
                        <img src={tiktokIcon} alt='TikTok Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://www.instagram.com/azael_goat/' target='_blank' rel='noopener noreferrer'>
                        <img src={instagarmIcon} alt='Instagram Social Media' className='enlarge nav-icon' />
                    </a>
                    <a href='https://t.me/KittySummoner' target='_blank' rel='noopener noreferrer'>
                        <img src={telegarmIcon} alt='Telegram Social Media' className='enlarge nav-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
