import { ArrowUpRight } from "lucide-react";
import { CreatorPhoto } from "@/components/creator-photo";
import { StatusDot } from "@/shared/ui/status-dot";
import { TagList } from "@/shared/ui/tag-list";
import { VerifiedName } from "@/shared/ui/verified-name";
import type { Creator } from "@/types/creator";

type CreatorCardProps = {
  creator: Creator;
  onOpen: (creator: Creator) => void;
};

export function CreatorCard({ creator, onOpen }: CreatorCardProps) {
  return (
    <article
      style={{ "--accent": creator.theme.accent }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:border-(--accent)/35 hover:shadow-[0_24px_80px_color-mix(in_oklab,var(--accent)_18%,transparent)] active:border-(--accent)/50 active:duration-100 motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.985]"
    >
      <CreatorPhoto
        creator={creator}
        zoomOnHover
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="aspect-[4/5] rounded-[24px]"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-xl">
          <StatusDot glow />
          Live now
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <VerifiedName name={creator.name} />
          <p className="mt-1 text-xs text-white/60">{creator.category}</p>
        </div>
      </CreatorPhoto>

      <div className="px-2 pb-2 pt-4">
        <p className="line-clamp-2 min-h-10 text-sm leading-5 text-white/60">{creator.bio}</p>

        <TagList tags={creator.tags} className="mt-3" />

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <div>
            <p className="text-sm font-semibold">{creator.followers}</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/30">followers</p>
          </div>

          <span className="grid size-10 place-items-center rounded-full bg-white text-black transition duration-300 group-hover:bg-(--accent) motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-105">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(creator)}
        aria-label={`Open ${creator.name} profile`}
        className="absolute inset-0 rounded-[30px]"
      />
    </article>
  );
}
