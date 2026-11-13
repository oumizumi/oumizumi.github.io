import PageLayout from '@/components/layout/PageLayout';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | oumizumi',
  description: 'Things I have built.',
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="page-container">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-warm-white/50 font-light tracking-widest uppercase mb-4" style={{ fontSize: '12px' }}>projects</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-warm-white tracking-tight mb-4">
            things I&apos;ve built.
          </h1>
          <p className="text-warm-white/75 font-light" style={{ fontSize: '17px', lineHeight: 1.85 }}>
            A selection of projects I&apos;ve worked on.
          </p>
        </div>

        {/* Project rows */}
        <div className="flex flex-col" style={{ gap: '72px' }}>
          {projects.map((project) => (
            <div key={project.name} className="flex flex-col sm:flex-row items-start" style={{ gap: '40px' }}>

              {/* Left: screenshot */}
              <div className="flex-shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg object-cover"
                    style={{ width: '360px', height: '240px', display: 'block', boxShadow: '0 4px 24px rgba(0,0,0,0.35)' }}
                  />
                ) : (
                  <div
                    className="rounded-lg bg-surface"
                    style={{ width: '360px', height: '240px' }}
                  />
                )}
              </div>

              {/* Right: info */}
              <div className="flex flex-col gap-3 flex-1" style={{ paddingTop: '4px' }}>

                <div className="flex items-baseline gap-3">
                  <h2 className="text-warm-white font-normal" style={{ fontSize: '19px' }}>
                    {project.name}
                  </h2>
                  <span className="text-warm-white/35 font-light" style={{ fontSize: '13px' }}>
                    {project.year}
                  </span>
                </div>

                <p className="text-warm-white/65 font-light" style={{ fontSize: '15px', lineHeight: 1.8 }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap" style={{ gap: '6px' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-accent/70 border border-accent/25 rounded-full font-light"
                      style={{ fontSize: '12px', padding: '2px 10px' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.github || project.url) && (
                  <div className="flex items-center gap-4" style={{ marginTop: '4px' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-white/40 hover:text-warm-white transition-colors"
                        style={{ fontSize: '13px' }}
                      >
                        GitHub
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-white/40 hover:text-warm-white transition-colors"
                        style={{ fontSize: '13px' }}
                      >
                        Live
                      </a>
                    )}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
