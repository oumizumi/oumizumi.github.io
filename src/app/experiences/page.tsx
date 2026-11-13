import PageLayout from '@/components/layout/PageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience · oumizumi',
  description: 'Work experience and projects by Oumer Gharad.',
};

const experience = [
  {
    role: 'Data Support Analyst (Co-op Student)',
    company: 'MindBridge',
    url: 'https://www.mindbridge.ai',
    org: 'Global Services team',
    location: 'Ottawa, ON · Hybrid',
    period: 'Incoming · Jan 4, 2027 – Apr 2027',
    bullets: [] as string[],
  },
  {
    role: 'Software Developer',
    company: 'University of Ottawa',
    url: 'https://www.uottawa.ca/faculty-engineering/',
    org: null,
    location: 'Ottawa, ON',
    period: 'Jun 2026 – Present',
    bullets: [
      'Resolved 25 production bugs with Sentry and structured logging across web, iOS, and Android',
      'Automated WHO-compliant patient risk flagging with dilation banding and fetal BPM thresholds',
      'Closed self-registration abuse risk with admin-gated provisioning across 4 Supabase Edge Functions',
      'Enabled inter-hospital transfers by designing a 3-state workflow in React/React Native with role-gated approval',
    ],
  },
  {
    role: 'Machine Learning Research Assistant',
    company: 'Mer Lab, University of Ottawa',
    url: 'https://merlab.github.io',
    org: 'Supervised by Prof. Arvind Mer',
    location: 'Ottawa, ON',
    period: 'Feb 2026 – Present',
    bullets: [
      'Tested 11 gene sets on 210 samples with scikit-learn, distinguishing high- from low-risk patients 68% of the time',
      'Mapped 237 of 268 gene identifiers across all signatures with mygene to fix mismatched dataset naming',
      'Built Python pipelines to test survival prediction across 13 patient groups (600+ patients)',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'The Acquist',
    org: null,
    location: 'Remote',
    period: 'Jan 2026 – May 2026',
    bullets: [
      'Built a 23-screen React Native + Expo app across 5 user roles with Google OAuth and protected routing',
      'Fixed a PostgREST JOIN bug breaking logos on 100% of listings by normalizing array-vs-object responses',
      'Wrote a PostgreSQL migration granting scoped service-role access across 5 tables to bypass RLS safely',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Kelpie Robotics',
    url: 'https://github.com/KelpieRobotics',
    org: null,
    location: 'Ottawa, ON',
    period: 'Sep 2025 – Present',
    bullets: [
      'Built a YOLOv8-small pipeline to detect invasive European Green Crabs from live ROV feed in real time',
      'Generated 7,000+ synthetic images on clean backgrounds, eliminating prior 0-detection competition failures',
      'Achieved 99.1% mAP50 by retraining YOLOv8-small on grayscale synthetic imagery for underwater deployment',
      'Containerized the vision stack with Docker, cutting setup from 1 hour to 5 minutes across 4 deployments',
    ],
  },
];

const projects = [
  {
    name: 'NestFinder',
    label: '2nd Place, uOttaHack (YellowCake)',
    tech: 'Next.js 15, TypeScript, FastAPI, Python',
    github: 'https://github.com/Homeless-Gonnabe-5-0/Nestfinder',
    website: 'https://nest-cyan-seven.vercel.app',
    bullets: [
      'Orchestrated 6 scoring agents across live commute, crime, and market data, surfaced via GPT-4o-mini chat',
      'Scraped 4 rental platforms into a 190-listing dataset refreshing every 30 min for real-time search',
      'Ranked Ottawa listings by livability and safety metrics, placing 2nd out of 70+ teams at uOttaHack',
    ],
  },
  {
    name: 'uOMap – University Scheduler',
    label: null,
    tech: 'Python, TypeScript, PostgreSQL',
    github: 'https://github.com/oumizumi/kairo',
    website: 'https://kairo-gilt.vercel.app',
    bullets: [
      'Scraped 10,000+ courses across 161 subjects and built a ranked search API with server-side in-memory caching',
      'Built real-time multiplayer (duel, FFA, duos) by syncing host-controlled round state via Supabase realtime',
      'Automated 3 CI/CD workflows: path-filtered checks, lint/build gating, and release-please Netlify deploys',
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <PageLayout>
      <div className="page-container">

        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-warm-white/50 font-light tracking-widest uppercase mb-4" style={{ fontSize: '12px' }}>portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-warm-white tracking-tight">
            experience &amp; projects.
          </h1>
        </div>

        {/* ── Education ───────────────────────── */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            education
          </h2>
          <article>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 mb-1">
              <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                Honours B.Sc. Computer Science
              </h3>
              <span className="text-warm-white/40 font-normal shrink-0" style={{ fontSize: '14px' }}>
                Expected Apr 2029
              </span>
            </div>
            <p className="text-warm-white/60 font-normal mb-4" style={{ fontSize: '15px' }}>
              University of Ottawa · Ottawa, ON
            </p>
            <ul className="space-y-2.5">
              {[
                "Dean's Honour List | CGPA: 9.10/10.0",
                'Relevant coursework: Data Structures & Algorithms, Programming Paradigms, Databases, Computer Architecture',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                  <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* ── Experience ───────────────────────── */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            experience
          </h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <article key={`${job.role}-${job.company}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 mb-1">
                  <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                    {job.role}
                  </h3>
                  <span className="text-warm-white/40 font-normal shrink-0" style={{ fontSize: '14px' }}>
                    {job.period}
                  </span>
                </div>
                <p className="text-warm-white/60 font-normal mb-4" style={{ fontSize: '15px' }}>
                  {'url' in job && job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-warm-white font-semibold hover:text-accent transition-colors">
                      {job.company}
                    </a>
                  ) : job.company}
                  {job.org ? ` | ${job.org}` : ''} · {job.location}
                </p>
                {job.bullets.length > 0 && <ul className="space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                      <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>}
              </article>
            ))}
          </div>
        </section>

        {/* ── Projects ─────────────────────────── */}
        <section>
          <h2 className="text-warm-white/55 font-light tracking-widest uppercase mb-8" style={{ fontSize: '11px' }}>
            projects
          </h2>
          <div className="space-y-12">
            {projects.map((p) => (
              <article key={p.name}>
                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-x-6 mb-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-warm-white font-semibold" style={{ fontSize: '20px' }}>
                      {p.name}
                    </h3>
                    {p.label && (
                      <span className="text-accent/80 font-normal" style={{ fontSize: '14px' }}>
                        {p.label}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-5">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="text-warm-white font-semibold hover:text-accent transition-colors"
                        style={{ fontSize: '15px' }}>
                        github
                      </a>
                    )}
                    {p.website && p.website !== p.github && (
                      <a href={p.website} target="_blank" rel="noopener noreferrer"
                        className="text-warm-white font-semibold hover:text-accent transition-colors"
                        style={{ fontSize: '15px' }}>
                        website
                      </a>
                    )}
                  </div>
                </div>
                {/* Tech stack */}
                <p className="text-warm-white/55 font-normal mb-4" style={{ fontSize: '14px' }}>
                  {p.tech}
                </p>
                <ul className="space-y-2.5">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-[8px]" />
                      <span className="text-warm-white/80 font-normal" style={{ fontSize: '16px', lineHeight: 1.75 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
