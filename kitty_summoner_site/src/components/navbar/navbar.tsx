import React from 'react';
import { useLocation } from 'react-router-dom';
import AzaelHeadshotImage from './azael_headshot.png';
import { Items } from '../../constants/item';
import xIcon from '../../assets/images/x_icon.png';
import tiktokIcon from '../../assets/images/tiktok_icon.png';
import instagarmIcon from '../../assets/images/instagram_icon.png';
import telegarmIcon from '../../assets/images/telegarm_icon.png'
import './styles.css'

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-orange-600 backdrop-blur-sm border-t border-red-600 border-8 lg:bg-orange-600 lg:backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#home">
                    <img
                        src={AzaelHeadshotImage}
                        width={70}
                        height={70}
                        alt="Home Page Icon"
                    />
                </a>
                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-red-900 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {Items.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block relative poppings text-2xl uppercase text-white transition-colors ${item.onlyMobile ? 'lg:hidden' : ''
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-cs lg:front-semibold ${item.url === location.hash ? 'z-2 lg:text-white' : 'lg:text-slate-700'
                                    } lg:leading-5 lg:hover:text-white xl:padding-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
                <div className='hidden lg:flex relative top-0 flex-row justify-center flex bg-gradient-to-r items-center space-x-4'>
                    <a href="https://x.com/Azael_Goat" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X Social Media" className="enlarge nav-icon" />
                    </a>
                    <a href="https://www.tiktok.com/@azael_goat" target="_blank" rel="noopener noreferrer">
                        <img src={tiktokIcon} alt="TikTok Social Media" className="enlarge nav-icon" />
                    </a>
                    <a href="https://www.instagram.com/azael_goat/" target="_blank" rel="noopener noreferrer">
                        <img src={instagarmIcon} alt="TikTok Social Media" className="enlarge nav-icon" />
                    </a>
                    <a href="https://www.instagram.com/azael_goat/" target="_blank" rel="noopener noreferrer">
                        <img src={telegarmIcon} alt="TikTok Social Media" className="enlarge nav-icon" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
