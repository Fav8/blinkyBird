import './App.css';
import Webcam from "react-webcam"
import { useEffect, useRef } from 'react';
import blinkCapture from './blinkPrediction.js';

function App() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

  const load = async () => {
    console.log(webcamRef);
    await blinkCapture.loadModel()
    await blinkCapture.startPrediciton(webcamRef.current)
  }
  useEffect(() => {
    load()
  }, [webcamRef])

  return (
    <div className="App">
      <header className='App-Header'>
        <Webcam ref={webcamRef}/>
        <canvas ref={canvasRef}/>
      </header>
    </div>
  );
}

export default App;
