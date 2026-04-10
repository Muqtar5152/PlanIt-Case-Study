import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const NEXT_STEPS = [
  'A/B test AI toggle vs always-on AI with 20 users to validate the autonomy hypothesis',
  'Validate LMS sync with a real Canvas API integration and measure time-to-value',
  'Add a gamification layer — streaks and rewards carry high retention potential',
];

const LEARNINGS = [
  "Students don't need more features. They need one tool that thinks for them. Restraint is a design decision.",
  "Making AI feel helpful, not creepy was the hardest challenge — the toggle was the breakthrough moment.",
  "Color carries meaning. Green wasn't just aesthetic — it was the emotional core: growth, progress, go.",
];

export default function OutcomesReflection() {
  return (
    <section id="outcomes" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="08" label="Outcomes & Reflection" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* What I'd do next */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-[20px] border border-black/[0.07] p-8 md:p-10 h-full hover:-translate-y-1 hover:border-lime/25 hover:shadow-lg transition-all duration-300">
            <h3 className="font-syne font-bold text-xl text-charcoal mb-6">What I'd do next</h3>
            <ul className="space-y-4">
              {NEXT_STEPS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime flex-shrink-0 mt-1.5" />
                  <p className="font-dm text-sm text-smoke leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* What I learned */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-[20px] border border-black/[0.07] p-8 md:p-10 h-full hover:-translate-y-1 hover:border-lime/25 hover:shadow-lg transition-all duration-300">
            <h3 className="font-syne font-bold text-xl text-charcoal mb-6">What I learned</h3>
            <ul className="space-y-4">
              {LEARNINGS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-lime flex-shrink-0 mt-1.5" />
                  <p className="font-dm text-sm text-smoke leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}