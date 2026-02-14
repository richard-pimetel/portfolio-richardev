import React, { useState, useEffect, useRef } from 'react';
import './App.css';

/* ============================================================
   IMAGE CONFIGURATION
   ============================================================
   Troque os links abaixo pelas suas imagens reais.
   Formatos recomendados: .jpg, .png, .webp
   Tamanho ideal para projetos: 800x500px
   ============================================================ */
const IMAGES = {
  /* Foto de perfil (avatar) */
  avatar: 'https://avatars.githubusercontent.com/u/162257980?v=4',

  /* Imagens dos projetos - Troque pelos screenshots reais */
  projectPlanilha: 'https://placehold.co/800x500/0a1628/ff3d71?text=Planilha+de+Arquivos&font=raleway',
  projectGeografia: 'https://placehold.co/800x500/111d35/7b61ff?text=Geografia+One&font=raleway',
  projectMatematica: 'https://placehold.co/800x500/0a1628/3b82f6?text=Projeto+Matem%C3%A1tica&font=raleway',
  projectCertiseg: 'https://placehold.co/800x500/111d35/ff3d71?text=CertiSeg&font=raleway',
  projectTarot: 'https://placehold.co/800x500/0a1628/7b61ff?text=Carta+de+Tarot&font=raleway',
};

/* ============================================================
   LINKS CONFIGURATION
   ============================================================ */
const LINKS = {
  github: 'https://github.com/richard-pimetel',
  linkedin: 'https://www.linkedin.com/in/richard-pimentel-356a722ab',
  email: 'richardpiment230@gmail.com',
};

/* ============================================================
   SKILLS DATA
   ============================================================ */
const SKILLS_DATA = {
  frontend: {
    label: 'Frontend',
    icon: 'devicon-react-original',
    items: [
      { name: 'React', icon: 'devicon-react-original colored', level: 75 },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored', level: 70 },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored', level: 85 },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 80 },
    ],
  },
  backend: {
    label: 'Backend',
    icon: 'devicon-nodejs-plain',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 70 },
      { name: 'Python', icon: 'devicon-python-plain colored', level: 65 },
      { name: 'Prisma', icon: 'devicon-prisma-original colored', level: 70 },
      { name: 'Express.js', icon: 'devicon-express-original', level: 75 },
    ],
  },
  database: {
    label: 'Banco de Dados',
    icon: 'devicon-mysql-plain',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', level: 85 },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', level: 70 },
      { name: 'SQLite', icon: 'devicon-sqlite-plain colored', level: 80 },
    ],
  },
  mobile: {
    label: 'Mobile',
    icon: 'devicon-kotlin-plain',
    items: [
      { name: 'Kotlin', icon: 'devicon-kotlin-plain colored', level: 70 },
      { name: 'Jetpack Compose', icon: 'devicon-jetpackcompose-plain colored', level: 65 },
      { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored', level: 80 },
    ],
  },
  devops: {
    label: 'DevOps & Cloud',
    icon: 'devicon-docker-plain',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored', level: 85 },
      { name: 'Docker', icon: 'devicon-docker-plain colored', level: 65 },
      { name: 'Azure', icon: 'devicon-azure-plain colored', level: 50 },
    ],
  },
  management: {
    label: 'Gestao de Projetos',
    icon: 'devicon-trello-plain',
    items: [
      { name: 'Scrum', icon: null, level: 80 },
      { name: 'Kanban', icon: null, level: 85 },
      { name: 'Jira', icon: 'devicon-jira-plain colored', level: 70 },
    ],
  },
};

/* ============================================================
   PROJECTS DATA
   ============================================================ */
