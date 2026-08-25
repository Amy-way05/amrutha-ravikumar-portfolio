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
    tags: ['Python', 'Q-Learning', 'Markov Chains', 'Scikit-learn', 'BeautifulSoup'],
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
    tags: ['Python', 'NLP', 'TF-IDF', 'Pandas', 'Program Evaluation'],
  },
  {
    title: 'Customer Support Executive',
    org: 'Thinnai Experiences Pvt Ltd, India',
    sub: 'Hospitality SaaS platform',
    period: 'Feb 2023 \u2013 May 2024',
    points: [
      'Managed 600+ queries across a dual-sided platform supporting hosts and customers, from simple bookings to complex event coordination.',
      'Led knowledge transfer for 2 new-hire batches over 2 months, designing training on platform workflows and support tooling (Slack, Zapier, Google Sheets).',
    ],
    tags: ['Zapier', 'Slack', 'Google Sheets', 'SaaS'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-sm font-semibold text-accent tracking-wider uppercase mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-border hover:border-accent/40 transition-colors">
              <div className="absolute left-0 top-1 w-2.5 h-2.5 -translate-x-[5.5px] rounded-full bg-surface border-2 border-accent" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">{exp.title}</h3>
                  <p className="text-sm text-text-secondary">{exp.org}</p>
                  {exp.sub && <p className="text-xs text-text-muted">{exp.sub}</p>}
                </div>
                <span className="text-xs font-mono text-text-muted whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, k) => (
                  <span key={k} className="skill-tag text-xs px-2.5 py-1 rounded bg-surface border border-border text-text-muted">
                    {tag}
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
