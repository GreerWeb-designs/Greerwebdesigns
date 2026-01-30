import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Prefill hidden fields (helps multi-site + analytics)
  useEffect(() => {
    if (!formRef.current) return;
    const form = formRef.current;

    const siteName = form.querySelector('input[name="site_name"]');
    const pageUrl = form.querySelector('input[name="page_url"]');

    if (siteName) siteName.value = import.meta.env.VITE_SITE_NAME || "Website";
    if (pageUrl) pageUrl.value = window.location.href;
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const form = e.currentTarget;

    // Honeypot (bots fill this) — treat as success but do nothing
    const trap = form.querySelector('input[name="website"]')?.value;
    if (trap) {
      setLoading(false);
      setStatus({
        type: "success",
        msg: "Message sent! I’ll get back to you shortly.",
      });
      form.reset();
      return;
    }

    const payload = {
      first_name: form.first_name?.value?.trim() || "",
      last_name: form.last_name?.value?.trim() || "",
      company: form.company?.value?.trim() || "",
      reply_to: form.reply_to?.value?.trim() || "",
      phone: form.phone?.value?.trim() || "",
      service: form.service?.value || "Website",
      message: form.message?.value?.trim() || "",
      site_name:
        form.site_name?.value ||
        import.meta.env.VITE_SITE_NAME ||
        "Website",
      page_url: form.page_url?.value || window.location.href,
      website: form.website?.value || "",
    };

    try {
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT ||
        "https://gwd-contact-api.bob-31b.workers.dev";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Request failed");
      }

      form.reset();
      setStatus({
        type: "success",
        msg: "Message sent! I’ll get back to you shortly.",
      });
    } catch (err) {
      console.error("Contact form send error:", err);
      setStatus({
        type: "error",
        msg: "Something went wrong sending your message. Please email me directly at bob@greerwebdesigns.com.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Contact Greer Web Designs
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Tell me what you need and I’ll reply with next steps, timeline, and
            pricing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2">
          {/* Left: Contact details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">
              Prefer to reach out directly? Here you go:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Phone</div>
                <a
                  className="text-lg font-semibold text-slate-900 hover:underline"
                  href="tel:+18643731057"
                >
                  (864) 373-1057
                </a>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Email</div>
                <a
                  className="text-lg font-semibold text-slate-900 hover:underline"
                  href="mailto:bob@greerwebdesigns.com"
                >
                  bob@greerwebdesigns.com
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 p-5">
              <div className="font-semibold text-slate-900">
                Typical response time
              </div>
              <p className="mt-1 text-slate-600">Same day or within 24 hours.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-2 text-slate-600">
              Fill this out and it’ll go straight to my inbox.
            </p>

            <form ref={formRef} className="mt-6 space-y-4" onSubmit={onSubmit}>
              {/* Hidden fields for context */}
              <input type="hidden" name="site_name" />
              <input type="hidden" name="page_url" />

              {/* Honeypot trap */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    First name
                  </label>
                  <input
                    name="first_name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Last name
                  </label>
                  <input
                    name="last_name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Company (optional)
                </label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  What do you need built?
                </label>
                <select
                  name="service"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                  defaultValue="Website"
                >
                  <option>Website</option>
                  <option>Website + SEO</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-200"
                  placeholder="Tell me about your business, the services you offer, and what you want the website to accomplish..."
                />
              </div>

              {/* Status */}
              {status.msg && (
                <div
                  className={[
                    "rounded-xl px-4 py-3 text-sm font-medium",
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200",
                  ].join(" ")}
                >
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-60 min-h-[48px]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted by Greer Web Designs.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
