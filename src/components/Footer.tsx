import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 transition-colors hover:text-blue-bright">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
