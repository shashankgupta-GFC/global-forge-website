import Card from "@/components/Card";
import Section from "@/components/Section";
import { serviceGroups } from "@/components/site-data";

export const metadata = { title: "Services — Global Forge Consulting" };

export default function Services() {
  return (
    <>
      <section className="py-16 border-b border-slate-200">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Development, AI, cybersecurity, and testing — everything you need to ship with confidence.
          </p>
        </div>
      </section>

      <Section title="Our capabilities" desc="Choose a single service or combine multiple as a delivery program.">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map((g) => (
            <Card key={g.title}>
              <div className="text-base font-semibold">{g.title}</div>
              <div className="mt-2 text-sm text-slate-600">{g.desc}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
