import { motion } from 'framer-motion';

export default function Experience() {
  const items = [
    {
      title: 'IEEE Student Branch - Technical Team Member',
      desc: 'Actively contributed to IEEE technical projects and activities.',
    },
  ];

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Experience & Activities
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
