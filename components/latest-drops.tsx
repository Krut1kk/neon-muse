import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import { Eyebrow } from "@/shared/ui/eyebrow";
import type { CreatorDrop } from "@/types/creator";

const FEATURED_SIZES = "(max-width: 767px) 90vw, (max-width: 1023px) 420px, 340px";
const SECONDARY_SIZES = "(max-width: 767px) 90vw, (max-width: 1023px) 280px, 230px";

type LatestDropsProps = {
  drops: CreatorDrop[];
};

export function LatestDrops({ drops }: LatestDropsProps) {
  return (
    <div>
      <Eyebrow className="mb-3">Latest drops</Eyebrow>
      <div className="grid gap-4 md:grid-cols-[1.45fr_1fr] md:grid-rows-2 md:gap-3">
        {drops.map((drop, index) => {
          const isFeatured = index === 0;

          return (
            <article
              key={drop.title}
              className={cn(
                "group/drop relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-surface-muted transition duration-300 hover:border-(--accent)/40 hover:shadow-[0_18px_50px_color-mix(in_oklab,var(--accent)_16%,transparent)]",
                isFeatured && "md:row-span-2 md:aspect-auto",
              )}
            >
              <Image
                src={drop.image}
                alt=""
                fill
                sizes={isFeatured ? FEATURED_SIZES : SECONDARY_SIZES}
                className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover/drop:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-white/90 backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className={cn("font-semibold leading-snug", isFeatured ? "text-xl" : "text-base md:text-sm")}>{drop.title}</p>
                <p className="mt-1 text-xs font-medium text-(--accent)">{drop.meta}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
