import React from 'react';
import './styles.css'
import xIcon from './photo/x_icon.png';

const HomePage = () => {
    return (
        <div className='justify marker:items-center w-fit h-auto flex flex-col'> 
            <div className='relative top-0 py-2 justify-center flex bg-gradient-to-r items-center from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-8xl font-extrabold text-transparent text-center select-auto enlarge animate-glow'> 
                Azael
            </div>
            <div className='relative top-0 justify-center flex bg-gradient-to-r items-center from-red-400 via-orange-400 to-pink-400 bg-clip-text text-1xl font-extrabold text-transparent text-center select-auto'> 
                ' Kitty Summoner  '
            </div>
            <div className='w-full py-10 flex justify-center'>
                <hr className='w-3/4 border-t-2 border-gradient-to-r from-red-400 via-orange-400 to-pink-400' />
            </div>
            <div className='relative top-0 justify-center flex bg-gradient-to-r items-center from-red-400 via-orange-400 to-pink-400 bg-clip-text text-1xl font-extrabold text-transparent text-center select-auto'> 
                <img src={xIcon} alt="X Social Media" className="enlarge w-12" />
            </div>
        </div>
    );
};

export default HomePage;
