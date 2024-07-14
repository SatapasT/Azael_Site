import { useState } from 'react';
import HomeButton from './constants/hotbar_button/homeButton';
import HomePage from './components/home/home_page';

function App() {
  const [page] = useState<string>('home');

function choosePage () {
  if (page === 'home') {
    return <HomePage />;
  }
  else {
    return <HomePage />;
  }
    
}
  return (
    <div className="md:container md:mx-auto bg-red-950 ">
      <div className="flex h-screen ">
        <div className="flex flex-col items-start bg-red-900 w-36 p-4 border-r-8 border-yellow-600 ">
          <div className="mb-auto items-start ">
            <HomeButton />
          </div>
          <div className="mb-auto items-end ">
            <HomeButton />
            <HomeButton />
            <HomeButton />
          </div>
        </div>
        <div className="flex flex-grow flex-col h-screen w-screen bg-slate-900">
          <div className="flex-1 text-center self-center ">
            {choosePage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
