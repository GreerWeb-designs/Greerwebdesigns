import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.jsx"),
  route("/pricing", "./routes/pricing.jsx"),
  route("/contact", "./routes/contact.jsx"),
  route("/contractor-websites", "./routes/contractor-websites.jsx"),
  route("/seo-for-contractors", "./routes/seo-for-contractors.jsx"),
  route("/portfolio", "./routes/portfolio.jsx"),
] satisfies RouteConfig;
