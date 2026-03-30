import './App.css'
import Board from './components/Board.tsx';
import { useState } from 'react';
import { initialData } from './data.ts';
import type { Data } from "./types.ts";

function App() {
    const [data, setData] = useState<Data>(initialData); 
  return (
    <div className='App'>
        <Board data={data} setData={setData} />
    </div>
  )
}

export default App
