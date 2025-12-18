import Card from "@/components/Card";
import Section from "@/components/Section";
import { industries } from "@/components/site-data";

export const metadata = { title: "Industries — Global Forge Consulting" };

export default function Industries() {
  return (
    <>
      <section className="py-16 border-b border-slate-200">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Industries</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We adapt delivery and governance to your domain — from regulated systems to high‑scale platforms.
          </p>
        </div>
      </section>

      <Section title="Where we deliver impact">
        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <Card key={i.title}>
              <div className="text-base font-semibold">{i.title}</div>
              <div className="mt-2 text-sm text-slate-600">{i.desc}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
