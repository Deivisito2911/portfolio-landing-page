'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Sistema Web de Donación de Insumos Médicos',
      description:
        'Plataforma integral de tesis de grado para gestión y distribución de donaciones de insumos médicos. Sistema full-stack con autenticación, gestión de usuarios y reportes.',
      link: 'https://sistema-donaciones-six.vercel.app/',
      image: '/projects/donation-system.png',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Colegio Mariano Picón Salas',
      description:
        'Sitio web institucional del colegio con información de programas, galería de eventos, portal de estudiantes y sistema de comunicación.',
      link: 'https://www.mapis.com.ve/',
      image: '/projects/mapis.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion','Cloudinary'],
    },
    {
      title: 'Agua y Vacío',
      description:
        'Diseño y desarrollo web para cliente de arte contemporáneo. Portafolio interactivo con galería de obras, información del artista y sistema de contacto.',
      link: 'https://v0-agua-y-vacio-website.vercel.app/',
      image: '/projects/agua-y-vacio.png',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/40 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    Ver Proyecto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button Mobile */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all w-full justify-center mt-4 border border-primary/20"
                >
                  Ver Proyecto
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Notice */}
        <div className="text-center pt-16">
          <p className="text-foreground/60 mb-4">
            ¿Más proyectos? Visita mi{' '}
            <a
              href="https://github.com/Deivisito2911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