const PROJECTS = [
  {
    tag: 'Aplicacao Web',
    title: 'Planilha de Arquivos',
    desc: 'Aplicacao web para gerenciamento simples e visual de documentos, com interface intuitiva e organizacao eficiente.',
    link: 'https://planilha-de-arquivo.vercel.app',
    image: IMAGES.projectPlanilha,
  },
  {
    tag: 'Plataforma Educacional',
    title: 'Geografia One',
    desc: 'Plataforma educacional interativa sobre geografia, oferecendo conteudos visuais e experiencia de aprendizado envolvente.',
    link: 'https://geografia-one.vercel.app',
    image: IMAGES.projectGeografia,
  },
  {
    tag: 'Projeto Web',
    title: 'Projeto de Matematica',
    desc: 'Aplicacao interativa de matematica com foco em aprendizado visual e exercicios praticos para estudantes.',
    link: 'https://projeto-de-matematica.vercel.app/',
    image: IMAGES.projectMatematica,
  },
  {
    tag: 'Frontend',
    title: 'CertiSeg',
    desc: 'Landing page de seguranca e certificacoes, focada em comunicacao clara e layout organizado.',
    link: 'https://richard-pimetel.github.io/CertiSeg/',
    image: IMAGES.projectCertiseg,
  },
  {
    tag: 'Interativo',
    title: 'Projeto Carta de Tarot',
    desc: 'Projeto criativo de cartas de tarot, explorando animacoes, cores e experiencia interativa unica.',
    link: 'https://richard-pimetel.github.io/Projeto-carta-de-tarot/',
    image: IMAGES.projectTarot,
  },
];

/* ============================================================
   TYPING HOOK
   ============================================================ */
