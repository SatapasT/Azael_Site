import { useState } from 'react';
import AzaelHeadshot from './assets/images/Azael_Headshot.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={'flex items-start bg-red-950'}>
      <div className={'flex items-start bg-red-900 h-screen w-28 p-4 border-r-4 border-yellow-600'}>
        <div className={'flex items-start bg-red-900 border-2 border-slate-600'}>
          <img src={AzaelHeadshot} alt="Azael Icon Headshot" />
        </div>     
      </div>      
    </div>
  );
}

export default App;
