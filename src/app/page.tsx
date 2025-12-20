"use client";
import MediaFeed from "@/components/MediaFeed";
import { GAScript, AnalyticsPageViews } from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { useState, useEffect, useId, useCallback } from "react";

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: {
    x: number;
    y: number;
  };
}

export default function Home() {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Particle configuration
  const [particles, setParticles] = useState<Particle[]>([]);
  const componentId = useId();

  // Create dynamic particle movement
  const animateParticles = useCallback(() => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => ({
        ...particle,
        x: particle.x + particle.speed.x,
        y: particle.y + particle.speed.y,
        // Wrap around screen
        ...(typeof window !== "undefined" && {
          x:
            (particle.x + particle.speed.x + window.innerWidth) %
            window.innerWidth,
          y:
            (particle.y + particle.speed.y + window.innerHeight) %
            window.innerHeight,
        }),
      })),
    );
  }, []);

  // Create particle effect
  useEffect(() => {
    const createParticles = () => {
      const particleCount = 110;
      const particleColors = [
        "#3B82F6", // Blue
        "#10B981", // Emerald
        "#6366F1", // Indigo
        "#8B5CF6", // Purple
      ];
      const newParticles = Array.from(
        { length: particleCount },
        (_, index) => ({
          id: `${componentId}-particle-${index}`,
          x:
            typeof window !== "undefined"
              ? Math.random() * window.innerWidth
              : 0,
          y:
            typeof window !== "undefined"
              ? Math.random() * window.innerHeight
              : 0,
          size: Math.random() * 3 + 1,
          color:
            particleColors[Math.floor(Math.random() * particleColors.length)],
          speed: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          },
        }),
      );
      setParticles(newParticles);
    };

    if (typeof window !== "undefined") {
      createParticles();

      // Set up animation interval
      const animationFrame = setInterval(animateParticles, 50);

      // Cleanup
      return () => clearInterval(animationFrame);
    }
  }, [componentId, animateParticles]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Dark mode toggled:", !isDarkMode); // Verify logging
  };

  return (
    <div
      className={`min-h-screen w-screen overflow-hidden ${isDarkMode ? "bg-[#121726]" : "bg-[#f5f7fa]"}`}
    >
      <GAScript />
      <AnalyticsPageViews />
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
        className={`fixed top-[16px] left-[16px] rounded-full font-medium transition-all duration-300 z-[9999]
          ${
            isDarkMode
              ? "hover:bg-[#93c5fd]"
              : "bg-[#374151] hover:bg-[#93c5fd] text-[#ffffff]"
          }`}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {/* Main Content Container */}
      <div className="flex justify-center w-full">
        <div
          className={`relative z-10 w-full overflow-x-hidden max-w-md ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"}  rounded-2xl shadow-2xl border border-gray-600/10 p-[1rem]`}
        >
          {/* Logo and Content Section */}
          <div className="relative z-10 w-full flex flex-col items-center top-[32px]">
            <div className="relative w-48 h-48 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-green-500/50 blur-2xl  group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full" />
              <Image
                src="/logo-3d.png"
                alt="Dendriform Logo"
                width={224}
                height={224}
                className="w-full h-full object-contain logo-glow logo-glow:hover animate-float"
                priority
                style={{
                  filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.3))",
                }}
              />
            </div>
            {/* center div */}
            <div className="flex justify-center">
              <div className="text-center space-y- w-full max-w-[calc(100vw-32px)]">
                <h1
                  className={`text-3xl font-bold mb-2 transition-colors
              ${isDarkMode ? "text-[#e0f7fa]" : "text-white"}`}
                >
                  Dendriform
                </h1>
                <p
                  className={`text-lg transition-colors
              ${isDarkMode ? "text-[#e0f7fa]" : "text-white"}`}
                >
                  Audiovisual Resonance
                </p>

                {/* Media */}
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
