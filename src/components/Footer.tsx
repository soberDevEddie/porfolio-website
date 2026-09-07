export default function Footer() {
  return (
    <footer className="border-t px-6 py-8 text-center text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
      <p>
        Built with React, TypeScript &amp; Tailwind CSS in Chicago{' '}
        <span style={{ color: 'var(--chi-red)' }}>✶</span> {new Date().getFullYear()}
      </p>
    </footer>
  )
}
