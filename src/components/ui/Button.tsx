import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "grey";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

export default function Button({ variant = "default", className = "", children, ...props }: ButtonProps) {
  const classes = `${variant} ${className}`.trim();
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
