export default function Publication() {
  return (
    <section id="publication" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-sm font-semibold text-accent tracking-wider uppercase mb-8">
          Publication
        </h2>

        <div className="rounded-xl bg-surface border border-border p-6 sm:p-8 glow">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs text-accent mb-2">First Author &middot; Preprint &middot; 2026</p>
              <h3 className="font-display text-lg font-semibold text-text-primary leading-snug mb-3">
                Penalty-kill personnel deployment and offensive-value exposure in NCAA ice hockey: a box-score decision-support framework
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Ravikumar, A., Kaya, T., Artan, N.S., Taber, C., Morris, J.R., Raval, M.S.
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                Analyzed penalty-kill decision-making across 55 NCAA Division I programs using
                reinforcement learning and probabilistic modeling. Validated via leave-one-season-out
                cross-validation and 500-game bootstrap resampling. Published on SportRxiv with a
                6-author cross-institutional team.
              </p>
              <a href="https://doi.org/10.51224/SportRxiv.972" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors">
                Read on SportRxiv
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
