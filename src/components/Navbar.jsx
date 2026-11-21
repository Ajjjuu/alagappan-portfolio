import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/resume'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold">
          Alagappan<span className="text-brand">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-sm text-white/80 transition hover:text-brand">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          download
          className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-dark md:block"
        >
          Resume
        </a>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 px-4 pb-4 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 hover:text-brand"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
