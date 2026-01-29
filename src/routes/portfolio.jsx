import { NavLink } from "react-router-dom";

export const meta = () => [
  { title: "Portfolio | Greer Web Designs" },
  {
    name: "description",
    content:
      "Featured contractor website case study: Imperium Concrete. Web + mobile layout built for speed, clear service pages, and conversion-focused calls and quote requests.",
  },
];

function Card({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3 text-slate-700">
      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
      <span>{children}</span>
    </li>
  );
}

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 space-y-16">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          Portfolio / Featured Case Study
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          A Contractor Website Built to Generate Calls
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-700">
          We’re building a focused portfolio around trades and contractor websites.
          Here’s a featured project showing the exact style of work we deliver:
          clean design, fast performance, and conversion-first layout.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://imperiumconcrete.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
          >
            Visit Live Site
          </a>

          <NavLink
            to="/contact"
            className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition text-center"
          >
            Get a Quote
          </NavLink>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Project: Imperium Concrete
            </h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              Contractor website designed to be easy to understand, easy to navigate on mobile,
              and built to convert visitors into calls and quote requests.
            </p>
          </div>

          <a
            href="https://imperiumconcrete.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            imperiumconcrete.com
          </a>
        </div>

        {/* Proof cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Conversion-first layout"
            text="Clear calls-to-action and a contact flow designed to generate quote requests."
          />
          <Card
            title="Trade-friendly structure"
            text="Service-first content so customers quickly understand what’s offered and how to hire."
          />
          <Card
            title="Mobile-first experience"
            text="Most contractor traffic is mobile—this layout is built for that reality."
          />
        </div>

        {/* Images */}
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {/* Desktop image */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Desktop Website Preview
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Clean hero messaging, proof sections, and a layout designed to drive calls.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/images/portfoliosite1.png"
                alt="Imperium Concrete desktop website preview"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Mobile Website Preview
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Mobile navigation and CTAs designed for on-the-go customers.
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/images/portfoliomob1.png"
                alt="Imperium Concrete mobile website preview"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Quick bullets (AI-quotable) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            What this project demonstrates
          </h3>
          <ul className="mt-5 space-y-3">
            <Bullet>Clear service-first messaging for trades and contractors</Bullet>
            <Bullet>Conversion-first structure (calls + quote requests)</Bullet>
            <Bullet>Mobile-first layout for real customer behavior</Bullet>
            <Bullet>SEO/GEO-ready page structure and headings</Bullet>
          </ul>
        </div>
      </section>

      {/* “WHY ONLY ONE” HANDLED HERE */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          More Projects Are In Progress
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Greer Web Designs is intentionally focused on contractor websites and SEO/GEO structure.
          We’re actively building additional trade sites right now—this page highlights a featured build
          so you can see the quality and the approach.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Homepage mockup"
            text="We can mock up a homepage direction for your trade and services so you can see the vibe before committing."
          />
          <Card
            title="Service page plan"
            text="We map your services into pages that match how customers search, so your website is built to rank and convert."
          />
          <Card
            title="Launch-ready system"
            text="Fast, clean builds that are easy to expand over time with new services and GEO-friendly updates."
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
          >
            Schedule a Call
          </NavLink>

          <NavLink
            to="/pricing"
            className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition text-center"
          >
            View Pricing
          </NavLink>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl bg-slate-900 px-10 py-14 text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          Want a trades-focused website that gets you more calls?
        </h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Tell us your trade and your top services. We’ll recommend the best page plan and next steps.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
          >
            Get a Quote
          </NavLink>
          <NavLink
            to="/contractor-websites"
            className="rounded-lg border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition text-center"
          >
            Contractor Websites
          </NavLink>
        </div>
      </section>
    </div>
  );
}
