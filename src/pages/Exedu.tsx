
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";


type Section = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  points: { k: string; v: string }[];
};

const SECTIONS: Section[] = [
  {
    id: "exedu",
    index: "01",
    eyebrow: "Learning",
    title: "ExEdu",
    lede: "Curriculum, courseware and platforms that make hard subjects click.",
    image: "/exedu.png",
    points: [
      {
        k: "Cohort programs",
        v: "Live, mentor-led learning built around real project work.",
      },
      {
        k: "On-demand libraries",
        v: "Micro-lessons designed for retention, not runtime.",
      },
      {
        k: "Institutional partners",
        v: "Co-built tracks for schools, bootcamps and enterprises.",
      },
    ],
  },
];


const Exedu = () => {

     const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground">
      <section
        id="top"
        className="relative h-svh min-h-[640px] w-full overflow-hidden"
      >
        <img
          src="hero.png"
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/20 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
          <div data-reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground" />
              ex — creative & technology
            </p>
            <h1 className="text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Quiet craft.
              <br />
              <span className="text-muted-foreground">Loud results.</span>
            </h1>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 z-10 border-t border-border/60">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-xs text-muted-foreground sm:px-8">
            <span>Scroll</span>
            <span className="tabular-nums">
              {active !== "exedu"
                ? `${SECTIONS.findIndex((s) => s.id === active) + 1}`
                : "01"}{" "}
              / 05
            </span>
          </div>
        </div> */}
      </section>
      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="relative scroll-mt-16 border-t border-border py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div
              data-reveal
              className="mb-10 flex items-end justify-between gap-6"
            >
              <div>
                <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="tabular-nums">{s.index}</span>
                  <span className="h-px w-8 bg-border" />
                  {s.eyebrow}
                </p>
                <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl md:text-7xl">
                  {s.title}
                </h2>
              </div>
            </div>

            <div
              className={`grid gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                data-reveal
                className="group relative aspect-4/3 overflow-hidden border border-border bg-card"
              >
                <img
                  src={s.image}
                  alt={`${s.title} — ${s.eyebrow}`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-1200 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.title.toLowerCase()}
                </div>
              </div>

              <div data-reveal className="flex flex-col justify-between gap-10">
                <p className="text-balance text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                  {s.lede}
                </p>
                <ul className="divide-y divide-border border-y border-border">
                  {s.points.map((p) => (
                    <li
                      key={p.k}
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5"
                    >
                      <div className="min-w-0">
                        <div className="font-display text-base font-medium">
                          {p.k}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {p.v}
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Exedu