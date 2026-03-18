"use client";
import MediaFeed from "@/components/MediaFeed";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { useState, useEffect, useId, useCallback, useRef } from "react";

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: { x: number; y: number };
}

const PARTICLE_COLORS = ["#3B82F6", "#10B981", "#6366F1", "#8B5CF6"];
const PARTICLE_COUNT = 110;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);
  const componentId = useId();
  const rafRef = useRef<number>(null);

  // Persist dark mode
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setIsDarkMode(stored === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("darkMode", String(next));
      sendGAEvent("event", "dark_mode_toggle", {
        mode: next ? "dark" : "light",
      });
      return next;
    });
  };

  const animateParticles = useCallback(() => {
    setParticles((prev) =>
      prev.map((p) => ({
        ...p,
        x: (p.x + p.speed.x + window.innerWidth) % window.innerWidth,
        y: (p.y + p.speed.y + window.innerHeight) % window.innerHeight,
      })),
    );
    rafRef.current = requestAnimationFrame(animateParticles);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: `${componentId}-particle-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      color:
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      speed: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
    }));
    setParticles(newParticles);

    rafRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [componentId, animateParticles]);

  return (
    <div
      className={`min-h-screen w-screen overflow-hidden ${isDarkMode ? "bg-[#121726]" : "bg-[#f5f7fa]"}`}
    >
      <Analytics />
      <SpeedInsights />

      {/* Particle Background */}
      <div className="particle-container fixed inset-0 z-0 bg-blue-500/90">
        <div className="relative h-full w-full">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="animate-particle-drift animate-particle-pulse"
              style={{
                position: "absolute",
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-4 left-4 rounded-full font-medium transition-all duration-300 z-[9999]
          ${isDarkMode ? "hover:bg-[#93c5fd]" : "bg-[#374151] hover:bg-[#93c5fd] text-white"}`}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Main Content */}
      <div className="flex justify-center w-full">
        <div
          className={`relative z-10 w-full overflow-x-hidden max-w-md ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"} rounded-2xl shadow-2xl border border-gray-600/10 p-4`}
        >
          <div className="relative z-10 w-full flex flex-col items-center top-8">
            <div className="relative w-48 h-48 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-green-500/50 blur-2xl transition-opacity" />
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full" />
              <Image
                src="/logo-3d.png"
                alt="Dendriform Logo"
                width={224}
                height={224}
                className="w-full h-full object-contain logo-glow animate-float"
                priority
                style={{
                  filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.3))",
                }}
              />
            </div>

            <div className="flex justify-center">
              <div className="text-center space-y- w-full max-w-[calc(100vw-32px)]">
                <h1
                  className={`text-3xl font-bold mb-2 transition-colors ${isDarkMode ? "text-[#e0f7fa]" : "text-white"}`}
                >
                  Dendriform
                </h1>
                <p
                  className={`text-lg transition-colors ${isDarkMode ? "text-[#e0f7fa]" : "text-white"}`}
                >
                  Audiovisual Resonance
                </p>
                <div className="flex flex-col items-center space-y-4 pt-4 w-full ml-4 inline-block px-6 py-3 rounded-lg font-medium transition-all">
                  <MediaFeed isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
            <ContactSection isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
