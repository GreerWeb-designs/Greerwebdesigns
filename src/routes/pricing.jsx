import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export const meta = () => [
  { title: "Website Pricing | Greer Web Designs" },
  {
    name: "description",
    content:
      "Contractor website pricing by number of pages, plus add-ons for logo design and SEO/GEO monitoring. Built for trades and service companies across the U.S.",
  },
];

const pricing = {
  sites: [
    {
      name: "3-Page Starter",
      pages: "Up to 3 pages",
      wasPrice: "$509",
      price: "$429",
      bestFor: "New businesses that need a clean online presence fast.",
      includes: [
        "Home + 2 additional pages (often: About + Contact)",
        "Mobile-first design",
        "Conversion-first layout (calls + quote requests)",
        "Basic on-page SEO structure (titles/headings)",
        "Contact form + click-to-call",
        "Fast performance setup",
      ],
      cta: { label: "Get Starter Pricing", to: "/contact" },
      featured: false,
    },
    {
      name: "5-Page Growth",
      pages: "Up to 5 pages",
      wasPrice: "$779",
      price: "$699",
      bestFor:
        "Established contractors who need service pages to match search intent.",
      includes: [
        "Home + 4 additional pages (recommended: 2–3 service pages + Contact)",
        "Mobile-first design",
        "Conversion-first layout + stronger CTAs",
        "SEO-ready service-page structure",
        "Basic image optimization",
        "Contact form + click-to-call",
      ],
      cta: { label: "Get Growth Pricing", to: "/contact" },
      featured: true,
    },
    {
      name: "7+ Page Authority",
      pages: "7+ pages",
      wasPrice: "$1,079",
      price: "$999",
      bestFor:
        "Trades who want to scale SEO/GEO with multiple services and locations.",
      includes: [
        "Home + dedicated pages per service",
        "Stronger internal linking for SEO/GEO",
        "Conversion-first layout + trust sections (reviews/proof)",
        "SEO-friendly site structure for future expansion",
        "Optional blog/FAQ foundation (if needed)",
        "Contact form + click-to-call",
      ],
      cta: { label: "Plan My Site", to: "/contact" },
      featured: false,
    },
  ],
  addons: [
    {
      name: "Logo Design",
      wasPrice: "$209",
      price: "$129",
      desc: "A clean logo that looks professional on your site, truck, and social profiles.",
      bullets: [
        "Primary logo + simple variant",
        "Color + mono versions",
        "Web-ready files",
      ],
    },
    {
      name: "SEO/GEO Monitoring + Refresh (Monthly)",
      wasPrice: "$219/mo",
      price: "$139/mo",
      desc: "For contractors who want steady growth: track performance and improve the pages that drive calls.",
      bullets: [
        "Monthly visibility/ranking checks (high-level)",
        "Service page improvements (copy, headings, CTAs)",
        "GEO updates so AI summaries can describe you accurately",
      ],
    },
  ],
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function List({ items }) {
  return (
    <ul className="mt-5 space-y-3 text-sm text-slate-700">
      {items.map((x) => (
        <li key={x} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceRow({ wasPrice, price }) {
  return (
    <div className="mt-5 flex items-end gap-3">
      <span className="relative text-lg font-medium text-slate-500">
        {wasPrice}
        <span className="pointer-events-none absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-[-12deg] bg-slate-400/80" />
      </span>
      <span className="text-4xl font-extrabold text-slate-900">{price}</span>
    </div>
  );
}

function SalePopup({ open, onClose, endsText }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Limited-Time Sale
        </div>

        <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
          Launch Special — Pricing Ends {endsText}
        </h3>

        <p className="mt-3 text-slate-600">
          We’re offering discounted launch pricing for contractors and trade
          businesses. Book a quick call and we’ll recommend the right page plan
          for your services.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:opacity-90 transition text-center min-h-[44px]"
          >
            Schedule a Call
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition text-center min-h-[44px]"
          >
            Continue to Pricing
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-xl hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="M6 6 18 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const SALE_END = useMemo(() => new Date(2026, 1, 14, 23, 59, 59), []);
  const endsText = "2/14";

  const [saleOpen, setSaleOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const dismissed = localStorage.getItem("gwd_sale_dismissed");

    if (now <= SALE_END && !dismissed) setSaleOpen(true);
  }, [SALE_END]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14 space-y-16">
      <SalePopup
        open={saleOpen}
        endsText={endsText}
        onClose={() => {
          localStorage.setItem("gwd_sale_dismissed", "1");
          setSaleOpen(false);
        }}
      />

      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-blue-600">
              Contractor Website Pricing (Nationwide)
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Simple pricing based on how many pages you need
            </h1>
            <p className="mt-4 max-w-3xl text-slate-700">
              Most trade businesses don’t need a complicated website — they need
              clear service pages, strong calls-to-action, and SEO/GEO-ready
              structure that helps customers find and contact them.
            </p>
          </div>

          <div className="flex gap-2">
            <Badge>Fast turnaround</Badge>
            <Badge>Mobile-first</Badge>
            <Badge>SEO/GEO-ready</Badge>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
          >
            Schedule a Call
          </NavLink>
          <NavLink
            to="/portfolio"
            className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition text-center"
          >
            View Portfolio
          </NavLink>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Website Packages
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            These packages are designed for contractors and trade businesses.
            Page count usually maps to: Home + Contact + about/credibility pages
            + dedicated service pages.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.sites.map((p) => (
            <div
              key={p.name}
              className={cx(
                "rounded-3xl border bg-white p-8 shadow-sm",
                p.featured
                  ? "border-blue-200 ring-1 ring-blue-200"
                  : "border-slate-200"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-bold text-slate-900">{p.name}</div>
                {p.featured && (
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="mt-2 text-sm text-slate-600">{p.pages}</div>

              <PriceRow wasPrice={p.wasPrice} price={p.price} />

              <div className="mt-2 text-sm text-slate-600">{p.bestFor}</div>

              <List items={p.includes} />

              <div className="mt-8">
                <NavLink
                  to={p.cta.to}
                  className={cx(
                    "block rounded-lg px-6 py-3 text-sm font-semibold text-center transition",
                    p.featured
                      ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-md hover:opacity-90"
                      : "border border-slate-600 text-slate-800 hover:bg-slate-50"
                  )}
                >
                  {p.cta.label}
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            Not sure how many pages you need?
          </h3>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Tell us your trade and services, and we’ll recommend the right page
            plan. A lot of contractors win with a 5-page build: Home + Contact +
            2–3 service pages.
          </p>

          <div className="mt-6">
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Get a Recommendation
            </NavLink>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Add-Ons (Optional)
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            We specialize in contractor websites + SEO/GEO structure. Logo
            design and SEO monitoring are available if you want them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.addons.map((a) => (
            <div
              key={a.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-bold text-slate-900">{a.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{a.desc}</div>
                </div>

                <div className="text-right whitespace-nowrap">
                  <div className="relative text-sm font-medium text-slate-500 inline-block">
                    {a.wasPrice}
                    <span className="pointer-events-none absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-[-12deg] bg-slate-400/80" />
                  </div>
                  <div className="text-xl font-extrabold text-slate-900">
                    {a.price}
                  </div>
                </div>
              </div>

              <List items={a.bullets} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Pricing Questions (Quick Answers)
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Why does page count affect price?
            </h3>
            <p className="mt-2 text-slate-600">
              Each page needs structure, copy, layout, and a conversion goal.
              Service pages also improve SEO/GEO because they match how customers
              search.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Can a new company show up in AI search results?
            </h3>
            <p className="mt-2 text-slate-600">
              Yes — clear service pages, trust proof, and answer-first content
              can be cited faster than traditional SEO alone.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Do you offer ongoing SEO?
            </h3>
            <p className="mt-2 text-slate-600">
              Yes. Monthly SEO/GEO monitoring helps improve the pages that drive
              calls, strengthen clarity, and support AI summaries.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              What’s the most popular package for contractors?
            </h3>
            <p className="mt-2 text-slate-600">
              Often a 5-page build: Home + Contact + 2–3 service pages. It’s
              enough structure to rank and convert without being bloated.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl bg-slate-900 px-10 py-14 text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          Want a quick recommendation and a clean quote?
        </h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Tell us your trade and top services. We’ll recommend the right page
          plan and next steps.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition text-center"
          >
            Schedule a Call
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
