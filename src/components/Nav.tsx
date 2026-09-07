import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

interface NavProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
          Your Name<span style={{ color: 'var(--chi-red)' }}>.</span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border text-sm"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t px-6 py-3 sm:hidden" style={{ borderColor: 'var(--border)' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function ThemeButton({ theme, onToggleTheme }: NavProps) {
  return (
    <button
      onClick={onToggleTheme}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-md border text-sm transition-colors hover:opacity-70"
      style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
