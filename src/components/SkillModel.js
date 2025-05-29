import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';

export default function SkillModel({ text, position, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <Float 
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
      position={position}
    >
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        {text}
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  );
}