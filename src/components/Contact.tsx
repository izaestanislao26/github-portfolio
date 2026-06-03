import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Linkedin, Copy, CheckCircle2, AlertCircle } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { profile } from '../data/content'

type Toast = { type: 'success' | 'error'; message: string } | null

export function Contact() {
  const [toast, setToast] = useState<Toast>(null)

  const fire = (t: NonNullable<Toast>) => {
    setToast(t)
    window.clearTimeout((fire as any)._t)
    ;(fire as any)._t = window.setTimeout(() => setToast(null), 4000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      fire({ type: 'success', message: 'Email copied to clipboard!' })
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !subject || !message) {
      fire({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fire({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`
    fire({ type: 'success', message: 'Thank you! Opening your email client…' })
    e.currentTarget.reset()
  }

  const inputCls =
    'w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-blue focus:bg-white/10'

  return (
    <section id="contact" className="bg-night py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading dark eyebrow="Contact" title="Let's work together" subtitle="Tell me about your project" />

        <div className="grid items-start gap-6 md:grid-cols-2">
          <Reveal direction="right">
            <div className="space-y-4">
              <button
                onClick={copyEmail}
                className="glass-dark group flex w-full items-center gap-4 rounded-3xl p-5 text-left transition-colors hover:bg-white/10"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <Mail className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-white">Email</span>
                  <span className="block truncate text-white/60">{profile.email}</span>
                </span>
                <Copy className="ml-auto h-4 w-4 flex-shrink-0 text-white/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark flex items-center gap-4 rounded-3xl p-5 transition-colors hover:bg-white/10"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white">
                  <Linkedin className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold text-white">LinkedIn</span>
                  <span className="block text-white/60">Connect with me</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal direction="left">
            <form onSubmit={onSubmit} className="glass-dark space-y-3.5 rounded-3xl p-6 sm:p-8">
              <input name="name" type="text" placeholder="Your Name" className={inputCls} />
              <input name="email" type="email" placeholder="Your Email" className={inputCls} />
              <input name="subject" type="text" placeholder="Subject" className={inputCls} />
              <textarea name="message" rows={5} placeholder="Your Message" className={`${inputCls} resize-y`} />
              <button type="submit" className="btn-blue w-full justify-center py-3.5 text-[1.05rem]">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className={`fixed right-5 top-5 z-[100] flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white shadow-xl ${
              toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
