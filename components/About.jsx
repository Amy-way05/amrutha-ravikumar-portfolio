export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-glow-left">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            About
          </h2>
        </div>

        <div className="space-y-5 text-slate-400 text-base leading-relaxed max-w-3xl">
          <p className="text-lg text-slate-300">
            I came into analytics through business, which means when I look at a
            dataset, my first question is always what decision this is supposed to
            change and whether the person using the output can actually trust it.
          </p>
          <p>
            I&apos;m finishing my Master&apos;s in Applied Machine Intelligence at
            Northeastern University (GPA 4.0, graduating December 2026). Over the
            past year I&apos;ve published first-author ML research, built evaluation
            pipelines for nonprofits across Maine, and designed databases that
            reconcile messy federal data across 72,000+ census tracts.
          </p>
          <p>
            I work across the full arc of a data problem: scoping it, cleaning the
            data, building the model, validating it properly, and communicating what
            it means to the people who need to act on it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '4.0', label: 'GPA' },
            { value: '13,777', label: 'Penalty outcomes analyzed' },
            { value: '72,531', label: 'Census tracts integrated' },
            { value: '1st', label: 'Author, published preprint' },
          ].map((stat, i) => (
            <div key={i} className="stat-card p-5 rounded-xl text-center">
              <div className="font-display text-2xl font-bold text-indigo-300">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
            <div key={i} className="p-4 rounded-lg bg-surface border border-border">
              <div className="font-display text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
