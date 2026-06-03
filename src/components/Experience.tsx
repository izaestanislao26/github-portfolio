import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { experience } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Experience() {
  return (
    <section id="experience" className="bg-bg py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Experience" title="Career journey" subtitle="Roles, milestones & achievements" />

        <div>
          {experience.map((exp, i) => (
            <motion.article
              key={exp.title + exp.date}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease }}
              className="group grid grid-cols-[2.75rem_1fr] gap-5 border-t border-line py-9 first:border-t-0 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:py-12"
            >
              {/* Index */}
              <span className="select-none font-semibold leading-none tracking-tight text-line transition-colors duration-300 group-hover:text-blue text-3xl sm:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  <span className="text-blue">{exp.company}</span> · {exp.date}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{exp.title}</h3>

                {exp.description && <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{exp.description}</p>}
                {exp.bullets && (
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.achievements.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-line bg-fog px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
