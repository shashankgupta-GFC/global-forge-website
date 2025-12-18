import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  href?: string;
  variant?: "primary" | "ghost";
};

const base =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500/50";
const styles = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-soft",
  ghost: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
} as const;

export default function Button({ href, variant = "primary", className = "", ...props }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{props.children}</Link>;
  return <button {...props} className={cls} />;
}
