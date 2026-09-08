import { PopupButton } from '@typeform/embed-react'

// TODO: replace with your real Typeform form ID (the part after typeform.com/to/).
// Find it in Typeform under Share > Embed, e.g. https://form.typeform.com/to/abc123 -> "abc123".
const TYPEFORM_ID = 'UdPISiOq'

const contacts = [
  { label: 'Email', value: 'soberdeveddie@gmail.com', href: 'mailto:soberdeveddie@gmail.com' },
  { label: 'GitHub', value: 'github.com/soberDevEddie', href: 'https://github.com/soberDevEddie' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--chi-blue)' }}>
        Contact
      </h2>
      <h3 className="mt-4 max-w-xl text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        Let's build something together.
      </h3>
      <p className="mt-4 max-w-xl text-lg" style={{ color: 'var(--text-muted)' }}>
        Fill out a quick form and I'll get back to you, or reach me directly below.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PopupButton
          id={TYPEFORM_ID}
          className="rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--chi-blue-deep)' }}
        >
          Get in touch
        </PopupButton>

        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-medium transition-colors hover:opacity-70"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            <span style={{ color: 'var(--chi-blue-deep)' }}>{c.label}</span>
            <span style={{ color: 'var(--text-muted)' }}>{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
