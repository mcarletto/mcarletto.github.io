import type { ReactNode } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Experience, Metric, Project, Publication, ResearchEntry } from "@/content/portfolio";

export function Placeholder({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={`ml-2 inline-flex rounded-full border border-dashed px-2 py-0.5 align-middle font-mono text-[9px] font-normal uppercase tracking-wider ${
        inverse ? "border-primary-foreground/40 text-primary-foreground/70" : "border-border text-muted-foreground"
      }`}
    >
      placeholder
    </span>
  );
}

export function Section({ id, index, title, aside, children }: { id: string; index: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="reveal scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[12rem_1fr] lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">({index})</p>
          <h2 id={`${id}-h`} className="font-serif text-4xl leading-none tracking-[-0.02em] md:text-5xl">
            {title}
          </h2>
          {aside && <div className="mt-8">{aside}</div>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{children}</li>;
}

export function ResearchCard({ r, compact = false }: { r: ResearchEntry; compact?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-secondary p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9 ${compact ? "h-full" : ""}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="rounded-full bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{r.status}</p>
        <span aria-hidden className="font-serif text-4xl italic text-primary/35">R</span>
      </div>
      <h3 className="mt-8 max-w-2xl font-serif text-3xl leading-[1.08] tracking-[-0.02em] md:text-4xl">
        {r.title}{r.placeholder && <Placeholder />}
      </h3>
      <p className="mt-5 max-w-prose leading-relaxed text-muted-foreground">{r.summary}</p>
      <ul className="mt-7 flex flex-wrap gap-2">{r.tags.map((t) => <Tag key={t}>{t}</Tag>)}</ul>
      {compact && <a href="#research" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">Explore the research <ArrowUpRight className="h-4 w-4" /></a>}
    </article>
  );
}

export function PublicationItem({ p }: { p: Publication }) {
  return (
    <li className="border-b border-border py-5 last:border-0">
      <p className="leading-relaxed">
        {p.authors} ({p.year}). <span className="font-serif text-xl italic">{p.title}</span>. {p.venue}.{p.placeholder && <Placeholder />}
      </p>
      {p.links?.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="mr-3 text-sm text-primary underline-offset-4 hover:underline">{l.label}</a>)}
    </li>
  );
}

export function MetricBlock({ m }: { m: Metric }) {
  return (
    <div className="rounded-2xl bg-background p-4">
      <dt className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">{m.label}</dt>
      <dd className="mt-2 font-serif text-3xl">{m.value}</dd>
    </div>
  );
}

export function ArchitectureDiagram({ steps, label }: { steps: string[]; label: string }) {
  return (
    <figure aria-label={`Architecture of ${label}`}>
      <ol className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2 md:flex-1">
            <span className="flex-1 rounded-xl border border-border bg-background px-3 py-3 text-center font-mono text-[10px] leading-relaxed">{s}</span>
            {i < steps.length - 1 && <span aria-hidden className="rotate-90 text-primary md:rotate-0">→</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function ProjectCard({ p, compact = false, index }: { p: Project; compact?: boolean; index?: number }) {
  const rows: [string, string][] = [["Problem", p.problem], ["My contribution", p.contribution], ["Results", p.results], ["Limitations", p.limitations]];

  if (compact) {
    return (
      <article className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 md:p-9">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Technical project</p>
          <span aria-hidden className="font-serif text-4xl italic text-primary/35">P</span>
        </div>
        <h3 className="mt-8 font-serif text-3xl leading-[1.08] tracking-[-0.02em] md:text-4xl">{p.title}{p.placeholder && <Placeholder />}</h3>
        <p className="mt-5 leading-relaxed text-muted-foreground">{p.summary}</p>
        <a href={`#project-${p.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">View the project <ArrowUpRight className="h-4 w-4" /></a>
      </article>
    );
  }

  return (
    <article id={`project-${p.slug}`} className="scroll-mt-28 rounded-[2rem] border border-border bg-card p-7 shadow-[0_18px_60px_-45px_var(--color-primary)] md:p-10">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Case study {index ? String(index).padStart(2, "0") : ""}</p>
          <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-[1.08] tracking-[-0.02em] md:text-4xl">{p.title}{p.placeholder && <Placeholder />}</h3>
        </div>
        <span aria-hidden className="hidden font-serif text-6xl italic leading-none text-primary/20 sm:block">{String(index ?? 1).padStart(2, "0")}</span>
      </div>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">{p.technologies.map((t) => <Tag key={t}>{t}</Tag>)}</ul>

      <details className="group mt-8 border-t border-border pt-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-full font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
          <span><span className="group-open:hidden">Explore the case study</span><span className="hidden group-open:inline">Close the case study</span></span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-secondary"><Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45" /></span>
        </summary>
        <div className="mt-8 space-y-8">
          <dl className="grid gap-7 md:grid-cols-2">
            {rows.map(([k, v]) => (
              <div key={k}><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{k}</dt><dd className="mt-3 leading-relaxed text-muted-foreground">{v}</dd></div>
            ))}
          </dl>
          <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Architecture</p><ArchitectureDiagram steps={p.architecture} label={p.title} /></div>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">{p.metrics.map((m) => <MetricBlock key={m.label} m={m} />)}</dl>
          {p.links.length > 0 && (
            <p className="flex gap-4">{p.links.map((l) => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">{l.label} <ArrowUpRight className="h-4 w-4" /></a>)}</p>
          )}
        </div>
      </details>
    </article>
  );
}

export function ExperienceItem({ e }: { e: Experience }) {
  return (
    <li className="grid gap-3 border-b border-border py-7 last:border-0 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-mono text-xs leading-relaxed text-muted-foreground">{e.period}</p>
      <div>
        <h3 className="font-serif text-2xl">{e.role}{e.placeholder && <Placeholder />}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{e.organization}</p>
        <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{e.description}</p>
      </div>
    </li>
  );
}
