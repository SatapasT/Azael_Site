import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={'flex items-start bg-red-950'}>
      <div className={'flex items-start bg-red-900 h-screen w-20 p-4 border-r-4 border-yellow-600'}>
        
    </div>
      <h1>Counter: {count}</h1>
      
    </div>
  );
}

export default App;
