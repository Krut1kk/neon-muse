import { ArrowUpRight, Sparkles } from "lucide-react";
import { CreatorPhoto } from "@/components/creator-photo";
import { cn } from "@/shared/lib/cn";
import { StatusDot } from "@/shared/ui/status-dot";
import { TagList } from "@/shared/ui/tag-list";
import { VerifiedName } from "@/shared/ui/verified-name";
import type { Creator } from "@/types/creator";

const MAX_CARD_TAGS = 3;

type CreatorCardProps = {
  creator: Creator;
  onOpen: (creator: Creator) => void;
  className?: string;
};

export function CreatorCard({ creator, onOpen, className }: CreatorCardProps) {
  const firstName = creator.name.split(" ")[0];

  return (
    <article
      style={{ "--accent": creator.theme.accent }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[28px] border border-(--accent)/20 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.3)] transition duration-300 hover:border-(--accent)/45 hover:shadow-[0_24px_80px_color-mix(in_oklab,var(--accent)_18%,transparent)] active:border-(--accent)/50 active:duration-100 motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.995]",
        className,
      )}
    >
      <CreatorPhoto
        creator={creator}
        zoomOnHover
        sizes="(max-width: 767px) 90vw, (max-width: 1279px) 50vw, 25vw"
        className="aspect-[10/11] shrink-0"
        imageClassName="object-[center_22%]"
      >
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-2.5 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-xl">
          <StatusDot glow />
          Live now
        </div>
      </CreatorPhoto>

      <div className="relative -mt-px flex flex-1 flex-col bg-surface bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),transparent_40%)] px-5 pb-4 pt-[calc(0.25rem+1px)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <VerifiedName name={creator.name} />
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-(--accent)">{creator.category}</p>
        <p className="mt-3 line-clamp-2 min-h-10 text-sm leading-5 text-white/65">{creator.bio}</p>

        <div className="mt-3 h-6 overflow-hidden">
          <TagList tags={creator.tags.slice(0, MAX_CARD_TAGS)} />
        </div>

        <p className="mt-3.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">Try asking</p>
        <ul className="mt-2 space-y-1.5">
          {creator.prompts.map((prompt) => (
            <li
              key={prompt.label}
              className="flex items-center gap-2 rounded-xl border border-(--accent)/15 bg-(--accent)/[0.06] px-3 py-1.5 text-xs text-white/80"
            >
              <Sparkles size={12} aria-hidden className="shrink-0 text-(--accent)" />
              <span className="truncate">{prompt.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3.5">
          <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-xs">
            <p className="text-white/50">
              <span className="text-sm font-semibold text-white">{creator.followers}</span> followers
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-white/85 transition-colors duration-200 group-hover:text-white">
              Explore {firstName}
              <ArrowUpRight
                size={16}
                className="text-(--accent) transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(creator)}
        aria-label={`Open ${creator.name} profile`}
        className="absolute inset-0 z-10 rounded-[28px]"
      />
    </article>
  );
}
