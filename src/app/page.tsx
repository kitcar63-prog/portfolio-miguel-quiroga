'use client';

import { useState, useEffect } from 'react';

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
      subtitle: 'Portfolio de proyectos desarrollados para empresas líderes'
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
      subtitle: 'Portfolio of projects developed for leading companies'
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

// Array de proyectos - Aquí puedes agregar más proyectos fácilmente
const projects = [
  {
    id: 1,
    number: '01',
    title: {
      es: 'Intranet El Corte Inglés',
      en: 'El Corte Inglés Intranet'
    },
    description: {
      es: 'Sistema interno de gestión empresarial para una de las mayores corporaciones de España',
      en: 'Internal business management system for one of Spain\'s largest corporations'
    },
    tags: ['SharePoint', '.NET', 'JavaScript', 'Enterprise'],
    links: [{
      url: 'https://login.microsoftonline.com/login.srf?wa=wsignin1.0&whr=elcorteingles.es&wreply=https://elcorteingles.sharepoint.com/sites/NEXO/',
      text: { es: 'Ver proyecto →', en: 'View project →' }
    }],
    image: null // Aquí puedes poner la URL de la imagen
  },
  {
    id: 2,
    number: '02',
    title: {
      es: 'VetoClock Iberia',
      en: 'VetoClock Iberia'
    },
    description: {
      es: 'Plataforma integral de gestión veterinaria con telemedicina y gestión de citas',
      en: 'Comprehensive veterinary management platform with telemedicine'
    },
    tags: ['PHP', 'Laravel', 'React', 'MySQL', 'Telemedicina'],
    links: [
      {
        url: 'https://vetoclock-formacion.com/',
        text: { es: 'Formación →', en: 'Training →' }
      },
      {
        url: 'https://vetoclock-dashboard.netlify.app/sign-in',
        text: { es: 'Dashboard →', en: 'Dashboard →' }
      }
    ],
    image: null
  },
  {
    id: 3,
    number: '03',
    title: {
      es: 'Crown Sport Nutrition',
      en: 'Crown Sport Nutrition'
    },
    description: {
      es: 'E-commerce especializado en nutrición deportiva con miles de usuarios activos',
      en: 'E-commerce specialized in sports nutrition with thousands of active users'
    },
    tags: ['PHP', 'JavaScript', 'MySQL', 'E-commerce'],
    links: [{
      url: 'https://crownsportnutrition.com/',
      text: { es: 'Ver proyecto →', en: 'View project →' }
    }],
    image: null
  },
  {
    id: 4,
    number: '04',
    title: {
      es: 'Seur Logistics',
      en: 'Seur Logistics'
    },
    description: {
      es: 'Sistema de gestión logística y tracking de envíos para Seur',
      en: 'Logistics management and shipment tracking system for Seur'
    },
    tags: ['.NET', 'SQL Server', 'API REST', 'Logistics'],
    links: [],
    image: null
  },
  {
    id: 5,
    number: '05',
    title: {
      es: 'Prosegur Security',
      en: 'Prosegur Security'
    },
    description: {
      es: 'Plataforma de gestión de seguridad y monitoreo para Prosegur',
      en: 'Security management and monitoring platform for Prosegur'
    },
    tags: ['Python', 'Django', 'PostgreSQL', 'Security'],
    links: [],
    image: null
  },
  {
    id: 6,
    number: '06',
    title: {
      es: 'Metrovacesa Portal',
      en: 'Metrovacesa Portal'
    },
    description: {
      es: 'Portal inmobiliario con gestión de propiedades y clientes para Metrovacesa',
      en: 'Real estate portal with property and client management for Metrovacesa'
    },
    tags: ['PHP', 'Laravel', 'Vue.js', 'Real Estate'],
    links: [],
    image: null
  },
  {
    id: 7,
    number: '07',
    title: {
      es: 'Gomel Gaming Platform',
      en: 'Gomel Gaming Platform'
    },
    description: {
      es: 'Plataforma de gaming con sistema de matchmaking y torneos',
      en: 'Gaming platform with matchmaking system and tournaments'
    },
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket'],
    links: [],
    image: null
  },
  {
    id: 8,
    number: '08',
    title: {
      es: 'Financial Dashboard',
      en: 'Financial Dashboard'
    },
    description: {
      es: 'Dashboard de análisis financiero con visualización de datos en tiempo real',
      en: 'Financial analysis dashboard with real-time data visualization'
    },
    tags: ['React', 'TypeScript', 'D3.js', 'Finance'],
    links: [],
    image: null
  },
  {
    id: 9,
    number: '09',
    title: {
      es: 'Health Management System',
      en: 'Health Management System'
    },
    description: {
      es: 'Sistema de gestión de salud con historiales médicos y citas',
      en: 'Health management system with medical records and appointments'
    },
    tags: ['Swift', 'iOS', 'Firebase', 'Healthcare'],
    links: [],
    image: null
  },
  {
    id: 10,
    number: '10',
    title: {
      es: 'AI Content Generator',
      en: 'AI Content Generator'
    },
    description: {
      es: 'Generador de contenido con IA y procesamiento de lenguaje natural',
      en: 'AI-powered content generator with natural language processing'
    },
    tags: ['Python', 'OpenAI', 'Pinecone', 'AI/ML'],
    links: [],
    image: null
  }
];

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible && !element.classList.contains('fade-in-up')) {
          element.classList.add('fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  const animateCounter = (element: HTMLElement, target: number, suffix: string = '') => {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const target = parseInt(element.dataset.target || '0');
          const suffix = element.dataset.suffix || '';
          animateCounter(element, target, suffix);
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">MAQ</div>
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
            <h1 className="fade-in-up">{t.hero.title}</h1>
            <h2 className="fade-in-up delay-100">{t.hero.subtitle}</h2>
            <p className="hero-description fade-in-up delay-200">{t.hero.description}</p>
            <p className="hero-location fade-in-up delay-300">{t.hero.location}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-gray">
        <div className="container">
          <h2 className="section-title animate-on-scroll">{t.about.title}</h2>
          <p className="section-subtitle animate-on-scroll">{t.about.description}</p>
          
          <div className="stats">
            <div className="stat animate-on-scroll">
              <div className="stat-number counter" data-target="10" data-suffix="+">10+</div>
              <div className="stat-label">{t.about.experience}</div>
            </div>
            <div className="stat animate-on-scroll delay-100">
              <div className="stat-number counter" data-target="7">7</div>
              <div className="stat-label">{t.about.clients}</div>
            </div>
            <div className="stat animate-on-scroll delay-200">
              <div className="stat-number counter" data-target="10" data-suffix="+">10+</div>
              <div className="stat-label">{t.about.technologies}</div>
            </div>
          </div>

          <div className="grid-2">
            <div className="grid-item animate-on-scroll">
              <h3>Stack Tecnológico</h3>
              <p><strong>Backend:</strong> Python, PHP, .NET</p>
              <p><strong>Frontend:</strong> JavaScript, React, Swift</p>
              <p><strong>Frameworks:</strong> Laravel, Next.js</p>
              <p><strong>Databases:</strong> MySQL, MongoDB, Pinecone</p>
              <p><strong>Cloud & DevOps:</strong> AWS (EC2, S3, Glacier), Docker</p>
            </div>
            <div className="grid-item animate-on-scroll delay-100">
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

      {/* Projects Section - Nuevo Grid Compacto */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">{t.projects.title}</h2>
          <p className="section-subtitle animate-on-scroll">{t.projects.subtitle}</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-card animate-on-scroll delay-${Math.min(index, 6)}00`}>
                <div className="project-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title[language]} />
                  ) : (
                    <div className="project-image-placeholder">
                      {project.title[language]}
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <div className="project-number">{project.number}</div>
                  <h3 className="project-title">{project.title[language]}</h3>
                  <p className="project-description">{project.description[language]}</p>
                  
                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {link.text[language]}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-gray">
        <div className="container">
          <h2 className="section-title animate-on-scroll">{t.contact.title}</h2>
          <p className="section-subtitle animate-on-scroll">{t.contact.subtitle}</p>
          
          <div className="contact-grid">
            <div className="contact-item animate-on-scroll">
              <h3>{t.contact.email}</h3>
              <a href="mailto:maqdevelopment.com@gmail.com">
                maqdevelopment.com@gmail.com
              </a>
            </div>
            
            <div className="contact-item animate-on-scroll delay-100">
              <h3>{t.contact.linkedin}</h3>
              <a 
                href="https://www.linkedin.com/in/miguel-angel-quiroga-55133314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Miguel Ángel Quiroga
              </a>
            </div>
            
            <div className="contact-item animate-on-scroll delay-200">
              <h3>{t.contact.github}</h3>
              <a 
                href="https://github.com/kitcar63-prog"
                target="_blank"
                rel="noopener noreferrer"
              >
                kitcar63-prog
              </a>
            </div>
            
            <div className="contact-item animate-on-scroll delay-300">
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