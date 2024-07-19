import React, { useState, useEffect } from 'react';
import HomePage from './components/home/home_page';
import ArtPage from './components/art/art_page';
import PhotoPage from './components/photo/photo_page';
import FursonaPage from './components/fursona/fursona_page';
import GamingTagPage from './components/gaming_tag/gaming_tag_page';
import NavBar from './components/navbar/navbar';
import { Helmet } from "react-helmet";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

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
            <Helmet>
                <title>Azael Goat</title>
                <meta property="og:title" content="Azael" />
                <meta property="og:description" content="Azael the Demon Goat Website" />
                <meta property="og:image" content='https://drive.google.com/thumbnail?id=1_yHyU7WNKH2KD36yOi0JbLVRkrv9mv4t&sz=w1000' />
                <meta property="og:url" content="https://azael.net" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Azael" />
                <meta name="twitter:description" content="Azael the Demon Goat Website" />
                <meta name="twitter:image" content='https://drive.google.com/thumbnail?id=1_yHyU7WNKH2KD36yOi0JbLVRkrv9mv4t&sz=w1000' />
            </Helmet>
            <NavBar />
            <div className="flex-grow mt-16 overflow-auto">
                <TransitionGroup>
                    <CSSTransition
                        key={currentPage}
                        timeout={300}
                        classNames="fade"
                    >
                        <div className="page">{renderPage()}</div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default App;
