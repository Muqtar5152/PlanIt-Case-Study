import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const STATS = [
  { label: 'My Role', value: 'End-to-End UX Designer' },
  { label: 'Duration', value: '4 Weeks' },
  { label: 'Tools', value: 'Figma · Miro · Google Forms' },
  { label: 'Platform', value: 'Mobile App (iOS & Android)' },
];

export default function ProjectSnapshot() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="01" label="Project Snapshot" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/[0.07] rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 flex flex-col gap-2 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover:border-lime/25"
            >
              <span className="font-dm text-[11px] uppercase tracking-[0.12em] text-muted_text font-medium">
                {stat.label}
              </span>
              <span className="font-syne font-bold text-base text-charcoal">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}