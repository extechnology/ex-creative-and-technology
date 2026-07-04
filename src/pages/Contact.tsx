import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";



const Contact = () => {

   const revealRef = useReveal<HTMLDivElement>();


  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground">
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal className="max-w-4xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              Start something
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Have a hard problem?{" "}
              <span className="text-muted-foreground">We like those.</span>
            </h2>
            <a
              href="mailto:hello@excreative.co"
              className="mt-10 inline-flex items-center gap-3 border border-border px-6 py-4 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              hello@excreative.co
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact