import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-(--line) bg-white/80 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("p-5", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-5", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold text-(--ink)", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-(--muted)", className)}
      {...props}
    />
  );
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
