import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90">
            B-Tech in Computer Science & Engineering
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Samson Saji
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-lg leading-relaxed text-slate-300">
            B.Tech Computer Science student with hands-on experience in Java, C, Flutter full-stack apps, embedded systems with ESP32, and AI integration. Passionate about building scalable, connected systems for enterprise mobility and smart devices.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-5 py-3 font-medium text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-800/60"
            >
              Contact
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <ContactItem icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 7012788400" href="tel:+917012788400" />
            <ContactItem icon={<Mail className="h-4 w-4" />} label="Email" value="samsonsajees@gmail.com" href="mailto:samsonsajees@gmail.com" />
            <ContactItem icon={<MapPin className="h-4 w-4" />} label="Address" value="Karuvannur, Irinjalakuda 680711" />
            <ContactItem icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="samson-saji" href="https://www.linkedin.com/in/samson-saji" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-cyan-300">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-sm font-medium text-slate-100">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group rounded-lg border border-slate-700/60 bg-slate-900/40 p-3 transition hover:border-slate-600 hover:bg-slate-900/60">
        {content}
      </a>
    );
  }
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-3">
      {content}
    </div>
  );
}
