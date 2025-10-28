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
    links: [{
      url: 'https://youtu.be/5nDOfinKAms?si=5yio__W5vztlAJ6M',
      text: { es: 'Ver video →', en: 'Watch video →' }
    }],
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
    links: [{
      url: 'https://youtu.be/7E5HJPrcqtk?si=jupXnHkKLdE9ddGe',
      text: { es: 'Ver video →', en: 'Watch video →' }
    }],
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
        url: 'https://www.vetoclock-iberia.com/',
        text: { es: 'Ver web →', en: 'Visit website →' }
      },
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
    links: [{
      url: 'https://bunji.es/',
      text: { es: 'Ver web →', en: 'Visit website →' }
    }],
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginBottom: '80px', flexWrap: 'wrap' }}>
            <img 
              src="/miguel-quiroga.jpg" 
              alt="Miguel Ángel Quiroga - Tech Lead & Full-Stack Developer"
              style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '4px solid white'
              }}
              className="animate-on-scroll scale-in"
            />
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 className="section-title animate-on-scroll" style={{ marginBottom: '24px' }}>{t.about.title}</h2>
              <div className="section-subtitle animate-on-scroll" style={{ marginBottom: '0' }}>
                {t.about.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                ))}
              </div>
            </div>
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
          
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <form 
                action="https://formspree.io/f/xpwoqlqb"
                method="POST"
                style={{ 
                  background: 'white',
                  padding: '48px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  
                  try {
                    await fetch('https://formspree.io/f/xpwoqlqb', {
                      method: 'POST',
                      body: data,
                      headers: {
                        'Accept': 'application/json'
                      }
                    });
                    window.location.href = '/success';
                  } catch (error) {
                    alert('Error al enviar el formulario. Por favor, intenta de nuevo.');
                  }
                }}
              >
                <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio - maqdevelopment.netlify.app" />
                <input type="hidden" name="_next" value="https://maqdevelopment.netlify.app/success" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#666' }}>
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#666' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#666' }}>
                    {language === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '12px',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {language === 'es' ? 'Enviar mensaje' : 'Send message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll delay-100">
              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#999', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.contact.email}
                </h3>
                <a 
                  href="mailto:maqdevelopment.com@gmail.com"
                  style={{
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    display: 'inline-block',
                    transition: 'all 0.3s ease'
                  }}
                >
                  maqdevelopment.com@gmail.com
                </a>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#999', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.contact.linkedin}
                </h3>
                <a 
                  href="https://www.linkedin.com/in/miguel-angel-quiroga-55133314/"
            target="_blank"
            rel="noopener noreferrer"
                  style={{
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
                  </svg>
                  Miguel Ángel Quiroga
                </a>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#999', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.contact.github}
                </h3>
                <a 
                  href="https://github.com/kitcar63-prog"
            target="_blank"
            rel="noopener noreferrer"
                  style={{
                    color: '#0a0a0a',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
                  </svg>
                  kitcar63-prog
                </a>
              </div>

              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#999', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {t.contact.location}
                </h3>
                <p style={{ color: '#0a0a0a', fontSize: '18px', fontWeight: '600' }}>
                  Cartagena, España
                </p>
              </div>
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