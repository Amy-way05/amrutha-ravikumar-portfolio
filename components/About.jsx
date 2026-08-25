export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-sm font-semibold text-accent tracking-wider uppercase mb-8">
          About
        </h2>

        <div className="space-y-5 text-text-secondary text-base leading-relaxed max-w-3xl">
          <p>
            I came into analytics through business, not computer science. That means
            when I look at a dataset, my first question is always what decision this
            is supposed to change, and whether the person using the output can
            actually trust it.
          </p>
          <p>
            Right now I&apos;m finishing my Master&apos;s in Applied Machine Intelligence at
            Northeastern University (GPA 3.87, graduating December 2026). Over the past
            year I&apos;ve published first-author ML research, built evaluation pipelines
            for nonprofits, and designed databases that reconcile messy federal data
            across 72,000+ census tracts.
          </p>
          <p>
            I work across the full arc of a data problem: scoping it, cleaning the
            data, building the model, validating it properly, and communicating what
            it means to someone who doesn&apos;t live in the code.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '3.87', label: 'GPA' },
            { value: '13,777', label: 'Penalty outcomes analyzed' },
            { value: '72,531', label: 'Census tracts integrated' },
            { value: '1st', label: 'Author, published preprint' },
          ].map((stat, i) => (
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
