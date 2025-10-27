'use client';

import { useState } from 'react';

const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      title: 'Miguel Ángel Quiroga',
      subtitle: 'Senior Full Stack Developer',
      description: 'Especialista en Python, PHP, .NET, JavaScript y Swift',
      location: 'Cartagena, España'
    },
    about: {
      title: 'Sobre mí',
      description: 'Con más de 10 años de experiencia en desarrollo de software, he trabajado con empresas líderes creando soluciones innovadoras y escalables.',
      experience: 'Años de experiencia',
      clients: 'Clientes destacados',
      technologies: 'Tecnologías dominadas'
    },
    projects: {
      title: 'Proyectos destacados',
      subtitle: 'Soluciones tecnológicas para empresas líderes del mercado',
      intranet: {
        title: 'Intranet El Corte Inglés',
        description: 'Sistema interno de gestión empresarial para una de las mayores corporaciones de España'
      },
      vetoclock: {
        title: 'VetoClock Iberia',
        description: 'Plataforma integral de gestión veterinaria con telemedicina, gestión de citas y historiales clínicos'
      },
      crown: {
        title: 'Crown Sport Nutrition',
        description: 'E-commerce especializado en nutrición deportiva con miles de usuarios activos'
      }
    },
    contact: {
      title: 'Hablemos',
      subtitle: 'Estoy disponible para proyectos freelance y colaboraciones',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ubicación'
    },
    footer: {
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Miguel Ángel Quiroga',
      subtitle: 'Senior Full Stack Developer',
      description: 'Specialist in Python, PHP, .NET, JavaScript and Swift',
      location: 'Cartagena, Spain'
    },
    about: {
      title: 'About me',
      description: 'With over 10 years of experience in software development, I have worked with leading companies creating innovative and scalable solutions.',
      experience: 'Years of experience',
      clients: 'Notable clients',
      technologies: 'Technologies mastered'
    },
    projects: {
      title: 'Featured projects',
      subtitle: 'Technological solutions for market-leading companies',
      intranet: {
        title: 'El Corte Inglés Intranet',
        description: 'Internal business management system for one of Spain\'s largest corporations'
      },
      vetoclock: {
        title: 'VetoClock Iberia',
        description: 'Comprehensive veterinary management platform with telemedicine, appointment scheduling and medical records'
      },
      crown: {
        title: 'Crown Sport Nutrition',
        description: 'E-commerce specialized in sports nutrition with thousands of active users'
      }
    },
    contact: {
      title: 'Let\'s talk',
      subtitle: 'Available for freelance projects and collaborations',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const t = translations[language];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              MAQ
            </div>
            <nav className="nav">
              <a href="#about">{t.nav.about}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="language-toggle"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p className="hero-description">{t.hero.description}</p>
            <p className="hero-location">{t.hero.location}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.description}</p>
          
          <div className="stats">
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t.about.experience}</div>
            </div>
            <div className="stat">
              <div className="stat-number">7</div>
              <div className="stat-label">{t.about.clients}</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t.about.technologies}</div>
            </div>
          </div>

          <div className="grid-2">
            <div className="grid-item">
              <h3>Stack Tecnológico</h3>
              <p><strong>Backend:</strong> Python, PHP, .NET</p>
              <p><strong>Frontend:</strong> JavaScript, React, Swift</p>
              <p><strong>Frameworks:</strong> Laravel, Next.js</p>
              <p><strong>Databases:</strong> MySQL, MongoDB, Pinecone</p>
              <p><strong>Cloud & DevOps:</strong> AWS (EC2, S3, Glacier), Docker</p>
            </div>
            <div className="grid-item">
              <h3>Clientes</h3>
              <p>El Corte Inglés</p>
              <p>Seur</p>
              <p>Prosegur</p>
              <p>Metrovacesa</p>
              <p>Crown Sport Nutrition</p>
              <p>VetoClock</p>
              <p>Gomel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
          
          <div className="projects-grid">
            {/* El Corte Inglés */}
            <div className="project">
              <div className="project-number">01</div>
              <h3>{t.projects.intranet.title}</h3>
              <p className="project-description">{t.projects.intranet.description}</p>
              <div className="tech-tags">
                <span className="tech-tag">SharePoint</span>
                <span className="tech-tag">.NET</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Enterprise</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&whr=elcorteingles.es&wreply=https://elcorteingles.sharepoint.com/sites/NEXO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>

            {/* VetoClock */}
            <div className="project">
              <div className="project-number">02</div>
              <h3>{t.projects.vetoclock.title}</h3>
              <p className="project-description">{t.projects.vetoclock.description}</p>
              <div className="tech-tags">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Telemedicina</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://vetoclock-formacion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Formación →
                </a>
                <a 
                  href="https://vetoclock-dashboard.netlify.app/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Dashboard →
                </a>
              </div>
            </div>

            {/* Crown Sport Nutrition */}
            <div className="project">
              <div className="project-number">03</div>
              <h3>{t.projects.crown.title}</h3>
              <p className="project-description">{t.projects.crown.description}</p>
              <div className="tech-tags">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">E-commerce</span>
              </div>
              <div className="project-links">
                <a 
                  href="https://crownsportnutrition.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-gray">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
          
          <div className="contact-grid">
            <div className="contact-item">
              <h3>{t.contact.email}</h3>
              <a href="mailto:maqdevelopment.com@gmail.com">
                maqdevelopment.com@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <h3>{t.contact.linkedin}</h3>
              <a 
                href="https://www.linkedin.com/in/miguel-angel-quiroga-55133314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miguel Ángel Quiroga
              </a>
            </div>
            
            <div className="contact-item">
              <h3>{t.contact.github}</h3>
              <a 
                href="https://github.com/kitcar63-prog"
                target="_blank"
                rel="noopener noreferrer"
              >
                kitcar63-prog
              </a>
            </div>
            
            <div className="contact-item">
              <h3>{t.contact.location}</h3>
              <p>Cartagena, España</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>© 2024 Miguel Ángel Quiroga. {t.footer.rights}.</div>
            <div className="footer-links">
              <a href="#about">{t.nav.about}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}