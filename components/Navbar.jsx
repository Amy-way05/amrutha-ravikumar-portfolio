'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publication', href: '#publication' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#060B18]/90 backdrop-blur-md border-b border-indigo-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg text-white hover:text-indigo-400 transition-colors">
          AR<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href="/Amrutha_Ravikumar_Resume.pdf" target="_blank"
            className="text-sm font-medium px-4 py-2 border border-indigo-500/30 text-indigo-300 rounded-lg hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all">
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-indigo-400" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-indigo-500/10 px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-slate-400 hover:text-indigo-400 transition-colors py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
            </a>
          ))}
          <a href="/Amrutha_Ravikumar_Resume.pdf" target="_blank"
            className="text-sm font-medium px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-colors">
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-accent" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 space-y-3">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-secondary hover:text-accent transition-colors py-1">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
