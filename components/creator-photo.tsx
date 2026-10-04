import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type { Creator } from "@/types/creator";

type CreatorPhotoProps = {
  creator: Creator;
  sizes: string;
  preload?: boolean;
  accent?: boolean;
  zoomOnHover?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
};

export function CreatorPhoto({
  creator,
  sizes,
  preload = false,
  accent = true,
  zoomOnHover = false,
  className,
  imageClassName,
  children,
}: CreatorPhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-muted", className)}>
      <Image
        src={creator.image}
        alt={`${creator.name}, ${creator.category} virtual creator`}
        fill
        preload={preload}
        sizes={sizes}
        className={cn(
          "object-cover",
          zoomOnHover && "transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
      {accent && <div className={cn("absolute inset-0 bg-gradient-to-t", creator.theme.gradient)} />}
      {children}
    </div>
  );
}
