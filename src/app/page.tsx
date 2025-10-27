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
      subtitle: 'Tech Lead & Full-Stack Developer',
      description: 'Stack principal: PHP · .NET · Java · C · JavaScript (React, Node.js) · Python',
      infrastructure: 'Infraestructura y datos: SQL · MongoDB · Pinecone · AWS (EC2, S3) · Docker'
    },
    about: {
      title: 'Sobre mí',
      description: 'Con más de 20 años de experiencia en desarrollo de software, he trabajado con todo tipo de empresas, desde grandes corporaciones como Accenture, Repsol, Galp, Red Eléctrica, Iberdrola o El Corte Inglés, hasta startups tecnológicas.\n\nA lo largo de mi carrera he desarrollado soluciones en sectores muy distintos —financiero, logístico, educativo, sanitario y de consumo— así como juegos y productos digitales.\n\nMi enfoque combina visión técnica y de negocio: entender el problema, diseñar la arquitectura adecuada y entregar resultados medibles.\n\nAdemás, soy un impulsor de la tecnología blockchain, con años de experiencia en el ecosistema crypto, NFT y Web3, explorando su aplicación real en trazabilidad, identidad digital y propiedad descentralizada.',
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
      subtitle: 'Tech Lead & Full-Stack Developer',
      description: 'Main stack: PHP · .NET · Java · C · JavaScript (React, Node.js) · Python',
      infrastructure: 'Infrastructure & data: SQL · MongoDB · Pinecone · AWS (EC2, S3) · Docker'
    },
    about: {
      title: 'About me',
      description: 'With over 20 years of experience in software development, I have worked with all types of companies, from large corporations like Accenture, Repsol, Galp, Red Eléctrica, Iberdrola, and El Corte Inglés, to tech startups.\n\nThroughout my career I have developed solutions in very different sectors —financial, logistics, education, healthcare and consumer— as well as games and digital products.\n\nMy approach combines technical and business vision: understand the problem, design the right architecture, and deliver measurable results.\n\nAdditionally, I am a blockchain technology advocate, with years of experience in the crypto, NFT and Web3 ecosystem, exploring its real application in traceability, digital identity and decentralized ownership.',
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
      es: 'Nexo - Intranet El Corte Inglés',
      en: 'Nexo - El Corte Inglés Intranet'
    },
    description: {
      es: 'Plataforma interna corporativa con noticias, eventos, promociones y gestión de contenidos',
      en: 'Corporate internal platform with news, events, promotions and content management'
    },
    tags: ['SharePoint', '.NET', 'JavaScript', 'Enterprise'],
    links: [{
      url: 'https://login.microsoftonline.com/login.srf?wa=wsignin1.0&whr=elcorteingles.es&wreply=https://elcorteingles.sharepoint.com/sites/NEXO/',
      text: { es: 'Ver proyecto →', en: 'View project →' }
    }],
    image: '/projects/nexo-elcorteingles.png'
  },
  {
    id: 2,
    number: '02',
    title: {
      es: 'Software Presentaciones Kinect',
      en: 'Kinect Presentation Software'
    },
    description: {
      es: 'Sistema interactivo con Kinect para presentaciones corporativas de Jones Lang LaSalle',
      en: 'Interactive Kinect system for corporate presentations at Jones Lang LaSalle'
    },
    tags: ['Kinect', 'C#', '.NET', 'Interactive UI'],
    links: [],
    image: '/projects/kinect-presentation.png'
  },
  {
    id: 3,
    number: '03',
    title: {
      es: 'VetoClock Formación IA',
      en: 'VetoClock AI Training'
    },
    description: {
      es: 'Plataforma de IA veterinaria con chat inteligente y búsqueda avanzada de casos',
      en: 'Veterinary AI platform with intelligent chat and advanced case search'
    },
    tags: ['AI', 'Python', 'Machine Learning', 'Chat Interface'],
    links: [{
      url: 'https://vetoclock-formacion.com/',
      text: { es: 'Ver plataforma →', en: 'View platform →' }
    }],
    image: '/projects/vetoclock-formacion.png'
  },
  {
    id: 4,
    number: '04',
    title: {
      es: 'Financial Dashboard',
      en: 'Financial Dashboard'
    },
    description: {
      es: 'Dashboard de análisis financiero con filtros avanzados y visualización de datos',
      en: 'Financial analysis dashboard with advanced filters and data visualization'
    },
    tags: ['React', 'TypeScript', 'Charts.js', 'Analytics'],
    links: [],
    image: '/projects/financial-dashboard.png'
  },
  {
    id: 5,
    number: '05',
    title: {
      es: 'Juego Móvil 3D',
      en: 'Mobile 3D Game'
    },
    description: {
      es: 'Juego móvil con gráficos low-poly 3D, drones y personajes en entorno urbano',
      en: 'Mobile game with low-poly 3D graphics, drones and characters in urban environment'
    },
    tags: ['Unity', 'C#', '3D', 'Mobile Gaming'],
    links: [],
    image: '/projects/juego-movil.png'
  },
  {
    id: 6,
    number: '06',
    title: {
      es: 'VetoClock Iberia',
      en: 'VetoClock Iberia'
    },
    description: {
      es: 'Sistema de gestión de casos veterinarios con alertas en tiempo real y análisis de tiempos',
      en: 'Veterinary case management system with real-time alerts and time analysis'
    },
    tags: ['PHP', 'Laravel', 'React', 'MySQL', 'Real-time'],
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
    image: '/projects/vetoclock-avisos.png'
  },
  {
    id: 7,
    number: '07',
    title: {
      es: 'Blockchain Educación',
      en: 'Blockchain Education'
    },
    description: {
      es: 'Informe educativo sobre tecnología blockchain con diagramas de transacciones y Merkle Tree',
      en: 'Educational report on blockchain technology with transaction diagrams and Merkle Tree'
    },
    tags: ['Blockchain', 'Bitcoin', 'Cryptography', 'Education'],
    links: [],
    image: '/projects/blockchain-educacion.png'
  },
  {
    id: 8,
    number: '08',
    title: {
      es: 'Bunji Restaurant',
      en: 'Bunji Restaurant'
    },
    description: {
      es: 'Web de restaurante tropical con diseño vibrante y sistema de reservas',
      en: 'Tropical restaurant website with vibrant design and booking system'
    },
    tags: ['React', 'JavaScript', 'Booking System', 'Web Design'],
    links: [],
    image: '/projects/bunji-restaurant.png'
  },
  {
    id: 9,
    number: '09',
    title: {
      es: 'Crown Sport Nutrition',
      en: 'Crown Sport Nutrition'
    },
    description: {
      es: 'E-commerce de nutrición deportiva con programa de fidelización y gestión de productos',
      en: 'Sports nutrition e-commerce with loyalty program and product management'
    },
    tags: ['PHP', 'JavaScript', 'MySQL', 'E-commerce'],
    links: [{
      url: 'https://crownsportnutrition.com/',
      text: { es: 'Ver proyecto →', en: 'View project →' }
    }],
    image: '/projects/crown-homepage.png'
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
            <div className="logo">
              <img src="/logo-maq.png" alt="MAQ Logo" style={{ height: '40px', width: 'auto' }} />
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
            <h1 className="fade-in-up">{t.hero.title}</h1>
            <h2 className="fade-in-up delay-100">{t.hero.subtitle}</h2>
            <p className="hero-description fade-in-up delay-200">{t.hero.description}</p>
            <p className="hero-location fade-in-up delay-300">{t.hero.infrastructure}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-gray">
        <div className="container">
          <h2 className="section-title animate-on-scroll">{t.about.title}</h2>
          <div className="section-subtitle animate-on-scroll">
            {t.about.description.split('\n\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
          </div>
          
          <div className="grid-2" style={{ marginTop: '80px' }}>
            <div className="tech-section animate-on-scroll">
              <h3>Stack Tecnológico</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '12px' }}>
                <div className="tech-badge">PHP</div>
                <div className="tech-badge">.NET</div>
                <div className="tech-badge">Java</div>
                <div className="tech-badge">C</div>
                <div className="tech-badge">Python</div>
                <div className="tech-badge">JavaScript</div>
                <div className="tech-badge">React</div>
                <div className="tech-badge">Node.js</div>
                <div className="tech-badge">Laravel</div>
                <div className="tech-badge">MySQL</div>
                <div className="tech-badge">MongoDB</div>
                <div className="tech-badge">AWS</div>
                <div className="tech-badge">Docker</div>
                <div className="tech-badge">Blockchain</div>
              </div>
            </div>
            <div className="tech-section animate-on-scroll delay-100">
              <h3>Clientes</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}>
                <div className="client-item">Accenture</div>
                <div className="client-item">Repsol</div>
                <div className="client-item">Galp</div>
                <div className="client-item">Red Eléctrica</div>
                <div className="client-item">Iberdrola</div>
                <div className="client-item">El Corte Inglés</div>
                <div className="client-item">Seur</div>
                <div className="client-item">Prosegur</div>
                <div className="client-item">Metrovacesa</div>
                <div className="client-item">Jones Lang LaSalle</div>
                <div className="client-item">Crown Sport Nutrition</div>
                <div className="client-item">VetoClock</div>
                <div className="client-item">Gomel</div>
                <div className="client-item">Bunji Restaurant</div>
              </div>
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