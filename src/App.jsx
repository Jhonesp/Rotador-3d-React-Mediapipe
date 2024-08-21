// App.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import HandTracker from './HandTracker';

const App = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleHandDetected = (position) => {
    setRotation(position);
  };

  return (
    <div>
      <h1>MediaPipe + Three.js Hand Rotation</h1>
      <HandTracker onHandDetected={handleHandDetected} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube rotation={rotation} />
      </Canvas>
    </div>
  );
};

export default App;
