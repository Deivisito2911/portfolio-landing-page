'use client';

import { useState, useEffect } from 'react';
import { Code2, Globe, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Desarrollador Web', 'Analista QA', 'Profesor de Robótica'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/20"
    >
      <div className="max-w-4xl mx-auto w-full text-center space-y-8 animate-fade-in">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground">
            Deivith Zanella
          </h1>
          <div className="h-16 sm:h-20 flex items-center justify-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              {titles[titleIndex]}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Aporto calidad, resolución analítica y comunicación efectiva para crear
          soluciones de software escalables.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 glow-primary"
          >
            Ver Proyectos
          </button>
          <a
            href="/Deivith_Cv_2026.pdf"
            download
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Descargar CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-12">
          <a
            href="https://www.linkedin.com/in/deivith-jose-zanella-gonzalez-9368aa21a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-200 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Globe size={28} />
          </a>
          <a
            href="https://github.com/Deivisito2911"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-accent transition-colors duration-200 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Code2 size={28} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <div className="text-foreground/40 text-sm">Desplázate hacia abajo</div>
          <svg
            className="w-6 h-6 mx-auto text-foreground/40 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
