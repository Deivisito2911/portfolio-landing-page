'use client';

import Image from 'next/image';

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-primary/30 glow-primary">
              <Image
                src="/profile-placeholder.png"
                alt="Deivith Zanella"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Estudiante de Informática en el <span className="text-primary font-semibold">10mo semestre</span> en la Universidad de Oriente (UDO), orientado al desarrollo Frontend con tecnologías modernas como JavaScript, TypeScript y Next.js.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Cuento con experiencia práctica como <span className="text-accent font-semibold">QA Tester manual</span>, utilizando herramientas como Jira y Postman para garantizar la calidad del software. Además, tengo formación en <span className="text-primary font-semibold">Robótica</span> e Arduino.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Destaco en metodologías ágiles, ejecución meticulosa de pruebas y trabajo colaborativo en equipo. Me apasiona resolver problemas complejos de forma analítica y comunicar efectivamente mis hallazgos.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-secondary/50 rounded-lg p-4 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-primary">+3</div>
                <div className="text-sm text-foreground/60">Años Experiencia</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center border border-border hover:border-accent/50 transition-colors">
                <div className="text-2xl font-bold text-accent">+20</div>
                <div className="text-sm text-foreground/60">Proyectos</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center border border-border hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-foreground/60">Dedicación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
