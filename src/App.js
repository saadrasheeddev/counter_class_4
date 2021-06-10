import { useState } from 'react';
import './App.css';
import Zikr from "./Zikr.js";

function App() {
  let [count, setCount] = useState(0);
  let [isFarewell, setPic] = useState(false);
  return (
    <div className="App">
      <div className={`App ${isFarewell ? 'farewell' : 'whalequence'}`}>
        <h2>Picture: {isFarewell ? 'Farewell' : 'WhaleQuence'}</h2>
        <hr></hr>
        <Zikr count = {count}></Zikr>
        <br></br>
        <button onClick={() => setCount(count + 1)}>
          Update Counter 
        </button>
        <button onClick={() => setPic(!isFarewell)}>
          Change Picture
        </button>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <img className="img-property" src={`${isFarewell ? 'farewell.jpg' : 'whalequence.jpg'}`}></img>
      </div>
    </div>
  );
}

export default App;
