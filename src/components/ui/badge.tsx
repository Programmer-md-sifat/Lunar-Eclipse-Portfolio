import * as React from "react";
import { cn } from "./cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "secondary" | "success" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-white/10 bg-white/5 text-zinc-300",
    gold: "border-[#dfb277]/30 bg-[#dfb277]/10 text-[#dfb277]",
    secondary: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    destructive: "border-rose-500/30 bg-rose-500/10 text-rose-400",
    outline: "border-white/20 text-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
