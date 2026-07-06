import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface Props {
  title: string;
  className?: string;
}

export default function MagneticCard({ title, className = "" }: Props) {
  const magneticRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = magneticRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 180;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;

      const x = -dx * force * 0.25;
      const y = -dy * force * 0.25;
      const r = dx * 0.02;

      card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
    }
  };

  const reset = () => {
    if (!magneticRef.current) return;

    magneticRef.current.style.transform =
      "translate3d(0px,0px,0px) rotate(0deg)";
  };

  return (
    <div className={className}>
      <div
        ref={magneticRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
          group
          cursor-pointer
          select-none
          rounded-2xl
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-xl
          px-6
          py-5
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
          transition-transform
          duration-300
          ease-out
          hover:border-violet-500/50
          hover:shadow-violet-500/20
          hover:scale-105
          will-change-transform
        "
      >
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="font-medium text-white">{title}</span>

          <ArrowUpRight
            size={18}
            className="opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </div>
  );
}
