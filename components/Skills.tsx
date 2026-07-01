'use client';

import {
  Code2,
  Cpu,
  CheckCircle,
  Users,
  Zap,
  Lightbulb,
  GitBranch,
  Layers,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      icon: Code2,
      color: 'text-primary',
      skills: [
        'Lógica de Programación',
        'Desarrollo Web',
        'Patrones de Diseño',
        'JavaScript/TypeScript',
        'React & Next.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'QA & Testing',
      icon: CheckCircle,
      color: 'text-accent',
      skills: [
        'Ejecución de Pruebas',
        'Postman',
        'Jira',
        'Casos de Prueba',
        'Reporte de Defectos',
        'Testing Manual',
      ],
    },
    {
      title: 'Hardware & Robótica',
      icon: Cpu,
      color: 'text-primary',
      skills: [
        'Arduino',
        'Electrónica Básica',
        'Programación de Microcontroladores',
        'Proyectos STEM',
        'Lógica Digital',
        'Sensores & Actuadores',
      ],
    },
    {
      title: 'Metodologías & Principios',
      icon: Layers,
      color: 'text-accent',
      skills: [
        'Metodologías Ágiles (Scrum/Kanban)',
        'Principios SOLID',
        'Clean Code',
        'Git & Versionado',
        'Arquitectura de Software',
        'Colaboración en Equipo',
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'text-primary',
      skills: [
        'Comunicación Efectiva',
        'Resolución Analítica',
        'Trabajo Bajo Presión',
        'Pensamiento Crítico',
        'Liderazgo',
        'Adaptabilidad',
      ],
    },
    {
      title: 'Herramientas & Tecnologías',
      icon: Zap,
      color: 'text-accent',
      skills: [
        'VS Code',
        'Git & GitHub',
        'Vercel',
        'Figma',
        'Chrome DevTools',
        'Cloudinary',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-secondary/50 border border-border group-hover:border-primary/50 transition-colors ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills as Pills/Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-border bg-secondary/30 text-foreground/80 hover:border-primary/50 hover:bg-secondary/50 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Highlight */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-foreground/60 mb-8 text-sm uppercase tracking-widest">
            Stack Principal
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'JavaScript', icon: '⚡' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Git', icon: '📦' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-xs font-medium text-foreground/70 group-hover:text-primary transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
