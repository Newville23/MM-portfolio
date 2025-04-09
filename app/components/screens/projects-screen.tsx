"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "app/api/projects";
import { heatherFont } from "app/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "motion/react";
import { useNavTheme } from "app/providers/navTheme";
import Container from "../container";


const BANNER_DATA = {
  title: "Projects",
  subtitle: "A collection of my selected works",
  media: { url: "/projects/recetario-cover.jpg" }
};

// Pre-calculate categories once using a more compatible approach
const CATEGORIES = ["all", ...Object.keys(PROJECTS.reduce((acc, project) => {
  acc[project.category] = true;
  return acc;
}, {} as Record<string, boolean>))];

export function ProjectsScreen() {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      setNavTheme("light");
    }
  }, [isInView]);
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <div ref={ref} className="min-h-screen bg-black text-white pb-12">
      {/* Hero Banner Section */}
      <section className="relative h-full bg-black">
        <Container>
        <div className="absolute inset-0">
          <Image 
            fill 
            src={BANNER_DATA.media.url} 
            alt="Projects banner" 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-30 pt-32 md:pt-64  text-amber-400">
          <div className="max-w-3xl">
            <h1 className={`title text-5xl md:text-8xl mb-4 uppercase font-bold ${heatherFont.className}`}>
              {BANNER_DATA.title}
            </h1>
            <p className="text-md uppercase tracking-widest mb-3">
              {BANNER_DATA.subtitle}
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="relative z-30 py-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`} 
                className="group block"
              >
                <div className="overflow-hidden rounded-lg aspect-[16/9] relative transition-transform duration-300 group-hover:scale-[1.05] group-hover:translate-z-0 group-hover:translate3d">
                  <Image
                    src={project.image.media[0].url}
                    alt={project.name}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 border-3 border-transparent group-hover:border-yellow-500 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-bold mt-2">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.agency}</p>
              </Link>
            ))}
          </div>
        </div>
        </Container>
      </section>
    </div>
  );
} 