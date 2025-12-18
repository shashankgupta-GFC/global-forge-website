import Card from "@/components/Card";
import Section from "@/components/Section";
import { brand } from "@/components/site-data";
import Button from "@/components/Button";

export const metadata = { title: "Contact — Global Forge Consulting" };

export default function Contact() {
  return (
    <>
      <section className="py-16 border-b border-slate-200">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Share your requirements — we’ll respond with a plan, timeline, and the right team mix.
          </p>
        </div>
      </section>

      <Section title="Send a message" desc="This lightweight form opens your email client. You can wire it to an API later.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <form
              action={`mailto:${brand.email}`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="What do you want to build/test/secure?"
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit">Send</Button>
                <Button href="/services" variant="ghost">View services</Button>
              </div>
            </form>
          </Card>

          <Card>
            <div className="text-base font-semibold">Direct contact</div>
            <div className="mt-3 text-sm text-slate-600">
              Email: <span className="text-slate-900 font-medium">{brand.email}</span>
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Phone: <span className="text-slate-900 font-medium">{brand.phone}</span>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              Prefer WhatsApp / Teams? Add your preferred channels here.
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
              <div className="font-semibold">What to include</div>
              <ul className="mt-2 space-y-1">
                <li>• Project type (web/app/AI/security/testing)</li>
                <li>• Timeline and target launch date</li>
                <li>• Current stack and constraints</li>
                <li>• Compliance needs (if any)</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
