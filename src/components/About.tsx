const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Git',
];

export default function About() {
  return (
    <section id='about' className='mx-auto max-w-5xl px-6 py-20'>
      <h2
        className='text-sm font-semibold uppercase tracking-widest'
        style={{ color: 'var(--chi-blue)' }}
      >
        About
      </h2>
      <p
        className='mt-4 max-w-2xl text-lg leading-relaxed'
        style={{ color: 'var(--text-muted)' }}
      >
        Hi, I'm Eddie Ocampo, a passionate Full Stack Web Developer with a focus
        on creating dynamic and responsive web applications. I have a strong
        foundation in both front-end and back-end technologies, allowing me to
        build seamless user experiences. As a first-generation Mexican-American,
        I am dedicated to inspiring others through my work and my journey
        towards sobriety. My goal is to leverage technology to make a positive
        impact in the world.
      </p>

      <div className='mt-8 flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='rounded-full border px-3 py-1 text-sm'
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
