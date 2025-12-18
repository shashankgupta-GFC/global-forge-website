import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo circle */}
      <div className="h-10 w-10 rounded-xl bg-brand-600 text-white grid place-items-center text-[11px] font-bold shadow-soft">
        GFC
      </div>

      {/* Text */}
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight text-slate-900">
          Global Forge
        </div>
        <div className="text-xs text-slate-500 -mt-0.5">
          Consulting
        </div>
      </div>
    </Link>
  );
}
