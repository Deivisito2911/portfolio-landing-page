'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Deivith Zanella
            </button>
            <p className="text-foreground/60 text-sm">
              Desarrollador Frontend | QA Tester | Instructor de Robótica
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegación Rápida</h3>
            <ul className="space-y-2">
              {[
                { label: 'Sobre Mí', id: 'about' },
                { label: 'Habilidades', id: 'skills' },
                { label: 'Experiencia', id: 'experience' },
                { label: 'Proyectos', id: 'projects' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/deivith-jose-zanella-gonzalez-9368aa21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Deivisito2911"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>
            &copy; {currentYear} Deivith Zanella. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>usando React, Next.js y Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
