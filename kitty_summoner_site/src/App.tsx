import { useState } from 'react';
import HomePage from './components/home/home_page';
import NavBar from './components/navbar/navbar';

function App() {

  return (
    <div className="container mx-auto bg-red-950">
      <NavBar />
        <div className="flex-grow flex flex-col h-screen bg-slate-900">
          <div className="flex-1 flex justify-center items-center">
            <HomePage />
          </div>
        </div>
      </div>
  );
}

export default App;
