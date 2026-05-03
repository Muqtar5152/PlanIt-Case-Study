import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const TAGS = ['UX Research', 'Product Design', 'AI Integration', 'Mobile App', '4 Weeks'];

const FRAME_MODULES = import.meta.glob('./aninate_202605031950_*.jpg', {
  eager: true,
  import: 'default',
});

const FRAME_SOURCES = Object.entries(FRAME_MODULES)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, source]) => source);

const preloadFrames = frames => {
  frames.forEach(source => {
    const image = new Image();
    image.src = source;
  });
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);

  useEffect(() => {
    preloadFrames(FRAME_SOURCES);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (!FRAME_SOURCES.length) {
      return;
    }

    const nextIndex = Math.min(
      FRAME_SOURCES.length - 1,
      Math.max(0, Math.round(latest * (FRAME_SOURCES.length - 1)))
    );

    setFrameIndex(nextIndex);
  });

  const currentFrame = FRAME_SOURCES[frameIndex] ?? FRAME_SOURCES[0];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative isolate min-h-[120vh] overflow-hidden bg-surface"
    >
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={currentFrame}
            alt="PlanIt hero background sequence"
            className="h-full w-full object-cover object-center"
            style={{ scale, y }}
            initial={false}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),rgba(255,255,255,0.18)_52%,rgba(244,244,238,0.9))]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/20 to-surface/90" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(180,255,88,0.18),transparent_32%,transparent_68%,rgba(23,34,27,0.12))]" />
        </div>

        <div className="relative z-10 flex h-full items-center px-6 pt-20 pb-16 md:px-10 lg:px-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="font-dm text-[11px] uppercase tracking-[0.15em] text-muted_text mb-6">
                Case Study — 01 · UX / Product Design
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-syne font-extrabold text-[72px] md:text-[110px] lg:text-[130px] leading-[0.9] tracking-[-0.03em] text-forest mb-6 drop-shadow-[0_2px_20px_rgba(255,255,255,0.35)]">
                Plan<span className="text-lime">It</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-syne font-normal text-xl md:text-[26px] text-smoke max-w-2xl mb-10 leading-snug">
                Designing an AI-powered planner that actually thinks like a student
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10">
                {TAGS.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.08em] font-dm font-medium text-forest border border-lime/30 bg-white/50 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="inline-flex items-center gap-3 rounded-full border border-forest/10 bg-white/55 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-forest/80 shadow-[0_18px_40px_rgba(14,28,20,0.08)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_0_6px_rgba(182,255,61,0.18)]" />
                Scroll to scrub through the frame sequence
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}