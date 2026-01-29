import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./routes/home";
import Pricing from "./routes/pricing";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import Websites from "./routes/contractor-websites";
import Seo from "./routes/seo-for-contractors";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-30" />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contractor-websites" element={<Websites />} />
          <Route path="/seo-for-contractors" element={<Seo />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
