'use client';

import { Mail, Phone, Globe, Code2 } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ZDEIVITH@GMAIL.COM',
      href: 'mailto:ZDEIVITH@GMAIL.COM',
      color: 'from-primary to-primary/50',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '(+58) 4129672251',
      href: 'tel:+584129672251',
      color: 'from-accent to-accent/50',
    },
    {
      icon: Globe,
      label: 'LinkedIn',
      value: 'Deivith Zanella',
      href: 'https://www.linkedin.com/in/deivith-jose-zanella-gonzalez-9368aa21a/',
      color: 'from-primary to-accent',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'Deivisito2911',
      href: 'https://github.com/Deivisito2911',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/70">
            ¿Tienes un proyecto o pregunta? Me encantaría escucharte.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal =
              contact.href.startsWith('http') ||
              contact.href.startsWith('mailto:');

            return (
              <a
                key={index}
                href={contact.href}
                target={
                  contact.href.startsWith('http') ? '_blank' : undefined
                }
                rel={
                  contact.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group bg-secondary/40 border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`inline-block p-4 rounded-lg mb-4 bg-gradient-to-br ${contact.color}`}
                >
                  <Icon className="w-6 h-6 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {contact.label}
                </h3>
                <p className="text-foreground/80 font-semibold break-all">
                  {contact.value}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Contactar</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7m0 0l-7 7m7-7H5"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Message */}
        <div className="mt-16 text-center bg-secondary/50 border border-border rounded-xl p-8">
          <p className="text-foreground/80 mb-4">
            <span className="text-primary font-semibold">Disponible</span> para
            trabajar en proyectos de desarrollo web, testing y consultoría en
            robótica.
          </p>
          <p className="text-foreground/60 text-sm">
            Respondo correos en 24 horas. ¡Espero tu mensaje!
          </p>
        </div>
      </div>
    </section>
  );
}
