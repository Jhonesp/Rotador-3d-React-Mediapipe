// Cube.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = ({ rotation }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation.y * Math.PI; // Rotación en X
      meshRef.current.rotation.y = rotation.x * Math.PI; // Rotación en Y
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default Cube;
