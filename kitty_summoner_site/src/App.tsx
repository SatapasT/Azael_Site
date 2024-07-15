import { useState } from 'react';
import HomePage from './components/home/home_page';
import NavBar from './components/navbar/navbar';

function App() {
  const [page] = useState<string>('home')[0];

  function choosePage() {
    if (page === 'home') {
      return <HomePage />;
    } else {
      return <HomePage />;
    }
  }

  return (
    <div className="container mx-auto bg-red-950">
      <NavBar />
      <div className="flex flex-col-reverse lg:flex-row h-screen">
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
