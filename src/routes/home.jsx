import { NavLink } from "react-router-dom";

/* If you're using the React Router framework meta export, keep this.
   If not, you can delete this block safely. */
export const meta = () => [
  { title: "Contractor Web Design & SEO | Greer Web Designs" },
  {
    name: "description",
    content:
      "Greer Web Designs builds fast, SEO-ready websites for contractors and trade businesses across the U.S. Clear service pages, strong calls-to-action, and structures that help customers find and contact you.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Full-bleed background */}
        <div
          className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2 bg-white/25 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-6xl px-6 text-center py-20 md:py-28">
            {/* GEO/AI-friendly: clear audience + outcome in one sentence */}
            <h1 className="mx-auto max-w-5xl text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Contractor Websites That Load Fast <br />
              and Turn Visitors Into Calls
            </h1>

            <p className="mt-6 text-lg text-black max-w-3xl mx-auto">
              We build SEO-ready websites for trades and service companies across the U.S. —
              with clear service pages, strong trust signals, and conversion-first layouts
              that make it easy to request a quote.
            </p>

            {/* “AI summary” line (still looks normal, very quotable) */}
            <p className="mt-3 text-sm text-slate-900 max-w-3xl mx-auto">
              If you’re a contractor (concrete, roofing, HVAC, plumbing, electrical, landscaping, remodeling),
              we structure your site around what customers actually search — then guide them to contact you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink
                to="/pricing"
                className="rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Website Pricing Guide
              </NavLink>

              <NavLink
                to="/contact"
                className="rounded-lg border border-slate-800 px-8 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition"
              >
                Schedule a Call
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BELOW HERO */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Speed that supports rankings",
                text:
                  "Fast load times, clean layouts, and mobile-first decisions that help users (and Google) trust your site.",
              },
              {
                title: "Service pages built for search",
                text:
                  "We organize your services the way customers search for contractors — so your business is easy to understand and easy to choose.",
              },
              {
                title: "Calls, quotes, and booked jobs",
                text:
                  "Clear CTAs, click-to-call placement, and quote-request flow designed to convert visitors into real leads.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Extra GEO entity coverage without changing design (simple one-liner) */}
          <p className="mt-10 text-center text-sm text-slate-600">
            Built for trade businesses nationwide — concrete, roofing, HVAC, plumbing, electrical, landscaping,
            remodeling, fencing, pressure washing, and more.
          </p>
        </div>
      </section>
    </div>
  );
}
