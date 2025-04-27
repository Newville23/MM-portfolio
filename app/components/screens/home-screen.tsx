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
      <Hero />
      {PROJECTS.map((project, idx) => (
          <Cover key={idx}  {...project} />
      ))}
      <Contact />
    </div>
  );
} 