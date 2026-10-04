import { ArrowUpRight, MessageCircleMore, Send } from "lucide-react";
import { Container } from "@/shared/ui/container";
import { Pill } from "@/shared/ui/pill";
import { TelegramLink } from "@/shared/ui/telegram-link";

export function TelegramCta() {
  return (
    <Container as="section" className="pb-24">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-surface p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12">
        <div className="absolute -right-20 -top-24 size-72 rounded-full bg-telegram/20 blur-[90px]" />
        <div className="absolute -bottom-24 left-1/3 size-64 rounded-full bg-violet-500/15 blur-[90px]" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Pill>
              <MessageCircleMore size={14} className="text-telegram" /> Chat-first experience
            </Pill>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">From discovery to conversation in one tap.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Browse a creator, preview the interaction and continue in Telegram — the place your audience already knows how to use.
            </p>
          </div>

          <TelegramLink label="Open Neon Muse in Telegram">
            <Send size={16} /> Open Telegram
            <ArrowUpRight size={15} className="transition motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          </TelegramLink>
        </div>
      </div>
    </Container>
  );
}
