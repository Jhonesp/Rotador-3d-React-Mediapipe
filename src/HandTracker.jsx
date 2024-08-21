// HandTracker.js
import React, { useEffect, useRef } from 'react';
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

const HandTracker = ({ onHandDetected }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const initHandLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );
      const handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task',
        },
        runningMode: 'VIDEO',
      });

      const video = videoRef.current;

      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          video.srcObject = stream;
          video.play();

          video.onloadedmetadata = () => {
            const detectHands = () => {
              handLandmarker.detectForVideo(video, Date.now()).then((results) => {
                if (results && results.landmarks.length > 0) {
                  const indexFingerTip = results.landmarks[0][8]; // Punta del dedo índice
                  const x = (indexFingerTip.x - 0.5) * 2; // Escalar para que varíe entre -1 y 1
                  const y = -(indexFingerTip.y - 0.5) * 2; // Invertir eje Y y escalar

                  onHandDetected({ x, y });
                }
                requestAnimationFrame(detectHands);
              });
            };
            detectHands();
          };
        } catch (error) {
          console.error('Error accessing the camera', error);
        }
      };

      startCamera();
    };

    initHandLandmarker();
  }, [onHandDetected]);

  return <video ref={videoRef} style={{ display: 'none' }} />;
};

export default HandTracker;
