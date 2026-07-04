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
    id: "company",
    index: "05",
    eyebrow: "Studio",
    title: "Company",
    lede: "A small, opinionated studio of engineers, designers, educators and storytellers.",
    image: "/company.png",
    points: [
      {
        k: "Founded 2021",
        v: "Independent and self-funded. Built to last, not to flip.",
      },
      {
        k: "Global, remote",
        v: "Distributed team across three continents and eight cities.",
      },
      {
        k: "Selective work",
        v: "Six to eight engagements a year. Deep over broad.",
      },
    ],
  },
];


const Company = () => {

  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground">
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
  )
}

export default Company