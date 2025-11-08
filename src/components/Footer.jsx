export default function Footer(){
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Samson Saji • Built with React & Tailwind
    </footer>
  );
}
