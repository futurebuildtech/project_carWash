"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Safety check: only run if the function exists
    if (typeof initParticlesEngine === "function") {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      }).catch((err) => {
        console.error("Particles failed to load:", err);
      });
    }
  }, []);

  const options: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#3b82f6" },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Particles
        id="tsparticles"
        options={options}
      />
    </div>
  );
};
