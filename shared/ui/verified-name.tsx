import { BadgeCheck } from "lucide-react";

type VerifiedNameProps = {
  name: string;
};

export function VerifiedName({ name }: VerifiedNameProps) {
  return (
    <div className="flex items-center gap-1.5">
      <h3 className="text-[1.375rem] font-semibold leading-7 tracking-[-0.03em]">{name}</h3>
      <BadgeCheck
        size={17}
        aria-hidden
        className="text-[var(--accent,var(--color-violet-300))] drop-shadow-[0_0_6px_var(--accent,transparent)]"
      />
      <span className="sr-only">Verified creator</span>
    </div>
  );
}
