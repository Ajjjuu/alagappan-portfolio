import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { education } from '../data/resume'

export default function Education() {
  return (
    <Section id="education" eyebrow="Where I've studied" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="flex gap-4 rounded-2xl border border-neutral-200 p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-black">
              <GraduationCap />
            </div>
            <div>
              <h3 className="font-bold">{e.school}</h3>
              <p className="text-neutral-700">{e.degree}</p>
              <p className="mt-2 text-sm text-neutral-500">{e.period}</p>
              <p className="text-sm font-semibold text-brand-dark">{e.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
