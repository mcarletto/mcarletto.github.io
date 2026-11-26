import { ArrowDown, ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand, BrandMark } from "@/components/portfolio/brand";
import { contact, cv, experience, presentations, profile, projects, publications, research } from "@/content/portfolio";
import { ExperienceItem, Placeholder, ProjectCard, PublicationItem, ResearchCard, Section } from "@/components/portfolio/ui";

const NAV = [["about", "About"], ["research", "Research"], ["projects", "Projects"], ["work", "Experience"], ["cv", "CV"], ["contact", "Contact"]] as const;

function HeroVisual() {
  if (profile.heroImage) {
    return (
      <div className="relative min-h-[30rem] overflow-hidden bg-secondary lg:min-h-[44rem]">
        <img src={profile.heroImage} alt="Maria looking at a world map of research collaborations in a university hallway" className="absolute inset-0 h-full w-full object-cover object-[30%_center]" />
        <div aria-hidden className="hero-scrim absolute inset-x-0 bottom-0 h-44" />
        <p className="absolute bottom-7 left-7 right-7 max-w-xs font-serif text-3xl italic leading-tight text-primary-foreground sm:bottom-10 sm:left-10 sm:text-4xl">
          Ideas across disciplines.
        </p>
      </div>
    );
  }

  return (
    <div className="hero-canvas relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground lg:min-h-[44rem]">
      <div aria-hidden className="absolute -left-28 top-24 h-96 w-96 rounded-full border border-primary-foreground/15" />
      <div aria-hidden className="absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full border border-primary-foreground/15" />
      <div aria-hidden className="absolute right-12 top-16 h-20 w-20 rounded-full bg-accent/70 blur-2xl" />
      <div className="relative z-10 flex h-full min-h-[30rem] flex-col justify-between p-7 sm:p-10 lg:min-h-[44rem]">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70">
          <span>Personal portfolio</span><span>MC — 2026</span>
        </div>
        <div className="hero-mark flex flex-1 items-center justify-center py-10">
          <BrandMark decorative className="h-56 w-56 text-primary-foreground/90 sm:h-72 sm:w-72" />
        </div>
        <div className="flex items-end justify-between gap-6">
          <p className="max-w-xs font-serif text-2xl italic leading-tight sm:text-3xl">Ideas across disciplines.</p>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 sm:block">Maria Carletto</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <nav aria-label="Primary" className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" aria-label="Maria Carletto, back to top" className="text-foreground transition-colors hover:text-primary"><Brand /></a>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ul id="nav-list" className={`${open ? "flex" : "hidden"} absolute inset-x-4 top-[calc(100%+0.5rem)] flex-col gap-1 rounded-3xl border border-border bg-card p-4 shadow-[0_24px_70px_-35px_var(--color-primary)] md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:px-0 md:py-1 md:hover:bg-transparent">{label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">
        <div id="top" className="scroll-mt-24 px-4 pb-10 pt-5 sm:px-6 lg:px-8">
          <section aria-labelledby="intro-h" className="mx-auto grid max-w-[90rem] overflow-hidden rounded-[2rem] border border-border lg:grid-cols-[1.04fr_0.96fr]">
            <HeroVisual />
            <div className="flex items-center bg-secondary px-7 py-14 sm:px-12 sm:py-20 lg:px-16 xl:px-20">
              <div className="hero-enter max-w-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Research · Projects · Ideas</p>
                <h1 id="intro-h" className="mt-7 font-serif text-6xl leading-[0.95] tracking-[-0.035em] sm:text-7xl xl:text-[6.5rem]">
                  Hello,<br />I’m <em className="font-normal text-primary">Maria.</em>
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">{profile.introduction}</p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Discover my work <ArrowDown className="h-4 w-4" /></a>
                  <a href="#about" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">More about me <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <section aria-labelledby="featured-h" className="reveal py-12 md:py-16">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Selected work</p><h2 id="featured-h" className="mt-2 font-serif text-4xl tracking-[-0.02em]">A few things I’m exploring</h2></div>
              <a href="#projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">View all projects <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {research[0] && <ResearchCard r={research[0]} compact />}
              {featured.filter((p) => p.slug === "bus-driver-scheduling").map((p) => <ProjectCard key={p.slug} p={p} compact />)}
            </div>
          </section>

          <Section
            id="about"
            index="01"
            title="About"
            aside={
              profile.photo && (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-40 w-32 rounded-3xl object-cover object-top shadow-[0_18px_50px_-30px_var(--color-primary)]"
                />
              )
            }
          >
            <div className="max-w-3xl space-y-5 text-xl leading-relaxed md:text-2xl">
              {profile.bio.map((b) => <p key={b}>{b}</p>)}
              <p className="pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{profile.languages}</p>
            </div>
            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-secondary p-6"><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Background</dt><dd className="mt-3 font-serif text-2xl">Medicine</dd></div>
              <div className="rounded-3xl bg-secondary p-6"><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Current focus</dt><dd className="mt-3 font-serif text-2xl">Research & technology</dd></div>
              <div className="rounded-3xl bg-secondary p-6"><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">Perspective</dt><dd className="mt-3 font-serif text-2xl">Interdisciplinary</dd></div>
            </dl>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Academic background</h3>
                <ul className="mt-5 space-y-4">
                  {profile.education.map((e) => (
                    <li key={e.degree} className="rounded-3xl border border-border bg-card p-6"><p className="font-serif text-2xl leading-tight">{e.degree}{e.placeholder && <Placeholder />}</p><p className="mt-3 text-sm text-muted-foreground">{e.institution} · {e.period}</p></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Research interests</h3>
                <ul className="mt-5 divide-y divide-border border-y border-border">{profile.interests.map((i, index) => <li key={i} className="flex gap-4 py-4"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><span>{i}</span></li>)}</ul>
              </div>
            </div>
          </Section>

          <Section id="research" index="02" title="Research">
            <div className="space-y-8">{research.map((r) => <ResearchCard key={r.title} r={r} />)}</div>
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <div><h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Peer-reviewed publications</h3><ul className="mt-3 border-t border-border">{publications.map((p) => <PublicationItem key={p.title} p={p} />)}</ul></div>
              <div><h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Conference presentations</h3><ul className="mt-3 border-t border-border">{presentations.map((p) => <PublicationItem key={p.title} p={p} />)}</ul></div>
            </div>
          </Section>

          <Section id="projects" index="03" title="Projects">
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">A closer look at the questions, methods, and systems behind selected technical work.</p>
            <div className="space-y-7">{projects.map((p, index) => <ProjectCard key={p.slug} p={p} index={index + 1} />)}</div>
          </Section>

          <Section id="work" index="04" title="Experience">
            <ol className="border-t border-border">{experience.map((e) => <ExperienceItem key={e.role + e.period} e={e} />)}</ol>
          </Section>

          <Section id="cv" index="05" title="Curriculum vitae">
            <div className="rounded-[2rem] bg-secondary p-7 md:p-10">
              <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                <div><p className="font-serif text-3xl">The longer version.</p><p className="mt-2 text-sm text-muted-foreground">Last updated: {cv.updated}</p></div>
                <a href={cv.file} download className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"><Download className="h-4 w-4" /> Download CV</a>
              </div>
              <object data={cv.file} type="application/pdf" aria-label="CV preview" className="mt-8 h-[36rem] w-full rounded-2xl border border-border bg-card">
                <p className="p-6">Your browser cannot display the PDF. <a href={cv.file} className="text-primary underline">Download it instead.</a></p>
              </object>
            </div>
          </Section>

          <Section id="contact" index="06" title="Contact">
            <div className="overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground md:p-10">
              <p className="max-w-2xl font-serif text-4xl leading-[1.05] md:text-5xl">Have a question, an idea, or a project in mind?</p>
              <p className="mt-5 text-primary-foreground/70">I’d be glad to hear from you.</p>
              <ul className="mt-10 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
                {contact.map((c) => (
                  <li key={c.label} className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/60">{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="w-fit underline-offset-4 transition-opacity hover:underline hover:opacity-80">{c.value}{c.placeholder && <Placeholder inverse />}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </main>
      <footer className="mx-auto flex max-w-[90rem] flex-col justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-12">
        <Brand className="text-primary" />
        <p className="max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground md:text-right">© {new Date().getFullYear()} {profile.name}<br />No cookies, analytics, or trackers.</p>
      </footer>
    </>
  );
}
