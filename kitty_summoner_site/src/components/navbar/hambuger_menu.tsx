import React from 'react';
import { Items } from '../../constants/item';

const HamburgerMenu: React.FC = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-slate-700 opacity-80 m-0 p-0 items-center text-center flex-col py-3'>
            {Items.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block relative text-4xl uppercase text-white front-semibold transition-color
                                px-6 py-6 `}>
                                {item.title}
                            </a>
                        ))}
        </div>
    );
};

export default HamburgerMenu;
