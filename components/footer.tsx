import { Send } from "lucide-react";
import { creators } from "@/data/creators";
import { BrandMark } from "@/shared/ui/brand-mark";
import { StatusDot } from "@/shared/ui/status-dot";
import { TelegramLink } from "@/shared/ui/telegram-link";

const linkClass = "text-white/60 transition-colors duration-200 hover:text-white";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-2.5 pb-2.5 sm:px-6 sm:pb-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-surface/70 px-6 py-8 sm:px-10 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-24 size-72 rounded-full bg-violet-600/15 blur-[100px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-0 size-72 rounded-full bg-telegram/10 blur-[100px]" />

        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-10">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-xl">
              <BrandMark />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">Neon Muse</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              Discover AI-powered virtual creators across tech, travel, fashion and wellness.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">Product</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#creators" className={linkClass}>
                  Explore creators
                </a>
              </li>
              <li>
                <a href="#top" className={linkClass}>
                  Back to top
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">Status</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <StatusDot glow /> {creators.length} creators online
            </p>
            <TelegramLink label="Continue in Telegram" className="mt-5">
              <Send size={16} /> Continue in Telegram
            </TelegramLink>
          </div>
        </div>

        <div className="relative mt-8 flex flex-col gap-1 border-t border-white/10 pt-5 text-xs text-white/35 sm:mt-10 sm:flex-row sm:justify-between">
          <span className="font-medium uppercase tracking-[0.18em]">Neon Muse</span>
          <span>AI creator showcase prototype</span>
        </div>
      </div>
    </footer>
  );
}
