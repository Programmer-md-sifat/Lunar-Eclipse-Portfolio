import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { SmoothScroll } from "./components/common/SmoothScroll";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { MessageFromMD } from "./pages/MessageFromMD";
import { MessageFromCEO } from "./pages/MessageFromCEO";
import { Services } from "./pages/Services";
import { Global } from "./pages/Global";
import { Uniforms } from "./pages/Uniforms";
import { Products } from "./pages/Products";
import { Clients } from "./pages/Clients";
import { Contact } from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/message-from-md" element={<MessageFromMD />} />
        <Route path="/md-message" element={<MessageFromMD />} />
        <Route path="/message-from-ceo" element={<MessageFromCEO />} />
        <Route path="/ceo-message" element={<MessageFromCEO />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business" element={<Services />} />
        <Route path="/global" element={<Global />} />
        <Route path="/uniforms" element={<Uniforms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/group" element={<Clients />} />
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
