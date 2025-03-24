"use client";
import { LINKS } from "@/data/links";
import LinkButton from "@/components/ LinkButton";
import { GAScript, trackPageView } from "@/components/Analytics";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <GAScript />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,#171717_70%)] opacity-50" />

      {/* Animated Particles Overlay */}
      <div className="absolute inset-0 opacity-20 animate-pulse-slow">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `73.41469348957219%`,
              left: `14.98161790146506%`,
            }}
          />
        ))}
      </div>

      {/* Logo Section */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm space-y-8">
        <div className="group flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <Image
              src="/logo-3d.png"
              alt="Dendriform Logo"
              width={160}
              height={160}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-3xl sm:text-4xl font-light text-white">
              Dendriform
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base">
              Audiovisual Resonance
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-3 w-full">
          {LINKS.map((link) => (
            <LinkButton key={link.url} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
