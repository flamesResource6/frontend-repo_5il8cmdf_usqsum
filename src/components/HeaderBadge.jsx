export default function HeaderBadge({ children }){
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90">
      {children}
    </span>
  );
}
