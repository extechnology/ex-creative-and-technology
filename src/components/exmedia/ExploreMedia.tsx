import MagneticCard from "../ui/MagneticCard";
import { ArrowRight } from "lucide-react";

import { OrbitingCircles } from "../../components/ui/orbiting-circles"

const ITEMS = [
  {
    title: "Branding",
    pos: "top-10 left-4 md:left-24",
  },
  {
    title: "Business Strategy",
    pos: "top-0 right-10",
  },
  {
    title: "Market Research",
    pos: "top-28 right-0 md:right-32",
  },
  {
    title: "Graphics & Designing",
    pos: "top-48 left-1/2 -translate-x-1/2",
  },
  {
    title: "Satellite & Visual Media",
    pos: "top-72 left-10",
  },
  {
    title: "Digital Marketing",
    pos: "bottom-40 left-1/2 -translate-x-1/2",
  },
  {
    title: "Product Photography",
    pos: "bottom-28 right-8",
  },
  {
    title: "Brand Videos",
    pos: "bottom-14 right-28",
  },
  {
    title: "Brand Ambassadors",
    pos: "bottom-16 left-6",
  },
];

export default function ExploreMedia() {
  return (
    <section className="relative h-screen overflow-hidden bg-black py-24">
      {/* glow */}
      <img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5b21b640,transparent_70%)]" /> */}

      {/* grid */}

      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      <div className="relative mx-auto max-w-7xl">
        <div className="relative flex h-[700px] items-center justify-center">
          <OrbitingCircles radius={300} duration={80}>
            <MagneticCard title="Branding" />
            <MagneticCard title="Business Strategy" />
            <MagneticCard title="Market Research" />
            <MagneticCard title="Graphics" />
          </OrbitingCircles>

          <OrbitingCircles radius={180} duration={28} reverse>
            <MagneticCard title="Digital Marketing" />
            <MagneticCard title="Photography" />
            <MagneticCard title="Brand Videos" />
          </OrbitingCircles>

          <OrbitingCircles radius={90} duration={18}>
            <MagneticCard title="Satellite Media" />
            <MagneticCard title="Brand Ambassadors" />
          </OrbitingCircles>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="group rounded-full border border-violet-500/40
            bg-violet-600/10
            px-8
            py-4
            text-white
            backdrop-blur-xl
            transition
            hover:scale-105
            hover:bg-violet-600"
          >
            <span className="flex items-center gap-3">
              Explore ExMedia
              <ArrowRight className="transition group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
