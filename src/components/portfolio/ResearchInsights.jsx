import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const INSIGHTS = [
  {
    icon: '📅',
    stat: '80%',
    title: 'Miss deadlines monthly',
    body: "They juggle 3+ tools and still fall through the cracks. A tool failure, not a student failure.",
  },
  {
    icon: '🗂',
    stat: '65%',
    title: 'Use Calendar + sticky notes',
    body: "Using two tools to do one job signals the primary tool simply isn't working.",
  },
  {
    icon: '⚡',
    stat: '82%',
    title: 'Would switch to AI planner',
    body: "The appetite for smarter planning is real and urgent. Students are ready.",
  },
];

const QUOTES = [
  {
    text: "My schedule gets chaotic when deadlines overlap. I never know where to start.",
    label: "8 of 10 students · Interview Q2",
  },
  {
    text: "I procrastinate until the last minute. I don't have a system that stops me.",
    label: "7 of 10 students · Interview Q1",
  },
  {
    text: "I need an app that doesn't make me think. Just tell me what to do first.",
    label: "Direct user quote · Interview Q4",
  },
];

export default function ResearchInsights() {
  return (
    <section id="research" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="03" label="Research & Insights" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-syne font-extrabold text-3xl md:text-[52px] text-charcoal leading-tight mb-4">
          What students actually told us
        </h2>
        <p className="font-dm text-[15px] text-smoke mb-14 max-w-xl">
          10 interviews + survey of 50 students revealed patterns no one was talking about.
        </p>
      </ScrollReveal>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {INSIGHTS.map((item, i) => (
          <ScrollReveal key={i} delay={0.15 + i * 0.1}>
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 hover:-translate-y-1 hover:border-lime/25 hover:shadow-lg transition-all duration-300 h-full">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <p className="font-syne font-extrabold text-[44px] text-lime leading-none mb-2">
                {item.stat}
              </p>
              <h3 className="font-syne font-bold text-lg text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="font-dm text-sm text-smoke leading-relaxed">
                {item.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Quote Bubbles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {QUOTES.map((q, i) => (
          <ScrollReveal key={i} delay={0.1 + i * 0.1}>
            <div className="bg-lime/[0.06] border border-lime/[0.15] rounded-2xl p-6 h-full flex flex-col justify-between">
              <p className="font-dm italic text-sm text-smoke leading-relaxed mb-4">
                "{q.text}"
              </p>
              <span className="font-dm font-bold text-[10px] uppercase tracking-[0.1em] text-lime">
                {q.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}