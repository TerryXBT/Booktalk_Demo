"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#3D3530] !text-white hover:bg-[#2C2825] active:bg-[#221e1b] border border-[#3D3530]",
  secondary:
    "bg-transparent text-[#3D3530] border border-[#3D3530] hover:bg-[#3D3530] hover:!text-white",
  ghost:
    "bg-transparent text-[#7A7065] border border-transparent hover:text-[#2C2C2C] hover:border-[#E5E0D8]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-xs tracking-wide",
  md: "px-5 py-2.5 text-[13px] tracking-wide",
  lg: "px-7 py-3 text-sm tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A09080]/50 focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        disabled ? "opacity-40 pointer-events-none" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
