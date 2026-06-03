import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Lock,
  ChevronDown,
  BookOpen,
  FileText,
  AlignLeft,
  KeyRound,
  ClipboardCheck,
  ListTodo,
  ExternalLink,
} from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal, StaggerGroup, staggerItem } from './ui/Reveal'
import { Icon } from './ui/icons'
import { legalProjects } from '../data/content'
import { designProjects, type LinkType, type ModuleGroup } from '../data/portfolio'

const linkIcon: Record<LinkType, typeof FileText> = {
  cover: BookOpen,
  front: FileText,
  content: AlignLeft,
  key: KeyRound,
  exam: ClipboardCheck,
  activity: ListTodo,
  doc: FileText,
}

function Accordion({ group, defaultOpen }: { group: ModuleGroup; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  return (
    <div className="overflow-hidden rounded-2xl border border-line/60 bg-fog">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
        <span className="font-medium text-ink">{group.title}</span>
        <span className="flex items-center gap-2 text-sm text-ink-faint">
          {group.links.length}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="space-y-1.5 px-3 pb-3">
              {group.links.map((l) => {
                const LinkIcon = linkIcon[l.type]
                return (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 rounded-xl bg-white px-3 py-2 text-sm text-ink-soft shadow-sm transition-all hover:text-blue hover:shadow-md"
                    >
                      <LinkIcon className="h-4 w-4 flex-shrink-0 text-blue" />
                      <span className="flex-1">{l.label}</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-bg py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Portfolio" title="Selected work" subtitle="Legal editing & instructional design" />

        {/* Legal editing */}
        <div className="mb-16">
          <Reveal>
            <h3 className="mb-6 text-2xl font-semibold text-ink">Legal Content Editing</h3>
          </Reveal>

          <Reveal>
            <div className="mb-8 flex items-start gap-3 rounded-2xl border border-blue/15 bg-blue/5 p-5">
              <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue" />
              <p className="text-sm leading-relaxed text-ink-soft">
                <strong className="text-ink">Confidentiality Notice:</strong> Due to confidentiality agreements, I am
                unable to disclose specific files from these projects — but here's an overview of my skills and the type
                of work I perform.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-2">
            {legalProjects.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-line/60 bg-fog p-8 transition-all hover:bg-white hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue/10">
                  <Icon name={p.icon} className="h-6 w-6 text-blue" />
                </div>
                <h4 className="text-xl font-semibold text-ink">{p.title}</h4>
                <p className="mt-1 font-medium text-blue">{p.subtitle}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Instructional design */}
        <Reveal>
          <h3 className="mb-8 text-2xl font-semibold text-ink">Instructional Design & Educational Content</h3>
        </Reveal>

        <div className="space-y-8">
          {designProjects.map((proj, pi) => (
            <Reveal key={proj.title} delay={pi * 0.05}>
              <div className="rounded-[2rem] border border-line/60 bg-fog p-6 sm:p-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-blue/10">
                    <Icon name={proj.icon} className="h-7 w-7 text-blue" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-ink">{proj.title}</h4>
                    <p className="mt-1 font-medium text-ink-faint">{proj.institution}</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">{proj.description}</p>
                  </div>
                </div>

                <p className="mb-4 mt-8 text-center text-lg font-semibold text-ink">
                  Complete Module Series ({proj.groups.reduce((n, g) => n + g.links.length, 0)} documents)
                </p>
                <div className="grid items-start gap-4 lg:grid-cols-3">
                  {proj.groups.map((g) => (
                    <Accordion key={g.title} group={g} defaultOpen />
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="rounded-full bg-blue/10 px-4 py-1.5 text-xs font-medium text-blue">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
