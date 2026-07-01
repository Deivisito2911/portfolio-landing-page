'use client';

import {
  Code2,
  Cpu,
  CheckCircle,
  Users,
  Zap,
  Lightbulb,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Web',
      icon: Code2,
      skills: [
        'Lógica de Programación',
        'Desarrollo Web',
        'Patrones de Diseño',
      ],
      color: 'from-primary to-primary/50',
    },
    {
      title: 'QA & Testing',
      icon: CheckCircle,
      skills: ['Ejecución de Pruebas', 'Postman', 'Jira'],
      color: 'from-accent to-accent/50',
    },
    {
      title: 'Hardware & Robótica',
      icon: Cpu,
      skills: [
        'Electricidad y Electrónica Básica',
        'Arduino',
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Trabajo Bajo Presión',
        'Resolución Analítica',
        'Comunicación Efectiva',
      ],
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-secondary/40 border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 text-foreground/80 group/item cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <span className="group-hover/item:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-6 pt-6 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Lightbulb className="w-5 h-5 text-accent/50" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Icons (optional decorative section) */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-foreground/60 mb-8 text-sm uppercase tracking-widest">
            Stack Tecnológico
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Tailwind CSS',
              'Git',
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
