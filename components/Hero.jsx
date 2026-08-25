'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let dots = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.floor(canvas.offsetWidth / 50);
      const rows = Math.floor(canvas.offsetHeight / 50);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: 25 + i * 50,
            y: 25 + j * 50,
            baseR: 1.5,
            r: 1.5,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

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
