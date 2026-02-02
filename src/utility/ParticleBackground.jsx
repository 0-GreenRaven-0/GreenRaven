import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 🔒 INIT ONCE — OUTSIDE COMPONENT
let particlesInitialized = false;

const ParticleBackground = () => {
  useEffect(() => {
    if (!particlesInitialized) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      particlesInitialized = true;
    }
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },

    background: {
      color: { value: "transparent" },
    },

    particles: {
      number: {
        value: 200,
        density: { enable: true, area: 2000 },
      },

      shape: {
        type: "image",
        options: {
          image: {
            src: "https://ik.imagekit.io/greenraven/Green%20Raven/green-feather?updatedAt=1766078638320",
            width: 100,
            height: 100,
          },
        },
      },

      opacity: { value: 0.3 },
      size: { value: { min: 10, max: 25 } },

      rotate: {
        value: { min: 0, max: 360 },
        animation: { enable: true, speed: 5 },
      },

      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        random: false,
        straight: false,
        outModes: {
          default: "out",
          bottom: "out",
          top: "none",
        },
      },
    },

    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false }, // 👈 IMPORTANT
      },
    },
  }), []);

  return (
    <Particles
      id="particles-js"
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

// 🧠 THIS IS CRITICAL
export default React.memo(ParticleBackground);
