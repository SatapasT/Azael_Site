import React, { useState } from 'react';
import { Items } from '../../constants/item';
import xIcon from '../../assets/images/x_icon.png';
import tiktokIcon from '../../assets/images/tiktok_icon.png';
import instagarmIcon from '../../assets/images/instagram_icon.png';
import telegarmIcon from '../../assets/images/telegarm_icon.png'
import AzaelHeadshotImage from './azael_headshot.png';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex'>
            <div className={`fixed top-0 left-0 w-screen h-screen transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <PhoneMenu />
            </div>
            <button title='Open Menu' onClick={toggleMenu} className="relative group">
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${isOpen ? 'rotate-0' : ''}`}>
                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45 ' : ''}`}></div>
                        <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45' : ''}`}></div>
                    </div>
                </div>
            </button>
        </div>
    );
};

const PhoneMenu: React.FC = () => {
    return (
        <div className='h-full w-full bg-slate-700 opacity-95 m-0 p-0 flex flex-col items-center justify-between py-3 overflow-y-auto'>
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
                <a href='https://www.instagram.com/azael_goat/' target='_blank' rel='noopener noreferrer'>
                    <img src={telegarmIcon} alt='Telegram Social Media' className='enlarge nav-icon' />
                </a>
            </div>
        </div>
    );
};

export default HamburgerMenu;
