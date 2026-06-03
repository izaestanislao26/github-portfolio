import { SectionHeading } from './ui/SectionHeading'
import { Reveal, StaggerGroup, staggerItem } from './ui/Reveal'
import { Counter } from './ui/Counter'
import { motion } from 'framer-motion'
import { about, stats } from '../data/content'

export function About() {
  return (
    <section id="about" className="bg-fog py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A meticulous editor" subtitle="Licensed Professional Teacher & Content Editor" />

        <div className="mx-auto max-w-3xl">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="mb-6 text-center text-lg leading-relaxed text-ink-soft sm:text-xl">{p}</p>
            </Reveal>
          ))}

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-line/60 bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
              >
                <div className="text-5xl font-semibold tracking-tight text-blue">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-ink-soft">{s.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
