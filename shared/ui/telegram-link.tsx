import type { ReactNode } from "react";
import { TELEGRAM_URL } from "@/shared/config/links";
import { cn } from "@/shared/lib/cn";

const variants = {
  pill: "group inline-flex w-fit gap-3 rounded-full py-3.5",
  block: "flex w-full justify-center gap-2 rounded-2xl py-4",
};

type TelegramLinkProps = {
  label: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
};

export function TelegramLink({ label, variant = "pill", className, children }: TelegramLinkProps) {
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={cn(
        "items-center bg-telegram px-5 text-sm font-semibold text-white shadow-telegram transition duration-200 hover:shadow-[0_18px_56px_rgba(42,171,238,0.32)] hover:brightness-110 active:brightness-95 motion-safe:active:scale-[0.98]",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
