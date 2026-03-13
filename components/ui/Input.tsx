"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-[#2C2C2C]"
      >
        {label}
        {props.required && (
          <span className="text-[#A09080] ml-0.5">*</span>
        )}
      </label>
      <input
        id={inputId}
        className={[
          "w-full px-3.5 py-2.5 text-sm text-[#2C2C2C] bg-white border rounded",
          "placeholder:text-[#CFC8BE]",
          "transition-colors duration-150",
          "focus:outline-none focus:border-[#A09080] focus:ring-1 focus:ring-[#A09080]",
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
            : "border-[#E5E0D8]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {hint && !error && (
        <p className="text-xs text-[#A09080]">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
