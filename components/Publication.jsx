export default function Publication() {
  return (
    <section id="publication" className="py-24 px-6 section-glow-left">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            Publication
          </h2>
        </div>

        <div className="glass-card rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400">
                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-mono text-xs text-indigo-400 mb-2">First Author &middot; Preprint &middot; 2026</p>
              <h3 className="font-display text-lg font-semibold text-white leading-snug mb-3">
                Penalty-kill personnel deployment and offensive-value exposure in NCAA ice hockey: a box-score decision-support framework
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Ravikumar, A., Kaya, T., Artan, N.S., Taber, C., Morris, J.R., Raval, M.S.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Analyzed penalty-kill decision-making across 55 NCAA Division I programs using
                reinforcement learning and probabilistic modeling. Validated via leave-one-season-out
                cross-validation and 500-game bootstrap resampling. Published on SportRxiv with a
                6-author cross-institutional team.
              </p>
              <a href="https://doi.org/10.51224/SportRxiv.972" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
