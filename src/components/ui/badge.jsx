import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--brand)] text-white",
        secondary: "border-[var(--line)] bg-white/80 text-[var(--ink)]",
        outline: "text-[var(--ink)] border-[var(--line)] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
