import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { SmoothScroll } from "./components/common/SmoothScroll";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Global } from "./pages/Global";
import { Uniforms } from "./pages/Uniforms";
import { Products } from "./pages/Products";
import { Group } from "./pages/Group";
import { Contact } from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business" element={<Services />} />
        <Route path="/global" element={<Global />} />
        <Route path="/uniforms" element={<Uniforms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/group" element={<Group />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="flex min-h-screen flex-col bg-[#06090e] text-[#e5e7eb] selection:bg-[#dfb277]/30 selection:text-white">
          {/* Top Navigation */}
          <Navbar />

          {/* Main Application Views with Route Transitions */}
          <div className="flex-1">
            <AnimatedRoutes />
          </div>

          {/* Global Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
