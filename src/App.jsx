import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./routes/home";
import Pricing from "./routes/pricing";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import ContractorWebsites from "./routes/contractor-websites";
import SeoForContractors from "./routes/seo-for-contractors";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Spacer for fixed navbar height (prevents jump / overlap) */}
      <div className="h-[120px]" />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* GEO-focused pages */}
          <Route
            path="/contractor-websites"
            element={<ContractorWebsites />}
          />
          <Route
            path="/seo-for-contractors"
            element={<SeoForContractors />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
