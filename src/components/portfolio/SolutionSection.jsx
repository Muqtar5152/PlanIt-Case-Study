import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const FEATURES = [
  {
    icon: '🤖',
    title: 'AI Auto-Scheduling',
    body: "Breaks assignments into sub-tasks and blocks study time automatically. Adapts to energy patterns — night owl mode included.",
  },
  {
    icon: '🔗',
    title: 'LMS Sync',
    body: "Connects to Canvas, Blackboard, and Google Classroom. Deadlines appear the moment they're posted — zero manual entry.",
  },
  {
    icon: '🔔',
    title: 'Adaptive Reminders',
    body: "Learns your procrastination patterns and nudges you before it's too late — not the morning it's due.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <div className="bg-forest rounded-3xl px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="text-center mb-14">
            <SectionHeader number="05" label="The Solution" className="justify-center" />
            <h2 className="font-syne font-extrabold text-3xl md:text-[46px] text-white leading-tight mb-4 max-w-3xl mx-auto">
              What if your planner was as{' '}
              <span className="text-lime">smart</span>{' '}
              as your professor?
            </h2>
            <p className="font-dm text-[15px] text-white/55 max-w-2xl mx-auto">
              PlanIt uses AI to auto-schedule, auto-break, and auto-remind — so students focus on learning, not logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white/5 border border-white/[0.08] rounded-2xl p-7 hover:border-t-lime hover:border-t-[3px] transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-lime/15 flex items-center justify-center text-2xl mb-5">
                    {f.icon}
                  </div>
                  <h3 className="font-syne font-bold text-lg text-white mb-2">{f.title}</h3>
                  <p className="font-dm text-sm text-white/55 leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}