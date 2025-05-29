import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSpheres({ mouse }) {
  const groupRef = useRef();
  
  // Use useMemo to optimize sphere generation
  const spheres = useMemo(() => {
    const count = window.innerWidth < 768 ? 30 : 50; // Reduce count on mobile
    return Array.from({ length: count }, (_, i) => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
      rotationSpeed: Math.random() * 0.02 + 0.01,
      mouseFactor: Math.random() * 0.05 + 0.02,
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6)
    }));
  }, []);

  // Optimize geometry and material by sharing them
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1, 16, 16), []);
  const materials = useMemo(() => 
    spheres.map(sphere => 
      new THREE.MeshStandardMaterial({
        color: sphere.color,
        roughness: 0.5,
        metalness: 0.8,
        transparent: true,
        opacity: 0.6
      })
    ), [spheres]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.children.forEach((sphere, i) => {
      // Optimized animations
      sphere.position.y = spheres[i].position[1] + Math.sin(time * spheres[i].speed) * 2;
      sphere.position.x += (mouse.current[0] * spheres[i].mouseFactor - (sphere.position.x - spheres[i].position[0])) * 0.1;
      sphere.position.z += (mouse.current[1] * spheres[i].mouseFactor - (sphere.position.z - spheres[i].position[2])) * 0.1;
      sphere.rotation.x = time * spheres[i].rotationSpeed;
      sphere.rotation.z = time * spheres[i].rotationSpeed;
    });
  });

  return (
    <group ref={groupRef}>
      {spheres.map((data, i) => (
        <mesh 
          key={i} 
          position={data.position}
          scale={data.scale}
          geometry={sphereGeometry}
          material={materials[i]}
        />
      ))}
    </group>
  );
}

export default function ThreeBackground() {
  const mouse = useRef([0, 0]);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Throttle mouse movement updates
      requestAnimationFrame(() => {
        mouse.current = [
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1
        ];
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: 0 
    }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Optimize for retina displays
        performance={{ min: 0.5 }} // Allow frame rate to drop for better performance
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingSpheres mouse={mouse} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}