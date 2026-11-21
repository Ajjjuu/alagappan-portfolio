import Section from './Section'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Work Experience">
      <div className="space-y-10 border-l-2 border-brand/40 pl-6 sm:pl-8">
        {experience.map((job) => (
          <article key={job.company} className="relative">
            <span className="absolute -left-[33px] top-2 h-4 w-4 rounded-full border-4 border-white bg-brand sm:-left-[41px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold">{job.role}</h3>
                <p className="font-semibold text-brand">
                  {job.company} <span className="font-normal text-neutral-500">· {job.location}</span>
                </p>
              </div>
              <span className="rounded-full bg-ink px-3 py-1 text-sm text-white">{job.period}</span>
            </div>
            {job.groups.map((g) => (
              <div key={g.heading} className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">{g.heading}</h4>
                <ul className="mt-3 space-y-2">
                  {g.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-neutral-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </Section>
  )
}
