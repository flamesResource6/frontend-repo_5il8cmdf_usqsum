import { motion } from 'framer-motion';

export default function Certificates(){
  const certs = [
    'App Development using Flutter - GenZee Technologies',
    'Machine Learning - Internshala Trainings (virtual)',
    'Getting Started with Artificial Intelligence - IBM',
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
          Certifications
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 shadow"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
