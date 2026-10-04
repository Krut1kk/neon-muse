import { ArrowDown } from "lucide-react";
import { creators } from "@/data/creators";
import { BrandMark } from "@/shared/ui/brand-mark";

export function Header() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 mx-auto max-w-6xl px-2.5 pt-2.5 sm:px-6 sm:pt-3 lg:px-8">
      <div className="pointer-events-auto relative flex h-14 items-center justify-between gap-2 overflow-hidden rounded-[20px] border border-white/[0.08] bg-background/75 pl-3 pr-2 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl motion-safe:animate-header-in sm:h-[60px] sm:pl-4 sm:pr-2.5 md:grid md:grid-cols-[1fr_auto_1fr]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 h-16 w-2/3 -translate-x-1/2 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 opacity-10 blur-2xl"
        />

        <a href="#top" className="relative flex items-center gap-2.5 rounded-xl">
          <BrandMark />
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.18em]">Neon Muse</span>
        </a>

        <div className="flex items-center gap-2 md:contents">
          <p className="relative inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/65 md:justify-self-center md:gap-2 md:px-3 md:text-xs">
            <span aria-hidden="true" className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 motion-safe:animate-status-pulse" />
              <span className="relative size-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="md:hidden">{creators.length} online</span>
            <span className="hidden md:inline">{creators.length} creators online</span>
          </p>

          <a
            href="#creators"
            aria-label="Explore creators"
            className="group relative inline-flex h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 text-xs font-medium text-white/85 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] active:bg-white/15 motion-safe:active:scale-[0.98] md:justify-self-end md:px-4"
          >
            <span className="sm:hidden">Explore</span>
            <span className="hidden sm:inline">Explore creators</span>
            <ArrowDown size={14} className="transition-transform duration-200 motion-safe:group-hover:translate-y-[3px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
