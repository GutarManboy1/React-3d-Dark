import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ball from "./Ball"; // A component that renders a single icon sphere
import { technologies } from "../constants";
import BallCanvas from "./Ball";

const BallCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />

      {technologies.map((tech, i) => (
        <Ball
          key={tech.name}
          icon={tech.icon}
          position={[i % 5 * 2 - 4, -Math.floor(i / 5) * 2 + 2, 0]}
        />
      ))}
    </Canvas>
  );
};

export default BallCanvas;
