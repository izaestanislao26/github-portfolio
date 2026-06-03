import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'
import { Icon } from './ui/icons'
import { skills } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="bg-fog py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Expertise" title="Core skills" subtitle="What I bring to every project" />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-line/60 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue/10">
                <Icon name={cat.icon} className="h-6 w-6 text-blue" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-ink">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-ink-soft">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-blue" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
