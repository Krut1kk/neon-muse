import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "section";
};

export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return <Tag className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}
