import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'
import { Icon } from './ui/icons'
import { certifications } from '../data/content'

export function Certifications() {
  return (
    <section id="certifications" className="bg-fog py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & recognition"
          subtitle="Professional qualifications & awards"
        />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-line/60 bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue/10 transition-colors group-hover:bg-blue/15">
                <Icon name={c.icon} className="h-7 w-7 text-blue" />
              </div>
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-1 font-medium text-blue">{c.issuer}</p>
              <p className="text-sm text-ink-faint">{c.date}</p>
              <p className="mt-2 text-sm text-ink-soft">{c.details}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
