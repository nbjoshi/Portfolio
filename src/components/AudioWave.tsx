import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WaveBar({ index, total }: { index: number; total: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const barWidth = 0.08;
  const barSpacing = 0.12;
  const maxHeight = 1.5;
  const x = (index - total / 2) * barSpacing;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const frequency = 0.5 + (index / total) * 2;
    const amplitude = 0.3 + Math.sin(index * 0.2) * 0.2;
    const height = Math.sin(time * frequency + index * 0.1) * amplitude * maxHeight;
    
    meshRef.current.scale.y = Math.max(0.1, height);
  });

  return (
    <mesh ref={meshRef} position={[x, 0, 0]}>
      <boxGeometry args={[barWidth, 1, 0.05]} />
      <meshStandardMaterial
        color="#1ED760"
        emissive="#1ED760"
        emissiveIntensity={0.3}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function Wave() {
  const numBars = 40;

  return (
    <group>
      {Array.from({ length: numBars }).map((_, i) => (
        <WaveBar key={i} index={i} total={numBars} />
      ))}
    </group>
  );
}

const AudioWave = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <Wave />
      </Canvas>
    </div>
  );
};

export default AudioWave;

