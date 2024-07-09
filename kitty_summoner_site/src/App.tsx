import { useState } from 'react';
import Homebutton from './constants/hotbar_button/homeButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="md:container md:mx-auto bg-red-950 ">
      <div className="flex h-screen ">
        <div className="bg-red-900 w-32 p-4 border-r-8 border-yellow-600 ">
          <div className="self-end">
            <Homebutton />
          </div>
        </div>
        <div className="flex h-screen w-screen bg-blue-500">
          <div className="flex-1 text-center self-center ">
            hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
