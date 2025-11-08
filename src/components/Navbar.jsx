import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-slate-950/70 border-b border-slate-800/60' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-semibold text-white">Samson</a>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800/60 bg-slate-950/90 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
