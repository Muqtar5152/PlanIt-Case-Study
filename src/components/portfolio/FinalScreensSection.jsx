import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const createScreenArt = (label, screen, accent = '#d9ff6f') => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 960">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f8fafc" />
        <stop offset="100%" stop-color="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect width="720" height="960" rx="56" fill="url(#bg)" />
    <rect x="54" y="54" width="612" height="64" rx="20" fill="#0f172a" opacity="0.92" />
    <circle cx="96" cy="86" r="16" fill="${accent}" />
    <rect x="140" y="74" width="180" height="24" rx="12" fill="#ffffff" opacity="0.9" />
    <rect x="54" y="156" width="612" height="248" rx="36" fill="#ffffff" />
    <rect x="86" y="188" width="280" height="22" rx="11" fill="#0f172a" opacity="0.8" />
    <rect x="86" y="232" width="420" height="18" rx="9" fill="#64748b" opacity="0.7" />
    <rect x="86" y="274" width="360" height="18" rx="9" fill="#64748b" opacity="0.5" />
    <rect x="86" y="320" width="180" height="58" rx="29" fill="${accent}" />
    <rect x="54" y="448" width="612" height="180" rx="36" fill="#0f172a" opacity="0.92" />
    <rect x="86" y="488" width="210" height="20" rx="10" fill="#ffffff" opacity="0.9" />
    <rect x="86" y="530" width="520" height="16" rx="8" fill="#ffffff" opacity="0.7" />
    <rect x="86" y="566" width="420" height="16" rx="8" fill="#ffffff" opacity="0.5" />
    <rect x="54" y="664" width="612" height="242" rx="36" fill="#ffffff" />
    <text x="86" y="758" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="#0f172a" opacity="0.16">${screen}</text>
    <text x="86" y="816" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#0f172a">${label}</text>
  </svg>
`);

const SCREENS = [
  { label: 'Sign Up', screen: '01', url: createScreenArt('Sign Up', '01') },
  { label: 'Login', screen: '02', url: createScreenArt('Login', '02') },
  { label: 'Login — Active', screen: '03', url: createScreenArt('Login — Active', '03') },
  { label: 'Home Dashboard', screen: '04', url: createScreenArt('Home Dashboard', '04') },
  { label: 'Add Task', screen: '05', url: createScreenArt('Add Task', '05') },
  { label: 'AI Mode — Empty', screen: '06', url: createScreenArt('AI Mode — Empty', '06') },
  { label: 'AI Mode — Filled', screen: '07', url: createScreenArt('AI Mode — Filled', '07') },
  { label: 'AI Mode — Add Task', screen: '08', url: createScreenArt('AI Mode — Add Task', '08') },
  { label: 'Added to Schedule', screen: '09', url: createScreenArt('Added to Schedule', '09') },
  { label: 'Calendar', screen: '10', url: createScreenArt('Calendar', '10') },
  { label: 'Calendar — Tasks Added', screen: '11', url: createScreenArt('Calendar — Tasks Added', '11') },
  { label: 'Calendar — Inline Add', screen: '12', url: createScreenArt('Calendar — Inline Add', '12') },
  { label: 'Progress', screen: '13', url: createScreenArt('Progress', '13') },
  { label: 'Pomodoro Timer', screen: '14', url: createScreenArt('Pomodoro Timer', '14') },
  { label: 'Profile', screen: '15', url: createScreenArt('Profile', '15') },
];

export default function FinalScreensSection() {
  return (
    <section id="final-screens" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="09" label="Final UI Screens" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-syne font-extrabold text-3xl md:text-[48px] text-charcoal leading-tight mb-3">
              From onboarding to daily flow
            </h2>
            <p className="font-dm text-[15px] text-smoke max-w-xl leading-relaxed">
              15 screens. Every state considered — empty, filled, error, success. The full user journey from first launch to focused work session.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/TvE9g8vlYnjRcdZN5ksgtq/PlanIt-CS-and-Ui?t=2IT6kIEslrGf7kQw-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-dm font-medium text-sm hover:bg-lime hover:text-forest transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            View Prototype
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </ScrollReveal>

      {/* Preview mockup hero */}
      <ScrollReveal delay={0.15}>
        <div className="mb-16 rounded-2xl overflow-hidden bg-surface border border-black/[0.06]">
          <img
            src={createScreenArt('Final UI Preview', 'PlanIt')}
            alt="PlanIt — Final UI Preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </ScrollReveal>

      {/* Screen grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {SCREENS.map((s, i) => (
          <ScrollReveal key={i} delay={0.04 * (i % 5)}>
            <div className="group flex flex-col gap-3">
              <div className="rounded-[18px] overflow-hidden border border-black/[0.07] bg-white shadow-sm group-hover:shadow-[0_8px_32px_rgba(109,173,4,0.12)] group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src={s.url}
                  alt={s.label}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-center gap-2 px-1">
                <span className="font-dm text-[10px] text-lime font-bold tracking-[0.08em]">{s.screen}</span>
                <span className="font-dm text-[11px] text-smoke truncate">{s.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}