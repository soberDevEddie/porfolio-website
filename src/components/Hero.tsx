export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-chicago.jpg"
          alt="LaSalle Street looking toward the Chicago Board of Trade Building"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 70%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--bg) 8%, color-mix(in srgb, var(--bg) 55%, transparent) 45%, transparent 85%), linear-gradient(to top, var(--bg) 0%, transparent 22%)',
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 py-28 sm:py-36">
        <span
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
          style={{ borderColor: 'var(--chi-blue)', color: 'var(--chi-blue-deep)' }}
        >
          <span aria-hidden="true">✶</span> Based in Chicago
        </span>

        <h1
          className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl"
          style={{ color: 'var(--text)' }}
        >
          Hi, I'm <span style={{ color: 'var(--chi-blue-deep)' }}>soberDevEddie</span>.
          <br />I build things for the web.
        </h1>

        <p className="mt-6 max-w-xl text-lg" style={{ color: 'var(--text-muted)' }}>
          I design and build polished web experiences with clean code, thoughtful
          UX, and a focus on real-world impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--chi-blue-deep)' }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border px-5 py-3 text-sm font-semibold transition-colors hover:opacity-70"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
