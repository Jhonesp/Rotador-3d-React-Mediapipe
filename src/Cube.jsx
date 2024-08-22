// src/Cube.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame , useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import meshUrl from '/models/realistic_human_heart/scene.gltf'

const Cube = ({rotation}) => {
  const meshRef = useRef();
  // Cargar el modelo GLTF
  const scene = useLoader(GLTFLoader, meshUrl)

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
  return (
    <>
    <Canvas
      style={{ background: 'black' , height: '50vh'}} // Fondo negro
    >
      <directionalLight
        position={[1.0, 1.0, 6]}
        castShadow
        intensity={Math.PI * 2}
      />
      <Cube rotation={rotation}/>
    </Canvas>
    </>
  );
};

export default Scene;
