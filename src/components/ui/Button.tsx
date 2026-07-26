import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
};

export default function Button({
  variant = "primary",
  icon,
  iconPosition = "left",
  fullWidth = false,
  loading = false,
  children,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "cursor-pointer h-12 px-8 gap-2 font-medium rounded-2xl inline-flex items-center justify-center transition-all duration-300",
        className,
        {
          "bg-white/90 hover:bg-white/60 ": isPrimary,
          "bg-primary text-white/90 hover:bg-primary/80": !isPrimary,
          "w-full": fullWidth,
          className,
          ...props,
          "opacity-75 cursor-not-allowed": disabled,
        },
      )}
      {...props}
    >
      {loading ? (
        <>
          <span>Loading</span>
          <div className="ml-2 animate-spin rounded-full h-4 w-4 border-2 border-t-transparent" />
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}

          {children}

          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
}
