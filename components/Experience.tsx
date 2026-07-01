'use client';

import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      position: 'Instructor de Robótica, Mecatrónica y STEM',
      company: 'Colegio Mariano Picón Salas "MAPIS"',
      duration: 'Ene 2025 - Actualidad',
      description:
        'Diseño y ejecución de clases de robótica, programación de microcontroladores y proyectos STEM para estudiantes de diversas edades.',
      highlights: [
        'Enseñanza de Arduino y electrónica básica',
        'Desarrollo de proyectos colaborativos',
        'Mentoría en pensamiento computacional',
      ],
    },
    {
      position: 'Analista QA',
      company: 'Sky Airline',
      duration: 'Ene 2024 - Ene 2025',
      description:
        'Realización de pruebas manuales exhaustivas en aplicaciones web y móviles, identificación de defectos y validación de funcionalidades.',
      highlights: [
        'Testing en plataformas de reservas',
        'Uso de Jira y Postman',
        'Documentación detallada de casos de prueba',
      ],
    },
    {
      position: 'Auxiliar de Soporte Técnico y Programador',
      company: 'CCCT VEN911 Nueva Esparta',
      duration: 'Feb 2021 - Dic 2022 y Oct 2024 - Ene 2026',
      description:
        'Soporte técnico a usuarios, desarrollo de aplicaciones internas y mantenimiento de sistemas de emergencia.',
      highlights: [
        'Desarrollo de soluciones web personalizadas',
        'Atención al usuario y resolución de problemas',
        'Integración de sistemas',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experiencia Laboral
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isCenter = index % 3 === 1;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-8 items-center ${
                    isCenter
                      ? 'md:grid-cols-1 md:max-w-2xl md:mx-auto'
                      : 'md:grid-cols-[1fr_auto_1fr]'
                  }`}
                >
                  {/* Left Content (for first and third) */}
                  {isLeft && !isCenter && (
                    <div className="md:text-right md:pr-12">
                      <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-primary font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center justify-end gap-2 text-foreground/60 mb-4">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <p className="text-foreground/80 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-foreground/70 flex items-center justify-end gap-2"
                            >
                              <span>•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Center Content (for Sky Airline) */}
                  {isCenter && (
                    <div>
                      <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 w-full">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-accent font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-foreground/60 mb-4">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <p className="text-foreground/80 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-foreground/70 flex items-center gap-2"
                            >
                              <span>•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Timeline Dot */}
                  {!isCenter && (
                    <div className="hidden md:flex justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50 z-10"></div>
                    </div>
                  )}

                  {/* Right Content (empty for left items) */}
                  {!isLeft && !isCenter && (
                    <div className="md:pl-12">
                      <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-accent font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-foreground/60 mb-4">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <p className="text-foreground/80 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-foreground/70 flex items-center gap-2"
                            >
                              <span>•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Mobile Timeline Dot */}
                  {isLeft && (
                    <div className="md:hidden flex justify-start ml-6 -mt-4">
                      <div className="w-3 h-3 bg-primary rounded-full border-3 border-background shadow-lg shadow-primary/50"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
