import { BadgeCheck } from "lucide-react";

const sizes = {
  md: { as: "h3", text: "text-xl tracking-[-0.03em]", gap: "gap-1.5", icon: 16 },
  lg: { as: "h2", text: "text-3xl tracking-[-0.04em]", gap: "gap-2", icon: 19 },
} as const;

type VerifiedNameProps = {
  name: string;
  size?: keyof typeof sizes;
};

export function VerifiedName({ name, size = "md" }: VerifiedNameProps) {
  const { as: Heading, text, gap, icon } = sizes[size];

  return (
    <div className={`flex items-center ${gap}`}>
      <Heading className={`${text} font-semibold`}>{name}</Heading>
      <BadgeCheck
        size={icon}
        aria-hidden
        className="text-[var(--accent,var(--color-violet-300))] drop-shadow-[0_0_6px_var(--accent,transparent)]"
      />
      <span className="sr-only">Verified creator</span>
    </div>
  );
}
