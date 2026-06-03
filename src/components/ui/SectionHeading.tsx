import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark,
}: {
  eyebrow?: string
  title: string
  subtitle: string
  dark?: boolean
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <p className="eyebrow mb-2 text-blue">{eyebrow}</p>}
      <h2 className={`text-4xl font-semibold tracking-tight sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-xl font-normal ${dark ? 'text-white/60' : 'text-ink-soft'}`}>{subtitle}</p>
    </Reveal>
  )
}
