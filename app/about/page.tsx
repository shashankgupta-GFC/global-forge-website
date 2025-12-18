import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata = { title: "About — Global Forge Consulting" };

const principles = [
  { title: "Engineering excellence", desc: "Strong fundamentals, pragmatic architecture, and clean delivery." },
  { title: "Quality as a system", desc: "QE embedded early with automation and meaningful coverage." },
  { title: "Security by default", desc: "Threat modeling and testing built into the lifecycle." },
  { title: "Transparent partnership", desc: "Clear plans, clear ownership, predictable outcomes." },
];

export default function About() {
  return (
    <>
      <section className="py-16 border-b border-slate-200">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Global Forge</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We help teams build, test, and secure digital products — with enterprise rigor and startup speed.
          </p>
        </div>
      </section>

      <Section
        title="Our approach"
        desc="A delivery model that blends product engineering, quality, and security into one accountable team."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title}>
              <div className="text-base font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
