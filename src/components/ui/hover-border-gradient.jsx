import React from "react";
import { cn } from "../../lib/utils"; 

export const HoverBorderGradient = ({
  as: Component = "div",
  className,
  containerClassName,
  children,
  ...props
}) => {
  return (
    <div className={`relative group ${containerClassName || ""}`}>
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"
        aria-hidden="true"
      />
      <Component
        className={`relative z-10 cursor-pointer rounded-full px-6 py-3 font-medium shadow-md transition-all duration-300 ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};
