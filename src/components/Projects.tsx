import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--chi-blue)' }}>
        Projects
      </h2>
      <p className="mt-4 max-w-2xl text-lg" style={{ color: 'var(--text-muted)' }}>
        A selection of things I've built. Swap the entries in{' '}
        <code>src/data/projects.ts</code> for your own.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
