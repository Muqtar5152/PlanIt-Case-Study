import ScrollReveal from './ScrollReveal';

const LINKS = [
  { label: 'Behance ↗', href: 'https://www.behance.net/muqtarpasha' },
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187' },
];

export default function Footer() {
  return (
    <ScrollReveal>
      <footer className="border-t border-black/[0.07] mx-6 md:mx-10 lg:mx-20 py-10 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-syne font-extrabold text-xl text-forest">
            Plan<span className="text-lime">It</span>
          </div>

          <p className="font-dm text-[13px] text-muted_text">
            UX Case Study · 2024 · Muqtar
          </p>

          <div className="flex items-center gap-6">
            {LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-dm text-sm text-smoke hover:text-lime transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
}