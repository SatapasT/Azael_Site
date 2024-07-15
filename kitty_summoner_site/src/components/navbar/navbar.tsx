import React from 'react';
import { useLocation } from 'react-router-dom';
import AzaelHeadshotImage from './azael_headshot.png';
import { Items } from '../../constants/item';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="fixed top-0 z-50 bg-red-900 backdrop-blur-sm border-b border-yellow-600 lg:bg-red-900 lg:backdrop-blur-sm">
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
                                className={`block relative poppings text-2xl uppercase text-white transition-colors hover:text-yellow-200 ${
                                    item.onlyMobile ? 'lg:hidden' : ''
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-cs lg:front-semibold ${
                                    item.url === location.hash ? 'z-2 lg:text-white' : 'lg:text-gray-700'
                                }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
