import { motion } from 'framer-motion';
import { Cpu, HeartPulse, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Eldernex (Ongoing)',
    description:
      'Cross-platform Flutter app for elderly users connecting to wearable devices via Bluetooth to track health vitals and falls with real-time caregiver alerts.',
    tech: 'Flutter, ESP32 S3 (BLE + Display), Firebase, Google Cloud',
    points: [
      'Displays Heart Rate, SpO2, and fall detection alerts',
      'BLE integration with ESP32 S3 wearable',
      'Real-time notifications to caregiver profile',
    ],
    icon: HeartPulse,
  },
  {
    title: 'Melanoma Detection using Deep Learning',
    description:
      'Trained SEResNeXt50 on HAM10000 for skin lesion classification with augmentation, cross-validation, and class weighting for robust mobile inference.',
    tech: 'PyTorch/TensorFlow, SEResNeXt50, HAM10000',
    points: ['Advanced augmentation', 'Cross-validation', 'Class weights for imbalance'],
    icon: Brain,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.08),rgba(15,23,42,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, points, icon: Icon, idx }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 shadow-xl ring-1 ring-slate-800/50 backdrop-blur"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{
        background:
          'radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.12), transparent 40%)',
      }} />

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{description}</p>
          <p className="mt-2 text-xs text-slate-400">Tech: {tech}</p>
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-slate-300">
        {points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    </motion.article>
  );
}
