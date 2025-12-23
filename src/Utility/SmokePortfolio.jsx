import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Smoke } from "react-smoke";

const SmokeScene = memo(() => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />

    <Smoke
      color="#09fa05"
      opacity={0.5}
      segments={20}
      position={[3, 2, 0]}
      scale={[3, 1, 1]}
      rotation={[0, 100, -0.07]}
      windStrength={[-0.08, -0.03, 0]}
      enableWind={false}
      turbulenceStrength={[0.06, 0.04, 0.02]}
      enableTurbulence={true}
    />
  </>
));

const SmokePortfolio = () => {
  return (
    <div className="absolute inset-0 w-full h-full main-menu">
      {/* BACKGROUND IMAGE LIVES HERE (.main-menu) */}

      {/* SMOKE LAYER */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <SmokeScene />
        </Canvas>
      </div>

      {/* UI CONTENT */}
      <div className="relative z-20">
        {/* your buttons / text / UI */}
      </div>
    </div>
  );
};

export default memo(SmokePortfolio);
