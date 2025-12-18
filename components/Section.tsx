import type { PropsWithChildren } from "react";

export default function Section({
  title,
  eyebrow,
  desc,
  children,
}: PropsWithChildren<{ title: string; eyebrow?: string; desc?: string }>) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-widest text-brand-700 uppercase">{eyebrow}</div>
          ) : null}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {desc ? <p className="mt-3 text-slate-600">{desc}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
