import './App.css';
import Webcam from "react-webcam"
import { useEffect, useRef } from 'react';
import blinkCapture from './blinkPrediction.js';

function App() {

  const webcamRef = useRef(null);
/*   const bird = useRef(null);
  const hole = useRef(null);
  const obstacle = useRef(null); */

  const load = async () => {
    await blinkCapture.loadModel()
    setInterval(async () => {
      await blinkCapture.startPrediciton(webcamRef.current.video)
    }, 500);
  }
  useEffect(() => {
    load()
    /* let rnd = Math.random() * 300 */
  }, [webcamRef])

  return (
    <div className="App">
      <header className='App-Header'>
      </header>
        <div id="gameContainer">
        <div id="game">
{/*           <div ref={hole}></div>
          <div ref={obstacle}></div>
          <div ref={bird}></div> */}
        </div>
        <Webcam ref={webcamRef} />
    </div>
    </div>
  );
}

export default App;
