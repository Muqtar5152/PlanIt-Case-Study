export default function SectionHeader({ number, label, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-12 ${className}`}>
      <span className="font-syne font-bold text-xs tracking-widest uppercase text-lime">
        {number}
      </span>
      <span className="w-8 h-[2px] bg-lime" />
      <span className="font-syne font-bold text-xs tracking-widest uppercase text-lime">
        {label}
      </span>
    </div>
  );
}