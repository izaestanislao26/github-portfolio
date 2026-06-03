import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'
import profileImg from '../assets/profile.jpeg'

const ease = [0.22, 1, 0.36, 1] as const

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
}
const lineItem = {
  hidden: { opacity: 0, y: '110%' },
  show: { opacity: 1, y: '0%', transition: { duration: 0.8, ease } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const headlineWords = ['Professional', 'Content', 'Editor']

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bg px-6 pb-16 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top row: name + small portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-between gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft sm:text-sm">
            {profile.name}
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ink-faint sm:inline">
              Portfolio — {new Date().getFullYear()}
            </span>
            <img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-line sm:h-16 sm:w-16"
            />
          </div>
        </motion.div>

        {/* Drawing rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="mt-6 h-px origin-left bg-line"
        />

        {/* Oversized headline */}
        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="show"
          className="mt-10 text-[3.25rem] font-semibold leading-[0.92] tracking-tight text-ink sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
        >
          {headlineWords.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span variants={lineItem} className="inline-block">
                {word}
                {i === headlineWords.length - 1 && <span className="text-blue">.</span>}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Meta + CTAs */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={fadeUp} className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink-soft">
              Legal documents · Manuscripts · Content refinement
            </p>
            <p className="mt-3 text-base text-ink-faint">
              Trusted with{' '}
              <span className="text-ink-soft">{profile.trustedWith.join(' & ')}</span>
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-lg font-medium text-ink transition-colors hover:border-blue hover:text-blue"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-lg font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-ink-faint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
