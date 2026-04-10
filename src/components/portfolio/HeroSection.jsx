import ScrollReveal from './ScrollReveal';

const TAGS = ['UX Research', 'Product Design', 'AI Integration', 'Mobile App', '4 Weeks'];

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 pt-20 pb-16">
      <ScrollReveal>
        <p className="font-dm text-[11px] uppercase tracking-[0.15em] text-muted_text mb-6">
          Case Study — 01 · UX / Product Design
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h1 className="font-syne font-extrabold text-[72px] md:text-[110px] lg:text-[130px] leading-[0.9] tracking-[-0.03em] text-forest mb-6">
          Plan<span className="text-lime">It</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="font-syne font-normal text-xl md:text-[26px] text-smoke max-w-2xl mb-10 leading-snug">
          Designing an AI-powered planner that actually thinks like a student
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap gap-3 mb-16">
          {TAGS.map(tag => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.08em] font-dm font-medium text-forest border border-lime/30 bg-lime/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="PlanIt hero - abstract 3D composition of organized glass blocks and glowing green spheres"
            className="w-full h-auto object-cover"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}