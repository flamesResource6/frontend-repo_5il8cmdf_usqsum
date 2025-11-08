import { motion } from 'framer-motion';
import { Code2, Cog, Wrench, TerminalSquare, Github } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    items: ['Java', 'C', 'Python (Basics)'],
    icon: Code2,
  },
  {
    title: 'Frameworks & Platforms',
    items: ['Flutter (Basics)', 'Firebase', 'Google Cloud'],
    icon: Wrench,
  },
  {
    title: 'Embedded & IoT',
    items: ['ESP32', 'Arduino', 'Bluetooth (BLE)'],
    icon: Cog,
  },
  {
    title: 'Tools',
    items: ['Android Studio', 'Git', 'Linux & Windows'],
    icon: TerminalSquare,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Technical Skills
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <SkillCard key={idx} {...s} idx={idx} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-slate-300">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm hover:bg-slate-900"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items, icon: Icon, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur shadow-lg"
    >
      <div className="mb-3 inline-flex items-center gap-2 text-cyan-400">
        <Icon className="h-5 w-5" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-1 text-sm text-slate-300">
        {items.map((i, idx2) => (
          <li key={idx2}>• {i}</li>
        ))}
      </ul>
    </motion.div>
  );
}
