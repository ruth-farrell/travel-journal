import type { ReactNode, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export default function Select({ className = "", children, ...props }: SelectProps) {
  const classes = `select-default ${className}`.trim();
  return (
    <select {...props} className={classes}>
      {children}
    </select>
  );
}
