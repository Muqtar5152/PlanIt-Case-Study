import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const FONT_WEIGHTS = [
  { weight: 'Bold 700', use: 'Headings & CTA' },
  { weight: 'Medium 500', use: 'Labels & Nav' },
  { weight: 'Regular 400', use: 'Body copy' },
  { weight: 'Light 300', use: 'Captions & hints' },
];

const COLORS = [
  { hex: '#6DAD04', name: 'Lime Green', use: 'Primary / CTA', color: 'bg-lime' },
  { hex: '#203300', name: 'Forest Dark', use: 'Secondary / Headers', color: 'bg-forest' },
  { hex: '#1E1E1E', name: 'Charcoal', use: 'Text Primary', color: 'bg-charcoal' },
  { hex: '#595959', name: 'Smoke', use: 'Body Text', color: 'bg-smoke' },
  { hex: '#F3F3F3', name: 'Light Gray', use: 'Page Background', color: 'bg-surface' },
];

export default function DesignSystemSection() {
  return (
    <section id="design-system" className="px-6 md:px-10 lg:px-20 py-20">
      <ScrollReveal>
        <SectionHeader number="07" label="Design System" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-syne font-extrabold text-3xl md:text-[42px] text-charcoal leading-tight mb-14">
          Typography & Colors
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Typography Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-[20px] border border-black/[0.07] p-8 md:p-10 h-full hover:-translate-y-1 hover:border-lime/25 hover:shadow-lg transition-all duration-300">
            <h3 className="font-syne font-extrabold text-[52px] text-forest leading-none mb-2">
              Satoshi
            </h3>
            <p className="font-dm text-[10px] uppercase tracking-[0.15em] text-muted_text font-bold mb-8">
              Primary Typeface
            </p>
            <div className="space-y-4">
              {FONT_WEIGHTS.map((fw, i) => (
                <div key={i} className="flex items-center justify-between border-b border-black/[0.05] pb-3 last:border-0">
                  <span className="font-syne font-bold text-sm text-charcoal">{fw.weight}</span>
                  <span className="font-dm text-sm text-smoke">{fw.use}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Colors Card */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white rounded-[20px] border border-black/[0.07] p-8 md:p-10 h-full hover:-translate-y-1 hover:border-lime/25 hover:shadow-lg transition-all duration-300">
            <div className="space-y-5">
              {COLORS.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${c.color} flex-shrink-0`}
                    style={c.hex === '#F3F3F3' ? { border: '1px solid rgba(0,0,0,0.1)' } : {}}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-syne font-bold text-sm text-charcoal">{c.name}</span>
                      <span className="font-dm text-xs text-muted_text">{c.hex}</span>
                    </div>
                    <p className="font-dm text-xs text-smoke">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}