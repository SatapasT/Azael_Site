import React from 'react';
import AzaelHeadshotImage from './azael_headshot.png';
import './styles.css';

const Homebutton = () => {
    return (
        <button>
            <img src={AzaelHeadshotImage} alt="Azael Icon Headshot" className="hotbar-image" />
        </button>
    );
};

export default Homebutton;
