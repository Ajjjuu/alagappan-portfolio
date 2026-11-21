import { Download, Mail, Camera } from 'lucide-react'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="fade-up order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Hello, I&apos;m
          </p>
          <h1 className="mt-3 text-5xl font-extrabold leading-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-brand sm:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-lg text-white/70">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-black transition hover:bg-brand-dark"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex gap-4 text-white/70">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-brand">
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-brand">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="fade-up order-1 flex justify-center md:order-2 md:justify-end">
          {/* Photo space: set `photo` in src/data/resume.js to show your picture */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-brand" />
            <div className="relative flex h-72 w-64 items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-brand/70 bg-ink-soft sm:h-96 sm:w-80">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-[50%_20%]" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-white/50">
                  <Camera size={40} />
                  <span className="text-sm">Your photo here</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
