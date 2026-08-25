const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Quantium (via Forage)',
    date: 'May 2026',
    description: 'Retail analytics and commercial insights: cleaned transaction and customer data, analyzed chip purchasing behavior, identified key customer segments, evaluated trial store uplift using control stores.',
    skills: ['Python', 'Data Visualization'],
  },
  {
    title: 'NU Innovation Challenge Digital Badge',
    issuer: 'Northeastern University',
    date: '2026',
    description: 'Recognized for innovation and applied problem-solving in a university-wide challenge.',
    skills: [],
  },
  {
    title: 'Spatial Machine Learning and Statistics in Python',
    issuer: 'Online Certification',
    date: '',
    description: '',
    skills: ['Python', 'Spatial Analysis'],
  },
  {
    title: 'Data Visualization and Storytelling Basics',
    issuer: 'Online Certification',
    date: '',
    description: '',
    skills: ['Data Visualization'],
  },
  {
    title: 'Introduction to Analytics',
    issuer: 'Online Certification',
    date: '',
    description: '',
    skills: ['Analytics'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 section-glow-right">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-badge rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-semibold text-white">{cert.title}</h3>
                  <p className="text-xs text-indigo-300/60 mt-0.5">
                    {cert.issuer}{cert.date ? ` \u00B7 ${cert.date}` : ''}
                  </p>
                  {cert.description && (
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{cert.description}</p>
                  )}
                  {cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.skills.map((s, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/8 border border-indigo-500/10 text-slate-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
