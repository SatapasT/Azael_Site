import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={'bg-fuchsia-700 text-white p-4'}>
      <h1>Counter: {count}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
