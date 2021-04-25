import React,{useState} from 'react';
import Names from './Names';

function App() {
const [name, setName] = useState<string | null>("d")
  
  return (
    <div>

      <Names name={"name"}></Names>
      <button onClick={() => {setName("Dave")}}>Hey</button>
    </div>
  );
}

export default App;
