"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS } from "../../api/projects";
import Cover from "../project/cover";
import Hero from "../home/hero";
import Contact from "../home/contact";

export function HomeScreen() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Custom Cursor */}
      <div 
        className={`fixed pointer-events-none z-50 transition-transform duration-150 ${
          isHovered ? 'scale-100' : 'scale-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="w-auto h-8 flex items-center justify-center backdrop-blur-md bg-black/20 rounded-full px-3 py-1">
          <span className={`text-yellow-500 font-extrabold mr-2 uppercase tracking-[0.2rem] text-sm`}>View more </span>
          <span>
          <svg className="stroke-yellow-500 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
          </span>
        </div>
      </div>

      <Hero />
      {PROJECTS.map((project, idx) => (
        <Link 
          key={idx} 
          href={`/projects/${project.slug}`}
          className="block cursor-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Cover {...project} />
        </Link>
      ))}
      <Contact />
    </div>
  );
} 