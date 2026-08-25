'use client';
import { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publication', href: '#publication' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: 'var(--text)', textDecoration: 'none' }}>
            Amrutha<span style={{ color: 'var(--accent)' }}>.</span>
          </a>
          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="/Amrutha_Ravikumar_Resume.pdf" target="_blank" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
              Resume
            </a>
          </div>
          <button onClick={() => setMenuOpen(true)}
            className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
            aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="var(--text)" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="28" height="28" fill="none" stroke="var(--text)" strokeWidth="2">
              <path d="M6 6l16 16M6 22L22 6"/>
            </svg>
          </button>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ═══════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════ */
function Counter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = typeof end === 'number' ? end : parseFloat(end.replace(/,/g, ''));
        const duration = 1500;
        const step = num / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= num) {
            current = num;
            clearInterval(timer);
          }
          setCount(current);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  const display = typeof end === 'number'
    ? (end % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1))
    : Math.floor(count).toLocaleString();

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  const [typed, setTyped] = useState('');
  const full = 'I build models people can act on.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Photo */}
          <div className="photo-container fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="photo-ring" />
            <div className="photo-inner">
              <img src="/profile.jpg" alt="Amrutha Ravikumar"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-fallback" style={{ display: 'none' }}>AR</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="status-badge fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="status-dot" />
              Open to opportunities, Jan 2027
            </div>

            <h1 className="font-serif fade-up" style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              lineHeight: 1.15,
              marginTop: 24,
              color: 'var(--text)',
              animationDelay: '0.4s'
            }}>
              {typed}<span className="cursor" />
            </h1>

            <p className="fade-up" style={{
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'var(--accent)',
              marginTop: 16,
              fontFamily: "'DM Mono', monospace",
              animationDelay: '0.6s'
            }}>
              AI/ML Engineer &middot; Data Scientist &middot; Applied Researcher
            </p>

            <p className="fade-up" style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              marginTop: 16,
              lineHeight: 1.7,
              maxWidth: 520,
              animationDelay: '0.7s'
            }}>
              Published first-author ML researcher with a business foundation.
              I take messy data through the full pipeline, from scoping to a deployed solution someone trusts.
            </p>

            <div className="fade-up" style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap', animationDelay: '0.8s' }}>
              <a href="#projects" className="btn-primary">See my work &rarr;</a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>

            <div className="fade-up" style={{ display: 'flex', gap: 24, marginTop: 32, alignItems: 'center', animationDelay: '0.9s' }}>
              {[
                { label: 'GitHub', url: 'https://github.com/Amy-way05' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amrutha218' },
                { label: 'Scholar', url: 'https://scholar.google.com/citations?user=RIVcDU8AAAAJ' },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener"
                  style={{ fontSize: '0.8rem', fontFamily: "'DM Mono', monospace", color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════ */
function About() {
  return (
    <section id="about" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">About</div>

      <div className="reveal" style={{ maxWidth: 720 }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: 20 }}>
          I came into analytics through business, which means when I look at a dataset, my first
          question is always what decision this is supposed to change and whether the person using
          the output can actually trust it.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
          I&apos;m finishing my Master&apos;s in Applied Machine Intelligence at Northeastern University
          (GPA 4.0, graduating December 2026). Over the past year I&apos;ve published first-author ML
          research, built evaluation pipelines for nonprofits across Maine, and designed databases
          reconciling messy federal data across 72,000+ census tracts.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          I work across the full arc of a data problem: scoping, cleaning, modeling, validating,
          and communicating what it means to the people who need to act on it.
        </p>
      </div>

      <div className="stat-grid reveal" style={{ marginTop: 48 }}>
        {[
          { value: 4.0, label: 'GPA', suffix: '' },
          { value: 13777, label: 'Penalty outcomes analyzed' },
          { value: 72531, label: 'Census tracts integrated' },
        ].map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-value"><Counter end={s.value} suffix={s.suffix} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
        <div className="stat-card">
          <div className="stat-value">1st</div>
          <div className="stat-label">Author, published preprint</div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   EXPERIENCE
   ═══════════════════════════════════════════ */
const experiences = [
  {
    title: 'ML Research Analyst',
    org: 'Ahmedabad University',
    sub: 'NCAA data partnership with Sacred Heart University, CT',
    period: 'Jan 2026 \u2013 Present',
    points: [
      'Integrated 13,777 minor-penalty outcomes across 55 NCAA Division I programs with 5 seasons of play-by-play data into a unified analytic database.',
      'Built Q-learning models (8-state reward structure, 10,000 iterations) and Markov Chain transition maps; validated via LOSO cross-validation and 500-game bootstrap resampling (Wilcoxon p < 0.0001).',
      'Delivered a decision-support framework giving coaching staff actionable personnel deployment recommendations.',
      'Published first-author preprint on SportRxiv with a 6-author cross-institutional research team.',
    ],
    tags: ['Python', 'Q-Learning', 'Markov Chains', 'Scikit-learn'],
  },
  {
    title: 'Data Analyst',
    org: 'Northeastern University Roux Institute',
    sub: 'Data for Social Good, LSHE Team',
    period: 'Feb 2026 \u2013 Jun 2026',
    points: [
      'Competitively selected for cohort evaluating AI-assisted program impact for nonprofits and service providers across Maine.',
      'Co-designed a dual-phase evaluation framework combining Kirkpatrick Model survey methodology with a CIPP structured analysis pipeline.',
      'Engineered a Python pipeline with Likert-scale normalization and NLP text mining (TF-IDF, cosine similarity) to audit qualitative stakeholder responses at scale.',
      'Delivered evaluation report accepted by the LSHE team and briefed directly to program stakeholders.',
    ],
    tags: ['Python', 'NLP', 'TF-IDF', 'Pandas'],
  },
  {
    title: 'Customer Support Executive',
    org: 'Thinnai Experiences Pvt Ltd, India',
    sub: 'Hospitality SaaS platform',
    period: 'Feb 2023 \u2013 May 2024',
    points: [
      'Managed 600+ queries across a dual-sided platform supporting hosts and customers, from simple bookings to complex events.',
      'Led knowledge transfer for 2 new-hire batches over 2 months, designing training on platform workflows (Slack, Zapier, Google Sheets).',
    ],
    tags: ['SaaS', 'Zapier', 'Slack'],
  },
];

function Experience() {
  return (
    <section id="experience" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">Experience</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {experiences.map((exp, i) => (
          <div key={i} className={`exp-card reveal reveal-delay-${i + 1}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              <div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.25rem', color: 'var(--text)' }}>{exp.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--accent)', marginTop: 2 }}>{exp.org}</p>
                {exp.sub && <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{exp.sub}</p>}
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.period}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exp.points.map((p, j) => (
                <li key={j} style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>&loz;</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {exp.tags.map((t, k) => <span key={k} className="proj-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROJECTS
   ═══════════════════════════════════════════ */
const projects = [
  {
    title: 'Food Intervention Priority Index (FIPI)',
    description: 'Designed a PostgreSQL database integrating four federal datasets (USDA, Census ACS, County Health Rankings, SNAP) across 72,531 U.S. census tracts. Built a composite vulnerability scoring model with statistical validation (p < 0.001). Interactive Tableau dashboards at state and county granularity.',
    tech: ['PostgreSQL', 'SQL', 'Tableau', 'Python'],
    stat: '72,531 census tracts across 51 states',
    github: 'https://github.com/Amy-way05/food-intervention-priority-index',
    live: 'https://amy-way05.github.io/food-intervention-priority-index/',
  },
  {
    title: 'NCAA Hockey Intelligence System',
    description: 'End-to-end research pipeline from web scraping to published findings. Scraped 5 seasons of play-by-play data, integrated macro and micro datasets, built Q-learning and Markov Chain models for penalty-kill decision-making. Published as first-author preprint.',
    tech: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Selenium', 'NumPy'],
    stat: '13,777 penalty outcomes, 55 D1 programs',
    github: 'https://github.com/Amy-way05/shu-hockey-intelligence',
    paper: 'https://doi.org/10.51224/SportRxiv.972',
  },
  {
    title: 'Consumer Segmentation & Motivation Analysis',
    description: 'Built segmentation models on 3,000+ survey responses for Wyman & Son (ME). PCA for dimensionality reduction and K-Means clustering with statistical validation (p < 0.001). Identified high-intent teen/tween households as the primary growth segment, directly informing client marketing strategy.',
    tech: ['R', 'Python', 'PCA', 'K-Means', 'Tableau'],
    stat: '3,000+ survey responses, client-facing deliverable',
  },
  {
    title: 'Grocery Loyalty DBMS Design',
    description: 'Designed and implemented a full relational database system for a grocery loyalty rewards program. Normalized schema, complex SQL queries, and business logic for tracking customer purchase patterns and reward eligibility.',
    tech: ['SQL', 'Database Design', 'ER Modeling'],
    stat: 'Full DBMS from schema to queries',
    github: 'https://github.com/Amy-way05/grocery-loyalty-dbms-sql-design',
  },
  {
    title: 'PMI Maine Membership Analytics',
    description: 'Analyzed membership data for the Project Management Institute Maine chapter. Built dashboards and statistical models to identify membership trends, engagement patterns, and retention drivers.',
    tech: ['Python', 'Pandas', 'Tableau', 'Statistical Analysis'],
    stat: 'Membership trend analysis and retention modeling',
    github: 'https://github.com/Amy-way05/pmi-maine-membership-analytics',
  },
  {
    title: 'AI-Assisted Program Evaluation (Data for Social Good)',
    description: 'Designed and delivered an evaluation framework for healthcare and nonprofit programs across Maine. Combined Kirkpatrick survey methodology with CIPP analysis. Built a Python pipeline with TF-IDF text mining to audit qualitative stakeholder responses.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Cosine Similarity'],
    stat: 'Accepted by Northeastern LSHE team',
  },
];

function Projects() {
  return (
    <section id="projects" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">Projects</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
        {projects.map((proj, i) => (
          <div key={i} className={`proj-card reveal reveal-delay-${(i % 3) + 1}`}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>
              {proj.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
              {proj.description}
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--accent)', marginBottom: 16, opacity: 0.7 }}>
              {proj.stat}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
              {proj.tech.map((t, j) => <span key={j} className="proj-tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener" className="proj-link">
                  GitHub <span>&rarr;</span>
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener" className="proj-link">
                  Live <span>&rarr;</span>
                </a>
              )}
              {proj.paper && (
                <a href={proj.paper} target="_blank" rel="noopener" className="proj-link">
                  Paper <span>&rarr;</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SKILLS
   ═══════════════════════════════════════════ */
const skillGroups = [
  { label: 'Languages & Data', items: ['Python', 'SQL', 'PostgreSQL', 'R', 'Excel'] },
  { label: 'ML & Statistics', items: ['Q-Learning', 'Markov Chains', 'Random Forest', 'XGBoost', 'Logistic Regression', 'GLM', 'LASSO', 'PCA', 'K-Means', 'ANOVA'] },
  { label: 'NLP', items: ['TF-IDF', 'Cosine Similarity', 'VADER', 'Text Mining'] },
  { label: 'Libraries', items: ['Pandas', 'NumPy', 'Scikit-learn', 'BeautifulSoup', 'Selenium', 'ggplot2', 'dplyr', 'Shiny'] },
  { label: 'Visualization & Tools', items: ['Tableau', 'Power BI', 'Plotly', 'Jupyter', 'Git', 'Databricks'] },
];

function Skills() {
  return (
    <section id="skills" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">Skills</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {skillGroups.map((g, i) => (
          <div key={i} className={`skill-group reveal reveal-delay-${(i % 3) + 1}`}>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
              {g.label}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {g.items.map((item, j) => <span key={j} className="skill-chip">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CERTIFICATIONS
   ═══════════════════════════════════════════ */
const certs = [
  { title: 'Data Analytics Job Simulation', issuer: 'Quantium (via Forage)', date: 'May 2026', desc: 'Retail analytics: cleaned transaction data, analyzed chip purchasing behavior, identified customer segments, evaluated trial store uplift.' },
  { title: 'NU Innovation Challenge Digital Badge', issuer: 'Northeastern University', date: '2026', desc: 'Recognized for innovation and applied problem-solving.' },
  { title: 'Spatial ML & Statistics in Python', issuer: 'Online', date: '', desc: '' },
  { title: 'Data Visualization & Storytelling', issuer: 'Online', date: '', desc: '' },
  { title: 'Introduction to Analytics', issuer: 'Online', date: '', desc: '' },
];

function Certifications() {
  return (
    <section id="certifications" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">Certifications</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {certs.map((c, i) => (
          <div key={i} className={`cert-card reveal reveal-delay-${(i % 3) + 1}`}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{c.title}</h3>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>
                  {c.issuer}{c.date ? ` \u00B7 ${c.date}` : ''}
                </p>
                {c.desc && <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.5 }}>{c.desc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PUBLICATION
   ═══════════════════════════════════════════ */
function Publication() {
  return (
    <section id="publication" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
      <div className="section-label reveal">Publication</div>
      <div className="pub-card reveal">
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: 'var(--accent)', marginBottom: 12 }}>
          First Author &middot; Preprint &middot; SportRxiv &middot; 2026
        </p>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: 'var(--text)', lineHeight: 1.4, marginBottom: 12 }}>
          Penalty-kill personnel deployment and offensive-value exposure in NCAA ice hockey: a box-score decision-support framework
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
          Ravikumar, A., Kaya, T., Artan, N.S., Taber, C., Morris, J.R., Raval, M.S.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
          Analyzed penalty-kill decision-making across 55 NCAA Division I programs using reinforcement learning
          and probabilistic modeling. Validated via leave-one-season-out cross-validation and 500-game bootstrap
          resampling. Published with a 6-author cross-institutional team.
        </p>
        <a href="https://doi.org/10.51224/SportRxiv.972" target="_blank" rel="noopener" className="proj-link">
          Read on SportRxiv <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="section" style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px', textAlign: 'center' }}>
      <div className="section-label reveal" style={{ justifyContent: 'center' }}>Contact</div>
      <h3 className="font-serif reveal" style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: 16 }}>
        Let&apos;s talk.
      </h3>
      <p className="reveal" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
        I&apos;m looking for full-time roles starting January 2027. If you&apos;re building
        something where data drives real decisions, I&apos;d like to hear about it.
      </p>
      <a href="mailto:ravikumar.amr@northeastern.edu" className="btn-primary reveal">
        ravikumar.amr@northeastern.edu
      </a>
      <div className="reveal" style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 32 }}>
        {[
          { label: 'GitHub', url: 'https://github.com/Amy-way05' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amrutha218' },
          { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=RIVcDU8AAAAJ' },
        ].map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noopener"
            style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            {s.label}
          </a>
        ))}
      </div>
      <div className="footer-divider" style={{ margin: '64px auto 32px', maxWidth: 600 }} />
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Amrutha Ravikumar &middot; 2026</p>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Publication />
        <Contact />
      </main>
    </>
  );
}
