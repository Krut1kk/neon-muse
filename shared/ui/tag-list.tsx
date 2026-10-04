import { cn } from "@/shared/lib/cn";
import { Pill } from "@/shared/ui/pill";

const gaps = {
  sm: "gap-1.5",
  md: "gap-2",
};

type TagListProps = {
  tags: string[];
  size?: keyof typeof gaps;
  className?: string;
};

export function TagList({ tags, size = "sm", className }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap", gaps[size], className)}>
      {tags.map((tag) => (
        <Pill key={tag} size={size}>
          {tag}
        </Pill>
      ))}
    </div>
  );
}
