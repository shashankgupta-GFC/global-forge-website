import Link from "next/link";
import { brand, nav } from "./site-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">{brand.name}</div>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">
              Engineering, AI, Cybersecurity & Quality — built to scale. We help teams build and ship secure, high‑quality products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-slate-600 hover:text-slate-900">
                {i.label}
              </Link>
            ))}
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-2 text-slate-600">{brand.email}</div>
            <div className="text-slate-600">{brand.phone}</div>
            <div className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
