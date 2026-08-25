export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            Contact
          </h2>
          <div className="accent-line w-8" style={{transform: 'scaleX(-1)'}} />
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s talk.
        </h3>

        <p className="text-slate-400 max-w-lg mx-auto mb-10">
          I&apos;m looking for full-time roles starting January 2027. If you&apos;re
          building something where data drives real decisions, I&apos;d like to hear about it.
        </p>

        <a href="mailto:ravikumar.amr@northeastern.edu"
          className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm">
          ravikumar.amr@northeastern.edu
        </a>

        <div className="mt-10 flex items-center justify-center gap-8">
          <a href="https://github.com/Amy-way05" target="_blank" rel="noopener"
            className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/amrutha218" target="_blank" rel="noopener"
            className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=RIVcDU8AAAAJ" target="_blank" rel="noopener"
            className="text-slate-500 hover:text-indigo-400 transition-colors text-sm">Google Scholar</a>
        </div>

        <div className="section-divider mt-16 mb-8" />

        <p className="text-xs text-slate-600">
          Amrutha Ravikumar &middot; 2026
        </p>
      </div>
    </section>
  );
}
      </div>
    </section>
  );
}
