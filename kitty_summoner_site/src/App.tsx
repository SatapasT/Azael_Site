import React from 'react';
import { useState,useEffect } from 'react';

import HomePage from './components/home/home_page';
import ArtPage from './components/art/art_page';
import PhotoPage from './components/photo/photo_page';
import FursonaPage from './components/fursona/fursona_page';
import GamingTagPage from './components/gaming_tag/gaming_tag_page';

import NavBar from './components/navbar/navbar';

function App() {

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
        return <HomePage />
    }
  };

  return (
    <div className="container mx-auto">
      <NavBar />
        <div className="flex-grow flex flex-col h-screen">
          <div className="flex-1 flex justify-center items-center">
            {renderPage()}
          </div>
        </div>
      </div>
  );
}

export default App;
