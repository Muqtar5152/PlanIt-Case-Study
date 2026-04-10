import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const DECISIONS = [
  {
    num: '01',
    title: 'AI Toggle, Not AI Control',
    tags: ['AI', 'Behavior', 'Trust'],
    before: {
      label: 'Before',
      points: [
        'Manual entry planners offer zero intelligence',
        'Fully automated tools force decisions on users',
        'Neither approach earns long-term trust',
      ],
    },
    after: {
      label: 'After',
      body: "PlanIt surfaces an optional AI toggle at task creation — intelligence is invited, never imposed. Users opt in per task, per session.",
    },
    why: "Students resist automation because they fear losing authorship over their plan. The toggle **preserves perceived control** while still introducing behavioral intelligence. It's the difference between a tool that helps and one that takes over.",
    impact: ['Higher feature adoption during onboarding', 'Reduced drop-off at first AI interaction', 'Builds progressive trust in AI-assisted flows'],
  },
  {
    num: '02',
    title: 'Macro → Micro Task Decomposition',
    tags: ['Cognitive Load', 'Psychology', 'AI'],
    before: {
      label: 'Before',
      points: [
        'Users log tasks like "Write thesis" — vague and paralyzing',
        'Large tasks sit untouched until deadline panic',
        'No system to convert intent into action',
      ],
    },
    after: {
      label: 'After',
      body: "AI breaks large assignments into timed sub-tasks — 'Write thesis' becomes 4 focused 45-min blocks across 3 days, auto-slotted into open schedule windows.",
    },
    why: "**Procrastination is not a motivation problem — it's a scoping problem.** When a task has no clear starting point, the brain defaults to avoidance. Sub-task decomposition removes ambiguity, making the first step obvious and achievable.",
    impact: ['Task start rate increases significantly', 'Reduces cognitive paralysis before large assignments', 'Creates visible progress that fuels continued action'],
  },
  {
    num: '03',
    title: '"What Now?" — Daily Focus Screen',
    tags: ['UX', 'Decision Fatigue', 'Flow'],
    before: {
      label: 'Before',
      points: [
        'Students open planners to a wall of tasks — no guidance',
        'Decision fatigue sets in before any work begins',
        'Priority is determined by anxiety, not logic',
      ],
    },
    after: {
      label: 'After',
      body: "The home screen shows one prioritized task with context: why it's urgent, how long it takes, and the optimal time block to work on it — no list to scroll through.",
    },
    why: "**The goal is not to show everything — it's to eliminate choice.** Research consistently shows that presenting fewer options drives faster, more confident action. The daily focus screen borrows from the 'single task' design philosophy used in high-performance systems.",
    impact: ['Reduces time between opening app and starting work', 'Replaces anxiety-driven prioritization with data-driven clarity', 'Creates a daily ritual — the app becomes the starting point'],
  },
  {
    num: '04',
    title: 'Adaptive Reminders, Not Static Notifications',
    tags: ['Behavior', 'AI', 'Engagement'],
    before: {
      label: 'Before',
      points: [
        'Standard reminders fire at arbitrary set times',
        'Users dismiss them on habit, not on task readiness',
        'No system learns from user behavior over time',
      ],
    },
    after: {
      label: 'After',
      body: "PlanIt observes when users typically start tasks vs. when they intended to. Reminders shift forward based on individual procrastination patterns — before the crisis, not the morning of.",
    },
    why: "**A reminder that arrives when you're in class is noise. A reminder that arrives when you open your laptop is a nudge.** Context-awareness transforms notifications from interruptions into interventions. The AI does not predict the future — it learns the past.",
    impact: ['Higher reminder response rate', 'Task completion happens ahead of deadline panic', 'Users feel understood — not nagged'],
  },
  {
    num: '05',
    title: 'LMS Auto-Sync vs Manual Entry',
    tags: ['Friction', 'Integration', 'Adoption'],
    before: {
      label: 'Before',
      points: [
        'Manual entry is the single biggest barrier to planner adoption',
        'Students forget to log tasks — the planner becomes incomplete',
        'An incomplete planner is immediately abandoned',
      ],
    },
    after: {
      label: 'After',
      body: "PlanIt connects directly to Canvas, Blackboard, and Google Classroom. Deadlines sync the moment professors post them — no manual entry required to maintain an accurate plan.",
    },
    why: "**The best tool is the one you don't have to maintain.** Planners fail not because students don't want to plan — but because maintaining a planner is itself a task. Eliminating that maintenance layer removes the largest adoption barrier in the category.",
    impact: ['Zero-friction onboarding for new users', 'Plan accuracy stays high without user effort', 'Turns a passive app into a proactive system'],
  },
  {
    num: '06',
    title: 'Energy-Based Scheduling, Not Time-Based',
    tags: ['Personalization', 'Productivity', 'AI'],
    before: {
      label: 'Before',
      points: [
        'Planners schedule tasks by availability, not by cognitive state',
        'Deep work gets placed at 8am for a night-owl student',
        'Poor timing leads to poor output — and task avoidance',
      ],
    },
    after: {
      label: 'After',
      body: "PlanIt learns whether a user is a morning thinker or a late-night focus type — and schedules cognitively demanding tasks during peak energy windows, with lighter work during low periods.",
    },
    why: "**Timing is a design variable.** Neuroscience shows that complex thinking requires peak alertness, while routine tasks can be done in cognitive downtime. Respecting biological patterns isn't a feature — it's fundamental to whether the plan gets executed.",
    impact: ['Better output quality on assigned work', 'Higher task completion on cognitively heavy items', 'Reduces the \"planned but didn\'t do it\" failure loop'],
  },
  {
    num: '07',
    title: 'Bottom Navigation for Burst Interaction',
    tags: ['UX', 'Navigation', 'Mobile'],
    before: {
      label: 'Before',
      points: [
        'Hamburger menus hide critical functions behind extra taps',
        'Students use planners in 30-second micro-sessions between classes',
        'High navigation friction = abandoned sessions',
      ],
    },
    after: {
      label: 'After',
      body: "Five persistent tabs live at the bottom — Today, Tasks, Add, Progress, Settings. Every core action requires exactly one tap from anywhere in the app.",
    },
    why: "**Mobile interaction is thumb-driven and time-compressed.** Students reach for their planner between lectures, on the bus, between bites. The design must respect that context — any friction becomes a reason to close the app. Bottom nav is not a style choice; it's a behavioral accommodation.",
    impact: ['Faster task logging in micro-sessions', 'No dead-end states requiring back navigation', 'Adds ≥1 task per session on average'],
  },
  {
    num: '08',
    title: 'Green as a Behavioral Signal, Not a Brand Color',
    tags: ['Psychology', 'Visual Design', 'Motivation'],
    before: {
      label: 'Before',
      points: [
        'Most productivity apps default to blue — calm but static',
        'Blue signals reliability, not momentum',
        'No visual system reinforces the act of making progress',
      ],
    },
    after: {
      label: 'After',
      body: "Green is used exclusively for completion states, progress indicators, and positive reinforcement moments — not as decoration. Incomplete items are neutral. Done items go green.",
    },
    why: "**Color can be behavioral infrastructure.** Green's cultural association with 'go,' growth, and success is deeply conditioned. When users see green appear as they complete tasks, the color itself becomes a micro-reward. The palette earns its keep — it does work.",
    impact: ['Subconscious motivation tied to completion', 'Clear visual hierarchy between done and pending', 'Color builds emotional meaning over repeated sessions'],
  },
  {
    num: '09',
    title: 'AI Time Estimation vs User Guesswork',
    tags: ['AI', 'Planning Accuracy', 'Behavior'],
    before: {
      label: 'Before',
      points: [
        'Students dramatically underestimate task duration — the planning fallacy',
        'Underestimation cascades: one wrong estimate breaks the entire week',
        'No tool corrects for this bias — they all trust user input',
      ],
    },
    after: {
      label: 'After',
      body: "PlanIt pre-fills time estimates based on task type, course difficulty, and historical data from similar users. Users can override — but they start from a calibrated baseline, not optimism.",
    },
    why: "**The planning fallacy is not a personal failure — it's a cognitive default.** Every human underestimates time. Designing a planning tool that trusts user time estimates without correction is designing for failure. The AI acts as a calibration layer, not a replacement for judgment.",
    impact: ['More realistic weekly plans that survive contact with reality', 'Fewer cascading deadline failures from single underestimates', 'Users improve their self-estimation accuracy over time'],
  },
  {
    num: '10',
    title: 'Reducing Planning Effort, Not Adding Features',
    tags: ['Product Strategy', 'Focus', 'Simplicity'],
    before: {
      label: 'Before',
      points: [
        'Competing products add more views, more filters, more customization',
        'Feature richness creates cognitive overhead before any work begins',
        'Power users are served — overwhelmed users are lost',
      ],
    },
    after: {
      label: 'After',
      body: "Every PlanIt feature is evaluated against one question: does this reduce the effort to start working, or does it add to it? Features that don't reduce effort are cut — regardless of how clever they are.",
    },
    why: "**The enemy of a planning tool is the planning tool itself.** If configuring and maintaining a system takes more energy than the work it organizes, users will abandon it. PlanIt is designed to disappear — to do its job so quietly that the student's only job is the actual assignment.",
    impact: ['Lower time-to-value on first session', 'Higher day-7 retention vs feature-heavy competitors', 'Product remains learnable as features grow'],
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Reduce thinking, not control',
    body: "The goal is not to automate the student's academic life. It's to eliminate the decisions that don't require their expertise — so they have more bandwidth for the ones that do.",
  },
  {
    num: '02',
    title: 'Show intelligence, don\'t claim it',
    body: "An AI that announces itself is an AI that hasn't earned trust yet. PlanIt's intelligence surfaces through better estimates, smarter reminders, and accurate suggestions — not badges or labels.",
  },
  {
    num: '03',
    title: 'Design for behavior, not intention',
    body: "Users intend to plan well. They rarely do. The design accounts for the gap between what users say they'll do and what they actually do — and builds systems that work with human defaults, not against them.",
  },
  {
    num: '04',
    title: 'Clarity over flexibility',
    body: "Every configuration option is a decision the user has to make. PlanIt makes strong defaults and hides optionality until users need it. Flexibility is available — but never mandatory.",
  },
  {
    num: '05',
    title: 'Progress over perfection',
    body: "The system does not require a complete setup to be useful. Partial plans, partial syncs, and partial weeks are all valid states. Something is always better than nothing — and the product is designed around that reality.",
  },
];

