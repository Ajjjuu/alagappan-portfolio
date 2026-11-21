import Section from './Section'
import { skills } from '../data/resume'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills" dark>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-2xl border border-white/10 bg-ink-soft p-6 transition hover:border-brand/60">
            <h3 className="font-semibold text-brand">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
