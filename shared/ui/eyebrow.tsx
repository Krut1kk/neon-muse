import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

const tones = {
  muted: "text-white/35",
  accent: "text-violet-200/50",
};

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  tone?: keyof typeof tones;
};

export function Eyebrow({ tone = "muted", className, ...props }: EyebrowProps) {
  return <p className={cn("text-xs font-medium uppercase tracking-[0.2em]", tones[tone], className)} {...props} />;
}
