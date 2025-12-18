export const brand = {
  name: "Global Forge Consulting",
  tagline: "Engineering, AI, Cybersecurity & Quality — built to scale.",
  subtagline:
    "From product development to proactive security and end-to-end testing, we help teams ship faster with confidence.",
  email: "hello@globalforgeconsulting.com",
  phone: "+91-XXXXXXXXXX",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceGroups = [
  {
    title: "Software & Product Development",
    desc: "Build web, mobile, and enterprise software from idea to scale.",
    items: [
      "Custom Software Development",
      "SaaS & Product Engineering",
      "API & Microservices",
      "Legacy Modernization",
      "Maintenance & Support",
    ],
  },
  {
    title: "Web & Mobile App Development",
    desc: "High-performance experiences across platforms.",
    items: [
      "Web Apps (React / Next.js)",
      "Backend (Node / Java / .NET / Python)",
      "iOS & Android",
      "Flutter / React Native",
      "E‑commerce & CMS",
    ],
  },
  {
    title: "AI, Data & Automation",
    desc: "Turn data into decisions and accelerate delivery with automation.",
    items: [
      "AI/ML Solutions",
      "NLP & Chatbots",
      "Data Engineering (ETL/ELT)",
      "Predictive Analytics",
      "Intelligent Test Automation",
    ],
  },
  {
    title: "Quality Engineering & Testing",
    desc: "Functional + non-functional testing for every stage of delivery.",
    items: [
      "Manual & Automation Testing",
      "UAT (User Acceptance Testing)",
      "API & Integration Testing",
      "Performance / Load / Stress Testing",
      "Mobile & Cross-browser Testing",
    ],
  },
  {
    title: "Security & Cybersecurity Testing",
    desc: "Proactive security built into your SDLC.",
    items: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "AppSec (SAST/DAST)",
      "Cloud Security & Hardening",
      "DevSecOps Enablement",
    ],
  },
  {
    title: "Cloud & DevOps",
    desc: "Ship reliably with CI/CD, observability, and scalable infrastructure.",
    items: [
      "Cloud Migration (AWS/Azure/GCP)",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & SRE",
      "Cost & Performance Optimization",
    ],
  },
] as const;

export const industries = [
  { title: "FinTech", desc: "Compliance-first QE and security for regulated products." },
  { title: "SaaS", desc: "Release velocity, reliability, and platform scale." },
  { title: "E‑commerce", desc: "Performance engineering and conversion-focused UX." },
  { title: "Healthcare", desc: "Quality and privacy aligned with industry standards." },
  { title: "Enterprise", desc: "Modernization, integrations, and governance at scale." },
] as const;

export const highlights = [
  { k: "AI‑First Quality", v: "Smarter test strategy, automation, and insights." },
  { k: "Security by Design", v: "Proactive defense across code, cloud, and ops." },
  { k: "End‑to‑End Delivery", v: "Development → testing → release → support." },
  { k: "Outcome Focused", v: "Speed, stability, and measurable business impact." },
] as const;
