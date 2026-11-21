export default function Section({ id, title, eyebrow, dark = false, muted = false, children }) {
  const tone = dark ? 'bg-ink text-white' : muted ? 'bg-neutral-100 text-ink' : 'bg-white text-ink'
  return (
    <section id={id} className={tone}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
        )}
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-16 rounded bg-brand" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
