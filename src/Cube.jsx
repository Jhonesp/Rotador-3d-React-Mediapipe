// src/Cube.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Demo from './Demo';

const Cube = ({rotation}) => {
  const meshRef = useRef();
  // Animar el cubo en cada frame

  useEffect(() => {
    if (rotation && rotation.length > 0) {
      const x = rotation[0].x;
      const y = rotation[0].y;
  
      meshRef.current.rotation.x = y * Math.PI * 2;
      meshRef.current.rotation.y = x * Math.PI * 2;
    }
  }, [rotation]);

  // useFrame(() => {
  //   if(rotation && rotation.length > 0){
  //     const x = rotation[0].x;
  //     const y = rotation[0].y;
  //     meshRef.current.rotation.x = y * Math.PI * 2;
  //     meshRef.current.rotation.y = x * Math.PI * 2;
  //   }   
    
  // });

  return (
    <mesh ref={meshRef}>
      {/* Aumenta el tamaño del cubo a 4x4x4 */}
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Scene = ({rotation}) => {
  return (
    <>
    <Canvas
      style={{ background: 'black' , height: '50vh'}} // Fondo negro
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube rotation={rotation}/>
    </Canvas>
    </>
  );
};

export default Scene;
