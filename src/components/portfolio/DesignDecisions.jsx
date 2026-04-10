import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const DECISIONS = [
  {
    chose: { title: 'AI Toggle on Add Task screen', body: 'Gives users a sense of control. Research showed users feared losing autonomy to AI.' },
    rejected: 'Always-on AI that auto-fills fields without asking',
  },
  {
    chose: { title: 'Bottom Nav with 5 persistent tabs', body: 'Students use the app in bursts between classes. Every key action must be one tap away.' },
    rejected: 'Hamburger menu that hides primary navigation',
  },
  {
    chose: { title: 'Green as the primary accent color', body: 'Green signals growth and progress — perfectly aligned with a student achievement use case.' },
    rejected: 'Generic blue — the default productivity app palette',
  },
];

export default function DesignDecisions() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="06" label="Key Design Decisions" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-syne font-extrabold text-3xl md:text-[42px] text-charcoal leading-tight mb-3">
          Why we chose this over the alternative
        </h2>
        <p className="font-dm text-[15px] text-smoke mb-14 max-w-lg">
          Every decision was validated against research — not personal preference.
        </p>
      </ScrollReveal>

      <div className="space-y-5">
        {DECISIONS.map((d, i) => (
          <ScrollReveal key={i} delay={0.1 + i * 0.08}>
            <div className="bg-white rounded-2xl border border-black/[0.07] p-6 md:p-8 hover:-translate-y-0.5 hover:border-lime/25 hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_80px_2fr] gap-6 items-center">
                {/* We Chose */}
                <div>
                  <span className="font-dm text-[10px] uppercase tracking-[0.12em] text-lime font-bold mb-2 block">
                    We Chose
                  </span>
                  <h4 className="font-syne font-bold text-base text-charcoal mb-1">
                    {d.chose.title}
                  </h4>
                  <p className="font-dm text-sm text-smoke leading-relaxed">
                    {d.chose.body}
                  </p>
                </div>

                {/* VS Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-lime/10 border border-lime/20 font-syne font-bold text-xs text-forest">
                    VS
                  </span>
                </div>

                {/* Instead Of */}
                <div>
                  <span className="font-dm text-[10px] uppercase tracking-[0.12em] text-muted_text font-bold mb-2 block">
                    Instead Of
                  </span>
                  <p className="font-dm text-sm text-smoke leading-relaxed">
                    {d.rejected}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}