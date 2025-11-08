import { motion } from 'framer-motion';

export default function CTA(){
  return (
    <section className="relative bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 py-16">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Interested in working together?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-slate-900/80"
        >
          I’m open to internships, freelance projects, and collaborations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5"
        >
          <a href="#contact" className="inline-block rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow hover:bg-slate-800">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
