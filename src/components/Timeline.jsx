import { motion } from 'framer-motion';

export default function Timeline(){
  const items = [
    {
      year: '2022 - 2026',
      title: 'B-Tech in Computer Science & Engineering',
      subtitle: 'Sahrdaya College of Engineering And Technology • APJAKTU',
      details: 'CGPA: 7.53',
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary Education',
      subtitle: 'Christ Vidyanikethan (CISCE)',
      details: 'GPA: 84.8%',
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
          Education Timeline
        </motion.h2>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-800 sm:left-1/2" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 ? 'sm:text-left' : 'sm:text-right'}`}
              >
                <div className={`hidden sm:block ${i % 2 ? '' : 'order-2'}`}></div>
                <div className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                  <div className="absolute -left-1.5 top-6 hidden h-3 w-3 rotate-45 bg-slate-900/60 sm:block" />
                  <div className="text-xs text-cyan-300">{it.year}</div>
                  <div className="text-lg font-semibold text-white">{it.title}</div>
                  <div className="text-sm text-slate-300">{it.subtitle}</div>
                  <div className="text-xs text-slate-400">{it.details}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
