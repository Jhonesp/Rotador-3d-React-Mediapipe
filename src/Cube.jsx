// src/Cube.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame , useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import meshUrl from '/models/realistic_human_heart/scene.gltf'

const Cube = ({rotation}) => {
  const meshRef = useRef();
  // Cargar el modelo GLTF
  const scene = useLoader(GLTFLoader, meshUrl)
  // Ref para las rotaciones objetivo
  const targetRotation = useRef({ x: 0, y: 0 });


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
      object={scene.scene} 
      scale={2} 
    />
  );
};

const Scene = ({rotation}) => {
  const handleCreated = ({ gl }) => {
    // Establecer la proporción de píxeles más baja
    gl.setPixelRatio(window.devicePixelRatio * 0.4); // Reducir a la mitad la densidad de píxeles
    gl.setSize(window.innerWidth, window.innerHeight); // Establecer tamaño del canvas
  };
  return (
    <>
    <Canvas
      style={{ background: 'black' , height: '100vh'}} // Fondo negro
      onCreated={handleCreated}
    >
      <directionalLight
        position={[1.0, 1.0, 5]}
        intensity={Math.PI * 2}
      />
      <Cube rotation={rotation}/>
    </Canvas>
    </>
  );
};

export default Scene;
