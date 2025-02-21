"use client";

import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

const VoiceBlob = () => {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
    </div>
  );
};

export default VoiceBlob;
