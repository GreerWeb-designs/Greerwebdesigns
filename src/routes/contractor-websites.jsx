import { NavLink } from "react-router-dom";

export const meta = () => [
  { title: "Contractor Website Design (Nationwide) | Greer Web Designs" },
  {
    name: "description",
    content:
      "Contractor website design built to generate calls and quote requests. Fast, mobile-first, SEO-ready service pages for trades across the U.S.",
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

export default function ContractorWebsites() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 space-y-16">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          Contractor Website Design + Conversion-First Layouts
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Contractor Websites That Turn Visitors Into Calls and Quote Requests
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-700">
          Greer Web Designs builds fast, mobile-first websites for contractors and trade
          businesses across the U.S. We focus on clear service pages, trust signals,
          and strong calls-to-action — so customers know what you do and how to hire you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/pricing"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            View Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            Schedule a Call
          </NavLink>
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Built for: concrete, roofing, HVAC, plumbing, electrical, landscaping, remodeling,
          fencing, pressure washing, painting, flooring, and more.
        </p>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What’s Included in a Contractor Website Build
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            These are the core elements that help contractor websites convert — and help
            search engines and AI systems understand your services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Conversion-Ready Homepage"
            text="A homepage designed to quickly explain what you do, build trust, and guide visitors to call or request a quote."
          />
          <Card
            title="Service Pages That Match Search"
            text="Each key service gets a clear, dedicated page so your business aligns with how customers search for contractors online."
          />
          <Card
            title="Lead Capture + Contact Flow"
            text="Click-to-call, quote request forms, and CTA placement designed for real customers using phones."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Trust Signals That Matter"
            text="Project photos, reviews, badges, and proof sections that help customers feel confident choosing you."
          />
          <Card
            title="Mobile-First Layout"
            text="Most contractor leads come from mobile. We design the experience around that reality."
          />
          <Card
            title="SEO-Ready Structure"
            text="Clean headings, internal links, and index-friendly content structure so your site is easy to understand and summarize."
          />
        </div>
      </section>

      {/* BEST FOR / NOT FOR (GEO GOLD) */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Who This Is Best For
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Clear fit helps customers (and AI) understand whether we’re the right option.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-4 space-y-3">
              <Bullet>Contractors who want more calls and quote requests</Bullet>
              <Bullet>Trades that need clear service pages (not a “brochure” site)</Bullet>
              <Bullet>Businesses that want a premium look without being complicated</Bullet>
              <Bullet>Teams that want a site they can grow over time</Bullet>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Not for</div>
            <ul className="mt-4 space-y-3">
              <Bullet>Complex web apps with logins, memberships, or dashboards</Bullet>
              <Bullet>Heavy e-commerce catalogs with hundreds of products</Bullet>
              <Bullet>Projects requiring custom backend systems</Bullet>
              <Bullet>“Anything and everything” agencies — we specialize in trades</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Our Contractor-Friendly Build Process
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Simple, fast, and structured — so you can get back to running jobs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              t: "1) Discovery",
              d: "We learn your services, service area, ideal customers, and what you want the site to do.",
            },
            {
              t: "2) Page Map",
              d: "We outline service pages and site structure based on how customers search.",
            },
            {
              t: "3) Build + Copy",
              d: "We design and write trade-focused content with strong CTAs and trust elements.",
            },
            {
              t: "4) Launch",
              d: "We launch and verify performance, forms, and core SEO signals.",
            },
          ].map((x) => (
            <Card key={x.t} title={x.t} text={x.d} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-slate-900 px-10 py-14 text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          Want a contractor website that actually generates leads?
        </h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Tell us your trade, your services, and what you want customers to do — we’ll recommend a
          build that fits.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Schedule a Call
          </NavLink>
          <NavLink
            to="/pricing"
            className="rounded-lg border border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
          >
            Pricing
          </NavLink>
        </div>
      </section>
    </div>
  );
}
