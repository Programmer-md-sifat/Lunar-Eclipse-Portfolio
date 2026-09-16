import * as React from "react";
import { cn } from "./cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "danger";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb277]/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      default:
        "bg-[#dfb277] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(223,178,119,0.35)] active:scale-[0.98]",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 hover:border-white/20 border border-white/10 active:scale-[0.98]",
      outline:
        "border border-[#dfb277]/40 text-[#dfb277] hover:bg-[#dfb277]/10 hover:border-[#dfb277] active:scale-[0.98]",
      ghost:
        "text-zinc-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      danger:
        "bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 hover:text-red-300 hover:border-red-500/50 active:scale-[0.98]",
    };

    const sizes = {
      default: "h-11 px-5 py-2.5",
      sm: "h-8 px-3 text-[11px]",
      lg: "h-12 px-7 text-sm",
      icon: "h-9 w-9 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
