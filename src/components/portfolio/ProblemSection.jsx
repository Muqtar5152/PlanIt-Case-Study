import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

export default function ProblemSection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="02" label="The Problem" />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <ScrollReveal delay={0.1}>
          <blockquote className="border-l-4 border-lime pl-6">
            <p className="font-syne font-bold text-2xl md:text-[28px] leading-snug text-charcoal">
              Students' tools aren't broken — they're just{' '}
              <span className="text-lime">not smart enough.</span>
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-5">
            <p className="font-dm text-[15px] text-smoke leading-[1.85]">
              Students rely on a patchwork of sticky notes, Google Calendar, and memory to manage assignments. These tools have zero intelligence — no prioritization, no adaptive reminders, no LMS integration.
            </p>
            <p className="font-dm text-[15px] text-smoke leading-[1.85]">
              The result: chronic procrastination, all-nighters, and academic anxiety. The problem isn't motivation — it's that the tools demand more effort than they save.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}