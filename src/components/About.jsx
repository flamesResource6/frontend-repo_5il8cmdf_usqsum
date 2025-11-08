import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          About
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 shadow-xl"
          >
            <p>
              Passionate B.Tech Computer Science student focused on building connected systems that bridge mobile apps, embedded devices, and cloud services. Enjoys crafting smooth, user-friendly experiences while solving real-world problems.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li className="rounded-lg bg-slate-800/60 p-3">Collaborative Teamwork</li>
              <li className="rounded-lg bg-slate-800/60 p-3">Adaptability</li>
              <li className="rounded-lg bg-slate-800/60 p-3">Logical Thinking</li>
              <li className="rounded-lg bg-slate-800/60 p-3">Problem Solving</li>
            </ul>
            <div className="mt-4 text-sm text-slate-400">
              Hobbies: Reading, Travelling, Listening to music
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white">Academic History</h3>
            <ul className="mt-3 space-y-3 text-slate-300">
              <li>
                <p className="font-medium text-white">B-Tech in Computer Science & Engineering (2022-2026)</p>
                <p className="text-sm">Sahrdaya College of Engineering And Technology</p>
                <p className="text-sm">APJ Abdul Kalam Technological University</p>
                <p className="text-xs text-slate-400">CGPA: 7.53</p>
              </li>
              <li>
                <p className="font-medium text-white">Higher Secondary Education (2020-2022)</p>
                <p className="text-sm">Christ Vidyanikethan (CISCE)</p>
                <p className="text-xs text-slate-400">GPA: 84.8%</p>
              </li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-white">Certifications</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-300">
              <li>App Development using Flutter - GenZee Technologies</li>
              <li>Machine Learning - Internshala Trainings (virtual)</li>
              <li>Getting Started with Artificial Intelligence - IBM</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-white">Extra Curricular</h3>
            <p className="mt-2 text-sm text-slate-300">
              IEEE Student Branch - Technical Team Member. Actively contributed to IEEE technical projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
