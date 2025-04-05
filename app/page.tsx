"use client";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import Cover from "./components/project/cover";
import {PROJECTS} from "./api/projects"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page({sectionRefs}:{sectionRefs: any}) {
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
        className={`fixed pointer-events-none z-50 transition-transform duration-300 ${
          isHovered ? 'scale-100' : 'scale-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="w-32 h-32 flex items-center justify-center">
          <span className="text-yellow-500 font-bold tracking-wider text-xl underline underline-offset-8">View more </span>
        </div>
      </div>

      <Hero />
      {PROJECTS.map((project, idx) => (
        <Link 
          key={idx} 
          href={`/projects/${project.slug}`}
          className="block"
        >
          <Cover 
            {...project} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>
      ))}
      <Contact />
    </div>
  );
}
