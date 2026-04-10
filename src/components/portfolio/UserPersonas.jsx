import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import PersonaCard from './PersonaCard';

const PERSONAS = [
  {
    initials: 'EC',
    name: 'Emma Chen',
    meta: '18 · 1st Year Biology · Part-time Barista',
    struggle: "Forgets deadlines, can't break down lab reports, spends hours deciding what to work on first.",
    needs: 'AI task decomposition · Auto reminders · One-tap prioritization · Syllabus sync',
    quote: "I need an app that doesn't make me think.",
  },
  {
    initials: 'RP',
    name: 'Raj Patel',
    meta: '21 · 3rd Year CS · Startup Intern',
    struggle: "Highly organized, but spends more time planning than doing. His tools don't talk to each other.",
    needs: 'Cross-tool sync · Energy-based scheduling · AI time estimation · Conflict alerts',
    quote: "I need my planner to be as smart as my IDE.",
  },
  {
    initials: 'SM',
    name: 'Sophia Müller',
    meta: '24 · PhD Psychology · Researcher',
    struggle: "One delayed experiment ruins her whole week. Can't estimate time for open-ended research.",
    needs: 'Flexible rescheduling · Progress tracking · Guilt-free breaks · Academic templates',
    quote: "I spend more time color-coding than writing.",
  },
];

export default function UserPersonas() {
  return (
    <section id="personas" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="04" label="User Personas" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-syne font-extrabold text-3xl md:text-[42px] text-charcoal leading-tight mb-3">
          Three students. Three very different struggles.
        </h2>
        <p className="font-dm text-[15px] text-smoke mb-14 max-w-lg">
          Each persona shaped a different layer of PlanIt's feature set.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PERSONAS.map((p, i) => (
          <ScrollReveal key={i} delay={0.15 + i * 0.1}>
            <PersonaCard {...p} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}