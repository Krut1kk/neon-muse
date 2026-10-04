import { Eyebrow } from "@/shared/ui/eyebrow";
import type { CreatorDrop } from "@/types/creator";

type LatestDropsProps = {
  drops: CreatorDrop[];
};

export function LatestDrops({ drops }: LatestDropsProps) {
  return (
    <div>
      <Eyebrow className="mb-3">Latest drops</Eyebrow>
      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {drops.map((drop, index) => (
          <article
            key={drop.title}
            className="group/drop relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-200 hover:border-(--accent)/30 hover:bg-white/[0.06]"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-(--accent)/20 opacity-50 blur-2xl transition-opacity duration-200 group-hover/drop:opacity-100" />
            <span className="relative text-[10px] font-medium uppercase tracking-[0.18em] text-(--accent)">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="relative mt-2 text-sm font-medium leading-5">{drop.title}</p>
            <p className="relative mt-1.5 text-[11px] text-white/40">{drop.meta}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
