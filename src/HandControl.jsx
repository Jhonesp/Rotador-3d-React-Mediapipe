import React, { useState, useRef, useEffect } from 'react';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import Cube from './Cube';

const HandControl = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      if (results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        const xRotation = (landmarks[0].x - 0.5) * 2 * Math.PI;
        const yRotation = (landmarks[0].y - 0.5) * 2 * Math.PI;
        setRotation({ x: yRotation, y: xRotation });
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <Cube rotation={rotation} />
    </div>
  );
};

export default HandControl;
