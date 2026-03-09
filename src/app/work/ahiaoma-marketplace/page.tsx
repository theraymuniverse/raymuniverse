import { notFound } from 'next/navigation'
import { projects, ProjectGallerySection, AspectRatio } from '../projects'

// ── Aspect ratio map ──────────────────────────────────────────────────────────
const aspectRatioClass: Record<AspectRatio, string> = {
  mobile:    'aspect-[9/19.5]',
  square:    'aspect-square',
  landscape: 'aspect-[4/3]',
  wide:      'aspect-video',
  tall:      'aspect-[3/4]',
}

const gridColsClass: Record<ProjectGallerySection['layout'], string> = {
  one:   'grid-cols-1',
  two:   'grid-cols-1 sm:grid-cols-2',
  three: 'grid-cols-1 sm:grid-cols-3',
  four:  'grid-cols-2 sm:grid-cols-4',
}

function GallerySection({ section }: { section: ProjectGallerySection }) {
  const ratio = section.aspectRatio ?? 'landscape'
  const ratioClass = aspectRatioClass[ratio]
  const colsClass = gridColsClass[section.layout]

  return (
    <div className="mb-10 last:mb-0">
      {section.caption && (
        <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/40">
          {section.caption}
        </h2>
      )}
      <div className={`grid gap-4 md:gap-5 ${colsClass}`}>
        {section.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01]"
          >
            <div className={`relative w-full bg-white/5 ${ratioClass}`}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-white/20">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
            <div className="border-t border-white/5 px-4 py-3">
              <div className="mb-1 text-xs font-medium text-white/80">{item.label}</div>
              {item.description && (
                <p className="text-[11px] leading-snug text-white/50">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AhiaomaMarketplacePage() {
  const project = projects.find((p) => p.slug === 'ahiaoma-marketplace')
  if (!project) return notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pb-10 pt-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* Breadcrumb */}
          <div className="mb-8 text-xs text-white/50">
            <span className="text-white/70">{project.title}</span>
          </div>

          {/* Title + meta */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
            <div className="flex-1 space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Case study</p>
              <h1 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-xl text-sm text-white/80 md:text-[15px]">
                {project.overview}
              </p>
            </div>

            <div className="md:w-[300px] shrink-0">
              {/* Role — full width */}
              <div className="pb-5 border-b border-white/10 mb-4">
                <div className="mb-1.5 text-[10px] uppercase tracking-[0.22em] text-white/35">Role</div>
                <div className="text-sm text-white/80 leading-snug">{project.role}</div>
              </div>

              {/* Industry + Timeframe — side by side */}
              <div className="grid grid-cols-2 gap-x-6 pb-5 border-b border-white/10 mb-4">
                <div>
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.22em] text-white/35">Industry</div>
                  <div className="text-sm text-white/80 leading-snug">{project.industry}</div>
                </div>
                <div>
                  <div className="mb-1.5 text-[10px] uppercase tracking-[0.22em] text-white/35">Timeframe</div>
                  <div className="text-sm text-white/80 leading-snug">{project.timeframe}</div>
                </div>
              </div>

              {/* Metrics — side by side */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="mb-1.5 text-[10px] uppercase tracking-[0.22em] text-white/35">{m.label}</div>
                      <div className="text-sm text-white/80 leading-snug">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Hero header image ── */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 md:mb-14">
            <img
              src={project.headerImage}
              alt={`${project.title} header`}
              className="w-full object-cover"
            />
          </div>

          {/* ── Problem / Solution / Impact ── */}
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-3">
            {[
              { label: 'Problem',  body: project.problem  },
              { label: 'Solution', body: project.solution },
              { label: 'Impact',   body: project.impact   },
            ].map(({ label, body }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  {label}
                </div>
                <p className="text-sm leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>

          {/* ── Services ── */}
          <div className="mb-10 md:mb-14">
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/40">
              Services
            </div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ── Gallery sections ── */}
          {project.gallerySections && project.gallerySections.length > 0 && (
            <div className="mb-10 md:mb-14">
              {project.gallerySections.map((section) => (
                <GallerySection key={section.id} section={section} />
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  )
}