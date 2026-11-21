import { ExternalLink } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <>
      <Section id="projects" title="Projects" eyebrow="What I've built" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                p.placeholder ? 'border-2 border-dashed border-brand/50' : 'border border-neutral-200'
              }`}
            >
              {p.placeholder && (
                <span className="mb-3 w-fit rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand-dark">
                  Placeholder: edit me
                </span>
              )}
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-ink px-3 py-1 text-xs text-white">{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline">
                  View <ExternalLink size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
