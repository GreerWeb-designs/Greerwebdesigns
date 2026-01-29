import { NavLink } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Website Design",
  "SEO Monitoring",
  "Local SEO Setup",
  "Speed Optimization",
  "Monthly Maintenance",
];

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white font-bold">
                G
              </div>
              <div>
                <div className="text-base font-semibold text-slate-900">
                  Greer Web Designs
                </div>
                <div className="text-sm text-slate-500">
                  Websites + SEO for contractors
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              We build fast, mobile-friendly websites that help local service
              businesses get more calls. Clean design, clear messaging, and
              SEO-ready structure from day one.
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-900">Quick Links</div>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.end}
                      className="text-sm text-slate-600 hover:text-slate-900 transition"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Services</div>
              <ul className="mt-3 space-y-2">
                {services.map((s) => (
                  <li key={s} className="text-sm text-slate-600">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Greer, SC • Serving the Upstate</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:bob@greerwebdesigns.com"
                  className="text-slate-900 hover:underline"
                >
                  bob@greerwebdesigns.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+18643731057"
                  className="text-slate-900 hover:underline"
                >
                  (864) 373-1057
                </a>
              </p>
            </div>

            <div className="mt-6">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Request a Quote
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Greer Web Designs. All rights reserved.
          </div>

          {/* Social bottom-right */}
          <div className="flex items-center gap-2 sm:justify-end">
            <SocialIcon href="https://facebook.com" label="Facebook">
              {/* Facebook icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.7V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H6.8v3h2.7v8h4z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://instagram.com" label="Instagram">
              {/* Instagram icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5zM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.google.com/search" label="Google">
              {/* Simple "G" icon (clean + recognizable) */}
              <span className="text-sm font-bold">G</span>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
