import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Get in touch
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-slate-300 shadow-xl"
          >
            <p className="text-slate-300">
              I’m open to internships, freelance projects, and collaborations in mobile, embedded, and AI-powered systems. Feel free to reach out!
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-cyan-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:samsonsajees@gmail.com" className="text-sm text-white hover:underline">
                  samsonsajees@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-cyan-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+917012788400" className="text-sm text-white hover:underline">
                  +91 7012788400
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-800 text-cyan-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm text-white">Karuvannur, Irinjalakuda 680711</span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs font-medium text-slate-300">Name</label>
                <input className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs font-medium text-slate-300">Email</label>
                <input type="email" className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-slate-300">Message</label>
                <textarea rows="4" className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="Say hello..." />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 hover:bg-cyan-400">
              Send Message
            </button>
            <p className="mt-2 text-center text-xs text-slate-400">This is a demo form. Use the email or phone to reach out.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
