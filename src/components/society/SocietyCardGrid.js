"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SocietyCardGrid({ societies }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;
    let x = 0;

    const animate = () => {
      x -= 0.5; // speed of scroll
      if (container) {
        container.style.transform = `translateX(${x}px)`;
        if (Math.abs(x) >= container.scrollWidth / 2) {
          x = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [societies]); // rerun when city changes

  return (
    <div className="overflow-hidden w-full relative py-6">
      <div
        ref={containerRef}
        className="flex gap-4 w-max"
        style={{ willChange: "transform" }}
      >
        {[...societies, ...societies].map((society, index) => (
          <div
            key={index}
            className="relative min-w-[280px] max-w-[280px] h-[300px] rounded-2xl overflow-hidden shadow-md bg-gray-100"
          >
            <Image
              src={society.image}
              alt={society.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 p-4 text-white bg-gradient-to-br from-black/60 via-black/30 to-transparent">
              <h3 className="text-xl font-bold">{society.name}</h3>
              <p className="text-sm">{society.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
