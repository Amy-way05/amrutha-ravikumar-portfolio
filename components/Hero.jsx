'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Photo */}
          <div className="fade-up shrink-0">
            <div className="photo-ring">
              <div className="photo-inner w-40 h-40 md:w-48 md:h-48">
                <img
                  src="/profile.jpg"
                  alt="Amrutha Ravikumar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/50 to-violet-900/50 text-4xl font-display font-bold text-indigo-300">AR</div>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-mono text-indigo-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 pulse-dot" />
                Open to opportunities, Jan 2027
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight fade-up fade-up-delay-1">
              Amrutha Ravikumar
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-display font-medium gradient-text fade-up fade-up-delay-2">
              AI/ML Engineer &middot; Data Scientist &middot; Applied Researcher
            </p>

            <p className="mt-5 text-base text-slate-400 max-w-xl leading-relaxed fade-up fade-up-delay-3">
              Published first-author ML researcher with a business foundation.
              I build end-to-end pipelines that turn messy data into decisions people trust.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 fade-up fade-up-delay-4">
              <a href="#projects" className="cta-primary px-6 py-3 rounded-lg text-white font-semibold text-sm">
                See my work
              </a>
              <a href="#contact" className="cta-secondary px-6 py-3 rounded-lg text-indigo-300 text-sm font-medium">
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 fade-up fade-up-delay-5">
              <a href="https://github.com/Amy-way05" target="_blank" rel="noopener"
                className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-mono">GitHub</a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a href="https://www.linkedin.com/in/amrutha218" target="_blank" rel="noopener"
                className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-mono">LinkedIn</a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a href="https://scholar.google.com/citations?user=RIVcDU8AAAAJ" target="_blank" rel="noopener"
                className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-mono">Scholar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      dots.forEach(d => {
        const wave = Math.sin(t * 0.001 + d.phase) * 0.5 + 0.5;
        d.r = d.baseR + wave * 1.2;
        const alpha = 0.15 + wave * 0.2;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 163, 23, ${alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-mono text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            Open to opportunities, Jan 2027
          </div>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight fade-up fade-up-delay-1">
          I build models people<br />
          <span className="text-accent">can act on.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed fade-up fade-up-delay-2">
          ML Research Analyst with a published first-author preprint,
          a business background, and a habit of taking messy data
          all the way to a decision someone trusts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-delay-3">
          <a href="#projects"
            className="px-6 py-3 bg-accent text-midnight font-semibold rounded-lg hover:bg-accent-light transition-colors text-sm">
            See my work
          </a>
          <a href="#contact"
            className="px-6 py-3 border border-border text-text-secondary rounded-lg hover:border-accent hover:text-accent transition-colors text-sm">
            Get in touch
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-text-muted fade-up fade-up-delay-4">
          <a href="https://github.com/Amy-way05" target="_blank" rel="noopener"
            className="hover:text-accent transition-colors text-sm font-mono">GitHub</a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <a href="https://www.linkedin.com/in/amrutha218" target="_blank" rel="noopener"
            className="hover:text-accent transition-colors text-sm font-mono">LinkedIn</a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <a href="https://scholar.google.com/citations?user=RIVcDU8AAAAJ" target="_blank" rel="noopener"
            className="hover:text-accent transition-colors text-sm font-mono">Scholar</a>
        </div>
      </div>
    </section>
  );
}
