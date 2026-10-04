import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

const sizes = {
  sm: "gap-1.5 px-2.5 py-1 text-[10px] font-medium text-white/50",
  md: "gap-1.5 px-3 py-1.5 text-[11px] font-medium text-white/55",
  lg: "gap-2 px-3 py-2 text-xs text-white/60",
};

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  size?: keyof typeof sizes;
};

export function Pill({ size = "lg", className, ...props }: PillProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/[0.05]", sizes[size], className)}
      {...props}
    />
  );
}
