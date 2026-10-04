import { Sparkles } from "lucide-react";
import { Container } from "@/shared/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
          <span className="grid size-8 place-items-center rounded-xl bg-white text-black">
            <Sparkles size={16} />
          </span>
          Neon Muse
        </a>

        <a
          href="#creators"
          className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 active:bg-white/15 motion-safe:active:scale-[0.97]"
        >
          Discover creators
        </a>
      </Container>
    </header>
  );
}
