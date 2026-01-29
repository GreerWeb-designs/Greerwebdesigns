import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/contractor-websites", label: "Web Design" },
  { to: "/seo-for-contractors", label: "SEO / GEO" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // scroll shadow + logo shrink (no layout shift)
  useEffect(() => {
    const getTop = () =>
      (document.scrollingElement && document.scrollingElement.scrollTop) ||
      document.documentElement.scrollTop ||
      window.scrollY ||
      0;

    const onScroll = () => setScrolled(getTop() > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // prevent background scroll while menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const headerClass = useMemo(
    () =>
      cx(
        "fixed top-0 left-0 right-0 z-50",
        "h-[120px]", // locked height prevents jump
        "bg-white/80 backdrop-blur border-b border-slate-200",
        "transition-shadow duration-300",
        scrolled ? "shadow-sm" : "shadow-none"
      ),
    [scrolled]
  );

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Greer Web Designs Home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/greerlogo.webp"
            alt="Greer Web Designs logo"
            className={cx(
              "h-23 sm:h-25 w-auto transition-transform duration-300",
              scrolled ? "scale-[0.68]" : "scale-100"
            )}
            style={{ transformOrigin: "left center" }}
          />

          <div className="leading-tight hidden sm:block">
            <div className="font-bold text-slate-900">Greer Web Designs</div>
            <div className="text-sm text-slate-500">
              Contractor Websites + SEO / GEO
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cx(
                  "rounded-lg px-2 py-2 transition-colors",
                  isActive ? "text-slate-900" : "hover:text-slate-900"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-5 py-3 text-white font-semibold shadow-md hover:opacity-90 transition min-h-11"
          >
            Schedule a Call
          </NavLink>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile CTA */}
          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-lg bg-linear-to-r from-blue-500 to-blue-600 px-4 py-3 text-white font-semibold shadow-md hover:opacity-90 transition min-h-11"
          >
            Call
          </NavLink>

          {/* Hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 p-3 shadow-sm hover:bg-white transition min-h-12 min-w-12
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6 18 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/25"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="fixed top-30 left-0 right-0 z-50 md:hidden">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                <div className="p-3">
                  <div className="grid gap-1">
                    {links.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.end}
                        className={({ isActive }) =>
                          cx(
                            "rounded-xl px-4 py-4 text-base font-semibold transition min-h-12",
                            isActive
                              ? "bg-slate-900 text-white"
                              : "text-slate-800 hover:bg-slate-100"
                          )
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-2">
                    <NavLink
                      to="/contact"
                      className="rounded-xl bg-linear-to-r from-blue-500 to-blue-600 px-4 py-4 text-white font-semibold shadow-md hover:opacity-90 transition text-center min-h-12"
                    >
                      Schedule a Call
                    </NavLink>

                    <a
                      href="tel:+18643731057"
                      className="rounded-xl border border-slate-300 px-4 py-4 text-slate-800 font-semibold hover:bg-slate-50 transition text-center min-h-12"
                    >
                      Call (864) 373-1057
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-slate-500 px-1">
                    Contractor websites + SEO/GEO built to generate calls and quote requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
