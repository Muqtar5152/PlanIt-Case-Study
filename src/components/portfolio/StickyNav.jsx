import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Research', href: '#research' },
  { label: 'Personas', href: '#personas' },
  { label: 'Solution', href: '#solution' },
  { label: 'Thinking', href: '#product-thinking' },
  { label: 'Design', href: '#design-system' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Screens', href: '#final-screens' },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.07)]'
          : 'bg-transparent'
      }`}
    >
      <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="font-syne font-extrabold text-xl tracking-tight text-forest">
        Plan<span className="text-lime">It</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`relative text-[11px] uppercase tracking-[0.1em] font-dm font-medium transition-colors duration-300 ${
              active === link.href.slice(1)
                ? 'text-lime'
                : 'text-muted_text hover:text-lime'
            }`}
          >
            {link.label}
            {active === link.href.slice(1) && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}