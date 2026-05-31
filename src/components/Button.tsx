import { Link } from "react-router-dom";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  to?: string;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2";

const variantClasses = {
  primary: "bg-cocoa text-white shadow-soft hover:-translate-y-0.5 hover:bg-rose",
  secondary:
    "border border-rose/20 bg-white/80 text-cocoa shadow-sm hover:-translate-y-0.5 hover:border-rose/40 hover:bg-white",
  ghost: "text-cocoa hover:bg-white/70",
};

export default function Button({
  children,
  variant = "primary",
  icon,
  to,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <a
        className={classes}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...props}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
