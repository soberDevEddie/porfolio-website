import type { Project } from '../data/projects'

// Free, keyless screenshot service (WordPress mshots) — renders a live
// thumbnail of the given URL. First request can return a "generating"
// placeholder while it renders; subsequent loads are cached.
function screenshotUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`
}

export default function ProjectCard({ title, description, tech, repoUrl, liveUrl }: Project) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-xl border transition-transform hover:-translate-y-1"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
    >
      {liveUrl && (
        <div className="aspect-video w-full" style={{ background: 'var(--border)' }}>
          <img
            src={screenshotUrl(liveUrl)}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ background: 'color-mix(in srgb, var(--chi-blue) 15%, transparent)', color: 'var(--chi-blue-deep)' }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4 text-sm font-medium">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="relative z-10"
              style={{ color: 'var(--chi-blue-deep)' }}
            >
              Code →
            </a>
          )}
          {liveUrl && (
            <span aria-hidden="true" style={{ color: 'var(--chi-blue-deep)' }}>
              Live demo →
            </span>
          )}
        </div>
      </div>

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0"
          aria-label={`Open live demo of ${title}`}
        />
      )}
    </div>
  )
}
