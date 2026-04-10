export default function PersonaCard({ initials, name, meta, struggle, needs, quote }) {
  return (
    <div className="rounded-[20px] overflow-hidden border border-black/[0.07] bg-white hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(109,173,4,0.10)] transition-all duration-400 h-full flex flex-col">
      {/* Header band */}
      <div className="bg-forest px-6 py-5 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-lime/25 flex items-center justify-center">
          <span className="font-syne font-bold text-sm text-[#a8e04a]">{initials}</span>
        </div>
        <div>
          <h4 className="font-syne font-bold text-[19px] text-white">{name}</h4>
          <p className="text-[11px] text-white/60 font-dm">{meta}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col gap-5">
        <div>
          <span className="font-dm text-[10px] uppercase tracking-[0.12em] text-muted_text font-bold mb-1.5 block">
            Core Struggle
          </span>
          <p className="font-dm text-sm text-smoke leading-relaxed">{struggle}</p>
        </div>

        <div>
          <span className="font-dm text-[10px] uppercase tracking-[0.12em] text-muted_text font-bold mb-1.5 block">
            What They Need
          </span>
          <p className="font-dm text-sm text-smoke leading-relaxed">{needs}</p>
        </div>

        <blockquote className="border-l-2 border-lime pl-4 mt-auto">
          <p className="font-dm italic text-sm text-smoke">"{quote}"</p>
        </blockquote>
      </div>
    </div>
  );
}