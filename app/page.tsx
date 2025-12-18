import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { brand, highlights, serviceGroups, industries } from "@/components/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 grid-dots opacity-60" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              Your partner for delivery, quality & security
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              {brand.tagline}
            </h1>
            <p className="mt-4 text-lg text-white/80">{brand.subtagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Get a proposal</Button>
              <Button href="/services" variant="ghost">
                Explore services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.k} className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">{h.k}</div>
                  <div className="text-sm text-slate-600 mt-1">{h.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section
        eyebrow="What we do"
        title="End‑to‑end technology services"
        desc="Build, test, secure, and scale products with one accountable partner."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.slice(0, 4).map((g) => (
            <Card key={g.title}>
              <div className="text-base font-semibold">{g.title}</div>
              <div className="mt-2 text-sm text-slate-600">{g.desc}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {g.items.slice(0, 4).map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services">See all services</Button>
        </div>
      </Section>

      {/* Industries */}
      <Section eyebrow="Where we help" title="Industries we support">
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <Card key={i.title}>
              <div className="text-base font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-slate-600">{i.desc}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-3xl bg-slate-950 text-white p-10 md:p-14 shadow-soft">
            <div className="max-w-3xl">
              <div className="text-sm text-white/70">Ready to move fast?</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Tell us what you’re building — we’ll propose the fastest, safest path to production.
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" className="bg-white text-slate-950 hover:bg-white/90">
                  Contact Global Forge
                </Button>
                <Button href="/about" variant="ghost" className="border-white/20 text-white hover:bg-white/10">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
