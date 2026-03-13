import React from "react";
import { getCategoryLabel } from "@/data/products";

interface BadgeProps {
  category: string;
  className?: string;
}

export function Badge({ category, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-block px-2.5 py-0.5 text-xs font-medium rounded-full",
        "bg-[#F7F4F0] text-[#7A7065] border border-[#E5E0D8]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {getCategoryLabel(category)}
    </span>
  );
}
