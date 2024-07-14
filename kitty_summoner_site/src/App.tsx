import { useState } from 'react';
import HomeButton from './constants/hotbar_button/homeButton';
import HomePage from './components/home/home_page';

function App() {
  const [page] = useState<string>('home');

  function choosePage() {
    if (page === 'home') {
      return <HomePage />;
    } else {
      return <HomePage />;
    }
  }

  return (
    <div className="container mx-auto bg-red-950">
      <div className="flex h-screen">
        <div className="flex flex-col items-start bg-red-900 w-36 p-4 border-r-8 border-yellow-600">
          <div className="mb-auto items-start">
            <HomeButton />
          </div>
          <div className="mt-auto items-end space-y-4">
            <HomeButton />
            <HomeButton />
            <HomeButton />
          </div>
        </div>
        <div className="flex-grow flex flex-col h-screen bg-slate-900">
          <div className="flex-1 flex justify-center items-center">
            {choosePage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
