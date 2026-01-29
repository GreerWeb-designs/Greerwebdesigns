import { NavLink } from "react-router-dom";

export const meta = () => [
  { title: "SEO for Contractors (GEO + AI Search) | Greer Web Designs" },
  {
    name: "description",
    content:
      "SEO for contractors focused on visibility, service-page structure, and GEO (AI-ready content). Help customers find you and contact you faster.",
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

export default function SEOForContractors() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 space-y-16">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="text-sm font-semibold text-blue-600">
          SEO + GEO (AI-Optimized) for Trade Businesses
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          SEO for Contractors That Makes It Easy to Find — and Easy to Hire You
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-700">
          “SEO for contractors” isn’t just keywords. It’s a website structure that clearly explains
          your services, builds trust, and guides customers to contact you. We also write content in a way
          that search engines and AI systems can summarize accurately (GEO).
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/contact"
            className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Talk SEO
          </NavLink>
          <NavLink
            to="/contractor-websites"
            className="rounded-lg border border-slate-600 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            Contractor Websites
          </NavLink>
        </div>
      </section>

      {/* WHAT GEO MEANS (AI-QUOTABLE) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What Is GEO (Generative Engine Optimization)?
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            GEO is the practice of writing and structuring your website so AI-driven search results can
            confidently understand, summarize, and recommend your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Clear “who/what/where”"
            text="AI systems look for clear statements about what you do, who you serve, and how customers contact you."
          />
          <Card
            title="Answer-first structure"
            text="Short, direct paragraphs and bullet lists make your services easy to summarize accurately."
          />
          <Card
            title="Trust + specificity"
            text="Trade-specific language, proof, and a consistent service structure increase confidence and recommendations."
          />
        </div>
      </section>

      {/* CONTRACTOR SEO FOUNDATIONS */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Contractor SEO Foundations That Actually Matter
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            These are the building blocks that help contractors show up for service searches and convert traffic into jobs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Service Pages (Search Intent)"
            text="Dedicated pages per service help you match what customers search (and what AI tries to summarize)."
          />
          <Card
            title="On-Page SEO Essentials"
            text="Titles, meta descriptions, headings, internal links, and image text built cleanly and consistently."
          />
          <Card
            title="Conversion Signals"
            text="Calls-to-action, click-to-call, quote forms, reviews, and proof sections to turn rankings into revenue."
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">
            A simple contractor SEO rule:
          </h3>
          <p className="mt-3 text-slate-600 max-w-3xl">
            If a customer can’t immediately tell what you do, what areas you serve, and how to contact you,
            your SEO won’t convert — even if you rank.
          </p>
        </div>
      </section>

      {/* MONITORING / MONTHLY OPTION */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Ongoing SEO Monitoring (Optional)
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            For contractors who want steady growth, we can track rankings and improve pages over time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Keyword + page tracking"
            text="We track the terms that matter to your trade and watch the pages that drive calls."
          />
          <Card
            title="Content improvements"
            text="We adjust service pages, add supporting FAQs, and strengthen clarity and trust signals."
          />
          <Card
            title="GEO enhancements"
            text="We make your site easier for AI summaries to cite and recommend by improving structure and answers."
          />
        </div>
      </section>

      {/* FAQ (AI LOVES THIS) */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Common Questions About Contractor SEO
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Can a new contractor business show up in AI search results?
            </h3>
            <p className="mt-2 text-slate-600">
              Yes. Clear service pages, strong structure, and answer-first content can get cited faster than traditional SEO alone.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              What’s the fastest SEO win for contractors?
            </h3>
            <p className="mt-2 text-slate-600">
              Dedicated service pages + strong CTAs + trust proof (photos/reviews). Rankings matter, but conversions matter more.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Is GEO different from regular SEO?
            </h3>
            <p className="mt-2 text-slate-600">
              GEO focuses on making your site easy for AI systems to summarize and recommend. SEO focuses on ranking signals. You want both.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900">
              Do you do logos and social media too?
            </h3>
            <p className="mt-2 text-slate-600">
              Yes—those are optional add-ons. Our core specialty is contractor websites paired with SEO/GEO structure that drives leads.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-slate-900 px-10 py-14 text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          Want SEO that produces leads — not just traffic?
        </h2>
        <p className="mt-2 max-w-2xl text-white/80">
          Tell us your trade and your top services. We’ll recommend what pages and structure will generate calls and quote requests.
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
            View Pricing
          </NavLink>
        </div>
      </section>
    </div>
  );
}