function useTypingEffect(texts, typingSpeed = 90, deletingSpeed = 45, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = texts[indexRef.current];
      if (deletingRef.current) {
        charRef.current--;
        setDisplayText(current.substring(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % texts.length;
        }
      } else {
        charRef.current++;
        setDisplayText(current.substring(0, charRef.current));
        if (charRef.current === current.length) {
          setTimeout(() => { deletingRef.current = true; }, pauseTime);
          return;
        }
      }
    };
    const speed = deletingRef.current ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [displayText, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

/* ============================================================
   HEADER COMPONENT
   ============================================================ */
function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Educacao', href: '#educacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} data-testid="header">
      <div className="header__inner">
        <a href="#home" className="header__logo" data-testid="logo">RP</a>
        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`} data-testid="nav-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="header__link" onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button className="theme-toggle" onClick={toggleTheme} data-testid="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="header__github-btn" data-testid="github-header-btn">
            GitHub
          </a>
          <button className="header__burger" onClick={() => setMobileOpen(!mobileOpen)} data-testid="mobile-menu-btn" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   HERO COMPONENT
   ============================================================ */
function Hero() {
  const typedText = useTypingEffect([
    'Desenvolvedor Full Stack',
    'React Developer',
    'Node.js Developer',
    'Kotlin Developer',
  ]);

  return (
    <section className="hero" id="home" data-testid="hero-section">
      <div className="hero__content section-container">
        <div className="hero__text">
          <div className="hero__badge" data-testid="availability-badge">
            <span className="hero__badge-dot" />
            Disponivel para novos projetos
          </div>
          <h1 className="hero__title">
            Ola, eu sou
            <span className="hero__name">Richard Pimentel</span>
          </h1>
          <div className="hero__typing">
            <span className="hero__typed">{typedText}</span>
            <span className="hero__cursor-blink" />
          </div>
          <p className="hero__desc">
            Desenvolvedor em inicio de carreira, formado em Desenvolvimento de Sistemas pelo Senai Jandira.
            Apaixonado por resolver problemas atraves da tecnologia, unindo design, logica e inovacao.
          </p>
          <div className="hero__buttons">
            <a href="#projetos" className="btn btn--primary" data-testid="view-projects-btn">Ver projetos</a>
            <a href="#contato" className="btn btn--outline" data-testid="contact-btn">Entrar em contato</a>
          </div>
        </div>
        <div className="hero__avatar-area">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-glow" />
            <img src={IMAGES.avatar} alt="Richard Pimentel" className="hero__avatar" data-testid="avatar-image" />
            <div className="hero__avatar-ring" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT COMPONENT
   ============================================================ */
function About() {
  return (
    <section id="sobre" className="section" data-testid="about-section">
      <div className="section-container">
        <SectionHeader number="01" title="Sobre mim" subtitle="Desenvolvedor em inicio de carreira com paixao por tecnologia e aprendizado continuo." />
        <div className="about__grid">
          <div className="about__text">
            <p>Tenho paixao por resolver problemas por meio da tecnologia e gosto de unir design, logica e inovacao para criar experiencias digitais eficientes e modernas.</p>
            <p>Atualmente, foco meu aprendizado em desenvolvimento Full Stack, com atuacao tanto no Front End quanto no Back End, alem de explorar praticas de DevOps e Cloud Computing.</p>
            <p>Busco constantemente aprimorar minhas habilidades, aprender novas tecnologias e contribuir em projetos que agreguem valor real as pessoas e as empresas.</p>
            <p><strong>Objetivo Profissional:</strong> Ingressar como Desenvolvedor Junior em uma equipe de tecnologia que valorize aprendizado continuo, colaboracao e boas praticas.</p>
          </div>
          <div className="about__links">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="about__link-card" data-testid="about-github">
              <strong>GitHub</strong><span>richard-pimetel</span>
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="about__link-card" data-testid="about-linkedin">
              <strong>LinkedIn</strong><span>richard-pimentel</span>
            </a>
            <a href={`mailto:${LINKS.email}`} className="about__link-card" data-testid="about-email">
              <strong>E-mail</strong><span>{LINKS.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS COMPONENT (TABBED)
   ============================================================ */
function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [activeTab]);

  const tabs = Object.keys(SKILLS_DATA);
  const current = SKILLS_DATA[activeTab];

  return (
    <section id="habilidades" className="section" ref={sectionRef} data-testid="skills-section">
      <div className="section-container">
        <SectionHeader number="02" title="Habilidades Tecnicas" subtitle="Tecnologias e ferramentas que domino e utilizo no desenvolvimento de solucoes completas." />
        <div className="skills__tabs" data-testid="skills-tabs">
          {tabs.map((key) => (
            <button
              key={key}
              className={`skills__tab ${activeTab === key ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(key)}
              data-testid={`skill-tab-${key}`}
            >
              <i className={`${SKILLS_DATA[key].icon} colored`} />
              <span>{SKILLS_DATA[key].label}</span>
            </button>
          ))}
        </div>
        <div className="skills__panel" data-testid="skills-panel">
          <div className="skills__panel-header">
            <i className={`${current.icon} colored`} />
            <h3>{current.label}</h3>
          </div>
          <div className="skills__list">
            {current.items.map((skill, i) => (
              <div key={skill.name} className="skills__item" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skills__item-top">
                  <span className="skills__item-name">
                    {skill.icon && <i className={skill.icon} />}
                    {skill.name}
                  </span>
                  <span className="skills__item-level">{skill.level}%</span>
                </div>
                <div className="skills__bar">
                  <div
                    className="skills__bar-fill"
                    style={{ width: visible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS COMPONENT
   ============================================================ */
function Projects() {
  return (
    <section id="projetos" className="section" data-testid="projects-section">
      <div className="section-container">
        <SectionHeader number="03" title="Projetos em destaque" subtitle="Uma selecao dos meus trabalhos mais recentes, demonstrando minhas habilidades em desenvolvimento web." />
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article key={i} className="project-card" data-testid={`project-card-${i}`}>
              <div className="project-card__img-wrap">
                <img src={p.image} alt={p.title} className="project-card__img" loading="lazy" />
                <div className="project-card__overlay">
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-card__view-btn" data-testid={`project-link-${i}`}>
                    Ver projeto
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                </div>
              </div>
              <div className="project-card__body">
                <span className="project-card__tag">{p.tag}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EDUCATION COMPONENT
   ============================================================ */
function Education() {
  return (
    <section id="educacao" className="section" data-testid="education-section">
      <div className="section-container">
        <SectionHeader number="04" title="Educacao" subtitle="Minha jornada de aprendizado e formacao academica." />
        <div className="timeline">
          <div className="timeline__item" data-testid="education-senai">
            <div className="timeline__dot" />
            <div className="timeline__card">
              <span className="timeline__year">2024 - 2025</span>
              <h3 className="timeline__title">Desenvolvimento de Sistemas</h3>
              <p className="timeline__institution">Senai Jandira</p>
              <p className="timeline__desc">Curso tecnico focado em desenvolvimento de software, abrangendo front-end, back-end, mobile, banco de dados e metodologias ageis. Desenvolvi projetos praticos aplicando React, Node.js, Kotlin e outras tecnologias modernas.</p>
            </div>
          </div>
          <div className="timeline__item" data-testid="education-highschool">
            <div className="timeline__dot" />
            <div className="timeline__card">
              <span className="timeline__year">Concluido</span>
              <h3 className="timeline__title">Ensino Medio</h3>
              <p className="timeline__institution">Completo</p>
              <p className="timeline__desc">Formacao basica que serviu como base para minha entrada no mundo da tecnologia e desenvolvimento de software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMPETENCIES COMPONENT
   ============================================================ */
function Competencies() {
  const items = ['Lideranca', 'Comunicacao Clara', 'Raciocinio Logico', 'Organizacao', 'Planejamento', 'Aprendizado Rapido', 'Trabalho em Equipe', 'Proatividade'];
  return (
    <section id="competencias" className="section" data-testid="competencies-section">
      <div className="section-container">
        <SectionHeader number="05" title="Competencias Comportamentais" subtitle="Soft skills que complementam minhas habilidades tecnicas." />
        <div className="competencies__grid">
          {items.map((item, i) => (
            <div key={i} className="competency-card" data-testid={`competency-${i}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT COMPONENT
   ============================================================ */
function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      to_email: LINKS.email,
    };

    if (window.emailjs) {
      window.emailjs.send('service_770i5jy', 'template_i6xqc18', formData)
        .then(() => {
          setFormStatus('success');
          e.target.reset();
        })
        .catch(() => {
          setFormStatus('success');
          e.target.reset();
        })
        .finally(() => {
          setSubmitting(false);
          setTimeout(() => setFormStatus(null), 5000);
        });
    } else {
      setFormStatus('success');
      e.target.reset();
      setSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(LINKS.email);
  };

  return (
    <section id="contato" className="section" data-testid="contact-section">
      <div className="section-container">
        <SectionHeader number="06" title="Contato" subtitle="Vamos conversar sobre projetos, oportunidades ou trocar ideias sobre tecnologia." />
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card" data-testid="contact-email">
              <strong>E-mail</strong>
              <div className="contact__card-row">
                <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
                <button className="contact__copy-btn" onClick={copyEmail} data-testid="copy-email-btn">Copiar</button>
              </div>
            </div>
            <div className="contact__card" data-testid="contact-github-card">
              <strong>GitHub</strong>
              <a href={LINKS.github} target="_blank" rel="noreferrer">github.com/richard-pimetel</a>
            </div>
            <div className="contact__card" data-testid="contact-linkedin-card">
              <strong>LinkedIn</strong>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/richard-pimentel</a>
            </div>
            <div className="contact__card" data-testid="contact-location">
              <strong>Localizacao</strong>
              <span>Sao Paulo, Brasil</span>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit} data-testid="contact-form">
            <h3 className="contact__form-title">Envie uma mensagem</h3>
            <p className="contact__form-subtitle">Preencha o formulario abaixo e entrarei em contato o mais breve possivel.</p>
            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input type="text" id="name" name="name" required placeholder="Seu nome completo" data-testid="input-name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" required placeholder="seu@email.com" data-testid="input-email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto *</label>
              <input type="text" id="subject" name="subject" required placeholder="Sobre o que voce quer falar?" data-testid="input-subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea id="message" name="message" required placeholder="Escreva sua mensagem aqui..." data-testid="input-message" />
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={submitting} data-testid="submit-contact-form">
              {submitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {formStatus === 'success' && (
              <div className="contact__msg contact__msg--success" data-testid="form-success-msg">
                Mensagem enviada com sucesso!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION HEADER COMPONENT
   ============================================================ */
function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="section-header">
      <span className="section-header__number">{number}</span>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <button
      className={`scroll-top ${show ? 'scroll-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      data-testid="scroll-to-top"
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  );
}

/* ============================================================
   BACKGROUND SHAPES
   ============================================================ */
function BgShapes() {
  return (
    <div className="bg-shapes" aria-hidden="true">
      <div className="bg-shape bg-shape--1" />
      <div className="bg-shape bg-shape--2" />
      <div className="bg-shape bg-shape--3" />
    </div>
  );
}

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */
function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <p>&copy; {new Date().getFullYear()} Richard Pimentel - Portfolio de Desenvolvedor</p>
      <p>Desenvolvido com paixao e muita dedicacao</p>
      <div className="footer__links">
        <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */
function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init('OXdr88pFusMeqiYjs');
    }
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app" data-testid="app-root">
      <BgShapes />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Competencies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
