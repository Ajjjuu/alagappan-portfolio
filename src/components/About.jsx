import Section from './Section'
import { summary, highlights } from '../data/resume'

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="Summary">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 text-lg leading-relaxed text-neutral-700 lg:col-span-2">
          {summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-neutral-200 p-5 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-brand">{h.value}</div>
              <div className="mt-1 text-xs text-neutral-600">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
