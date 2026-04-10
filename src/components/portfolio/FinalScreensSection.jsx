import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const SCREENS = [
  { label: 'Sign Up', screen: '01', url: imagePath('screen-01-sign-up.png') },
  { label: 'Login', screen: '02', url: imagePath('screen-02-login.png') },
  { label: 'Login — Active', screen: '03', url: imagePath('screen-03-login-active.png') },
  { label: 'Home Dashboard', screen: '04', url: imagePath('screen-04-home-dashboard.png') },
  { label: 'Add Task', screen: '05', url: imagePath('screen-05-add-task.png') },
  { label: 'AI Mode — Empty', screen: '06', url: imagePath('screen-06-ai-empty.png') },
  { label: 'AI Mode — Filled', screen: '07', url: imagePath('screen-07-ai-filled.png') },
  { label: 'AI Mode — Add Task', screen: '08', url: imagePath('screen-08-ai-add-task.png') },
  { label: 'Added to Schedule', screen: '09', url: imagePath('screen-09-added-to-schedule.png') },
  { label: 'Calendar', screen: '10', url: imagePath('screen-10-calendar.png') },
  { label: 'Calendar — Tasks Added', screen: '11', url: imagePath('screen-11-calendar-tasks-added.png') },
  { label: 'Calendar — Inline Add', screen: '12', url: imagePath('screen-12-calendar-inline-add.png') },
  { label: 'Progress', screen: '13', url: imagePath('screen-13-progress.png') },
  { label: 'Pomodoro Timer', screen: '14', url: imagePath('screen-14-pomodoro.png') },
  { label: 'Profile', screen: '15', url: imagePath('screen-15-profile.png') },
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
            src={imagePath('final-preview.png')}
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