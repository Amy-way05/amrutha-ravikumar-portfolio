const projects = [
  {
    title: 'Food Intervention Priority Index',
    abbr: 'FIPI',
    description: 'Designed a PostgreSQL database integrating four federal datasets (USDA, Census ACS, County Health Rankings, SNAP) across 72,531 census tracts. Built a composite vulnerability scoring model ranking counties by compounding social determinants of risk, validated with statistical significance (p < 0.001). Interactive Tableau dashboards at state and county granularity.',
    tech: ['PostgreSQL', 'SQL', 'Tableau', 'Python'],
    links: {
      live: 'https://amy-way05.github.io/food-intervention-priority-index/',
      github: 'https://github.com/Amy-way05/food-intervention-priority-index',
    },
    highlight: '72,531 census tracts \u00B7 4 federal datasets \u00B7 51 states',
  },
  {
    title: 'Consumer Segmentation & Motivation Analysis',
    abbr: 'CSMA',
    description: 'Built segmentation models on 3,000+ survey responses for Wyman & Son (ME) using PCA for dimensionality reduction and K-Means clustering with statistical validation (p < 0.001). Identified high-intent teen/tween households as the primary growth segment, directly informing the client\'s marketing strategy.',
    tech: ['R', 'Python', 'PCA', 'K-Means', 'Tableau'],
    links: {},
    highlight: '3,000+ survey responses \u00B7 client-facing deliverable',
  },
  {
    title: 'NCAA Hockey Intelligence System',
    abbr: 'NHIS',
    description: 'End-to-end research pipeline: scraped 5 seasons of play-by-play data, integrated macro and micro datasets into a unified database, built Q-learning and Markov Chain models for penalty-kill decision-making, and published findings as a first-author preprint.',
    tech: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Selenium', 'NumPy'],
    links: {
      github: 'https://github.com/Amy-way05/shu-hockey-intelligence',
      paper: 'https://doi.org/10.51224/SportRxiv.972',
    },
    highlight: '13,777 penalty outcomes \u00B7 55 D1 programs \u00B7 published',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 section-glow-left">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            Projects
          </h2>
        </div>
        <p className="text-slate-500 text-sm mb-12 max-w-xl">
          Each project started with a real problem and ended with something someone could use.
        </p>

        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div key={i} className="project-card rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-indigo-400/60">{proj.abbr}</span>
                  <h3 className="font-display text-xl font-semibold text-white mt-1">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex gap-3 shrink-0 mt-1">
                  {proj.links.github && (
                    <a href={proj.links.github} target="_blank" rel="noopener"
                      className="text-slate-500 hover:text-indigo-400 transition-colors" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {proj.links.live && (
                    <a href={proj.links.live} target="_blank" rel="noopener"
                      className="text-slate-500 hover:text-indigo-400 transition-colors" aria-label="Live">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                  {proj.links.paper && (
                    <a href={proj.links.paper} target="_blank" rel="noopener"
                      className="text-slate-500 hover:text-indigo-400 transition-colors text-xs font-mono hover:underline">
                      DOI
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{proj.description}</p>
              <div className="font-mono text-xs text-indigo-400/50 mb-4">{proj.highlight}</div>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span key={j} className="skill-tag text-xs px-2.5 py-1 rounded-md text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-sm font-semibold text-accent tracking-wider uppercase mb-4">
          Projects
        </h2>
        <p className="text-text-secondary text-base mb-12 max-w-2xl">
          Each project started with a real problem and ended with something someone
          could use. Here are the ones I keep coming back to.
        </p>

        <div className="space-y-8">
          {projects.map((proj, i) => (
            <div key={i} className="project-card rounded-xl bg-surface border border-border p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-accent">{proj.abbr}</span>
                  <h3 className="font-display text-xl font-semibold text-text-primary mt-1">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex gap-3 shrink-0">
                  {proj.links.github && (
                    <a href={proj.links.github} target="_blank" rel="noopener"
                      className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {proj.links.live && (
                    <a href={proj.links.live} target="_blank" rel="noopener"
                      className="text-text-muted hover:text-accent transition-colors" aria-label="Live">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                  {proj.links.paper && (
                    <a href={proj.links.paper} target="_blank" rel="noopener"
                      className="text-text-muted hover:text-accent transition-colors text-xs font-mono hover:underline">
                      DOI
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {proj.description}
              </p>

              <div className="font-mono text-xs text-accent/70 mb-4">{proj.highlight}</div>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded bg-midnight border border-border text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
