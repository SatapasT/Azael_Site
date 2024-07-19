import React, { useState, useEffect } from 'react';
import HomePage from './components/home/home_page';
import ArtPage from './components/art/art_page';
import PhotoPage from './components/photo/photo_page';
import FursonaPage from './components/fursona/fursona_page';
import GamingTagPage from './components/gaming_tag/gaming_tag_page';
import NavBar from './components/navbar/navbar';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        const changePage = () => {
            setCurrentPage(window.location.hash.substring(1) || 'home');
        };

        window.addEventListener('hashchange', changePage);
        changePage();
        return () => {
            window.removeEventListener('hashchange', changePage);
        };
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'photo':
                return <PhotoPage />;
            case 'art':
                return <ArtPage />;
            case 'fursona':
                return <FursonaPage />;
            case 'tag':
                return <GamingTagPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow mt-16 overflow-auto">
                {renderPage()}
            </div>
        </div>
    );
};

export default App;
