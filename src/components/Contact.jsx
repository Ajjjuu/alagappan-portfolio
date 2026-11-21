import { Mail, Phone, MapPin } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const items = [
    { icon: <Mail />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone />, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: <LinkedinIcon className="h-6 w-6" />, label: 'LinkedIn', value: 'linkedin.com/in/alagappan-pr', href: profile.linkedin },
    { icon: <GithubIcon className="h-6 w-6" />, label: 'GitHub', value: 'github.com/Alagappan777', href: profile.github },
  ]
  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact" dark>
      <p className="max-w-xl text-white/70">
        Open to product analytics and applied AI opportunities. Reach out through any of the channels below.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target={i.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-soft p-5 transition hover:border-brand"
          >
            <span className="text-brand">{i.icon}</span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wider text-white/50">{i.label}</span>
              <span className="block truncate">{i.value}</span>
            </span>
          </a>
        ))}
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-white/50">
        <MapPin size={16} /> {profile.location}
      </p>
    </Section>
  )
}
