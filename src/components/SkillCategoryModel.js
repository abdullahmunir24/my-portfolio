import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Text3D, Float } from '@react-three/drei';

export default function SkillCategoryModel({ text, color, mouse }) {
  const meshRef = useRef();
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    config: { mass: 1, tension: 180, friction: 12 }
  }));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    api.start({
      rotation: [
        mouse.current[1] / 5,
        mouse.current[0] / 5,
        Math.sin(time / 4) / 8
      ],
      position: [
        mouse.current[0] / 10,
        mouse.current[1] / 10,
        Math.sin(time / 2) / 4
      ]
    });
  });

  return (
    <Float 
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <animated.group
        ref={meshRef}
        rotation={springs.rotation}
        position={springs.position}
      >
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshPhongMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            shininess={100}
          />
        </Text3D>
      </animated.group>
    </Float>
  );
}