// src/Cube.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame , useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Cube = ({rotation}) => {
  const meshRef = useRef();
  // Animar el cubo en cada frame
  const scene = useLoader(GLTFLoader, '/realistic_human_heart/scene.gltf')
  // Cargar el modelo GLTF

  useEffect(() => {
    if (rotation && rotation.length > 0) {
      const x = rotation[0].x;
      const y = rotation[0].y;
  
      meshRef.current.rotation.x = y * Math.PI * 2;
      meshRef.current.rotation.y = x * Math.PI * -2;
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
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={0.5} 
    />
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