function DecisionCard({ d }) {
  return (
    <ScrollReveal>
      <div className="bg-white rounded-[20px] border border-black/[0.07] overflow-hidden hover:border-lime/20 hover:shadow-[0_8px_40px_rgba(109,173,4,0.08)] transition-all duration-400">
        {/* Header */}
        <div className="px-8 py-6 border-b border-black/[0.05] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="font-syne font-bold text-xs text-lime tracking-[0.12em]">[ {d.num} ]</span>
            <h3 className="font-syne font-extrabold text-lg md:text-xl text-charcoal">{d.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {d.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.08em] font-dm font-bold text-forest border border-lime/25 bg-lime/[0.06]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.05]">
          <div className="px-8 py-6">
            <span className="font-dm text-[10px] uppercase tracking-[0.15em] text-muted_text font-bold block mb-3">Before</span>
            <ul className="space-y-2">
              {d.before.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-muted_text flex-shrink-0 mt-2" />
                  <p className="font-dm text-sm text-smoke leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8 py-6 bg-lime/[0.03]">
            <span className="font-dm text-[10px] uppercase tracking-[0.15em] text-lime font-bold block mb-3">After</span>
            <p className="font-dm text-sm text-smoke leading-relaxed">{d.after.body}</p>
          </div>
        </div>

        {/* Why + Impact */}
        <div className="px-8 py-6 border-t border-black/[0.05] grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          <div>
            <span className="font-dm text-[10px] uppercase tracking-[0.15em] text-muted_text font-bold block mb-2">Why This Works</span>
            <p
              className="font-dm text-sm text-smoke leading-[1.85]"
              dangerouslySetInnerHTML={{
                __html: d.why.replace(/\*\*(.*?)\*\*/g, '<strong class="text-charcoal font-medium">$1</strong>'),
              }}
            />
          </div>
          <div>
            <span className="font-dm text-[10px] uppercase tracking-[0.15em] text-muted_text font-bold block mb-2">Impact</span>
            <ul className="space-y-2">
              {d.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                  </span>
                  <p className="font-dm text-[13px] text-smoke leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProductThinkingSection() {
  return (
    <section id="product-thinking" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="06" label="Design Decisions & Product Thinking" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-syne font-extrabold text-3xl md:text-[48px] text-charcoal leading-tight mb-3 max-w-3xl">
          10 decisions that define the product
        </h2>
        <p className="font-dm text-[15px] text-smoke mb-16 max-w-2xl leading-relaxed">
          Every design choice has a behavioral rationale, a research basis, and a measurable impact hypothesis. Nothing here is aesthetic — everything is intentional.
        </p>
      </ScrollReveal>

      {/* Decision Cards */}
      <div className="space-y-5 mb-24">
        {DECISIONS.map((d) => (
          <DecisionCard key={d.num} d={d} />
        ))}
      </div>

      {/* Core Principles */}
      <ScrollReveal>
        <div className="bg-forest rounded-3xl px-8 md:px-14 lg:px-16 py-16 md:py-20">
          <div className="mb-14">
            <SectionHeader number="—" label="Core Product Principles Behind PlanIt" className="mb-4" />
            <h2 className="font-syne font-extrabold text-3xl md:text-[42px] text-white leading-tight max-w-2xl">
              The beliefs that shaped every decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 hover:border-lime/30 hover:bg-white/[0.07] transition-all duration-300 h-full">
                  <span className="font-syne font-bold text-xs text-lime tracking-[0.15em] block mb-3">[ {p.num} ]</span>
                  <h4 className="font-syne font-bold text-base text-white mb-3 leading-snug">{p.title}</h4>
                  <p className="font-dm text-sm text-white/55 leading-[1.8]">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}