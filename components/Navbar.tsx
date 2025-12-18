import Link from "next/link";
import Logo from "./Logo";
import { nav } from "./site-data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-slate-600 hover:text-slate-900">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Talk to us
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-2xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 shadow-soft"
          >
            View services
          </Link>
        </div>
      </div>
    </header>
  );
}
