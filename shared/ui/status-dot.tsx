import { cn } from "@/shared/lib/cn";

type StatusDotProps = {
  glow?: boolean;
};

export function StatusDot({ glow = false }: StatusDotProps) {
  return <span className={cn("size-1.5 rounded-full bg-emerald-400", glow && "shadow-[0_0_12px_rgba(52,211,153,0.9)]")} />;
}
