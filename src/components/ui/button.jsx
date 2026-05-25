import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand)] text-white shadow-[0_18px_40px_rgba(14,116,144,0.24)] hover:bg-[var(--brand-strong)]",
        secondary:
          "border border-[var(--line)] bg-white/80 text-[var(--ink)] hover:bg-white",
        outline:
          "border border-[var(--line)] bg-transparent text-[var(--ink)] hover:bg-white/70",
        ghost: "text-[var(--ink)] hover:bg-white/70",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, variant = "default", size = "default", as: Component = "button", ...props }, ref) => {
    const Comp = Component;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
