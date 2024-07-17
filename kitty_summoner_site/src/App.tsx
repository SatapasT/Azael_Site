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

  // Set up the event listener for hash changes
  window.addEventListener('hashchange', changePage);

  // Initial call to set the current page based on the initial hash
  changePage();

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('hashchange', changePage);
  };
}, []); // Empty dependency array to run only once on mount


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
    <div className="container mx-auto bg-red-950">
      <NavBar />
        <div className="flex-grow flex flex-col h-screen bg-slate-900">
          <div className="flex-1 flex justify-center items-center">
            {renderPage()}
          </div>
        </div>
      </div>
  );
}

export default App;
