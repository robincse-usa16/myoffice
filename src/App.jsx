import { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import AppDevelopmentPage from "./pages/AppDevelopmentPage";
import IosDevelopmentPage from "./pages/IosDevelopmentPage";
import SaaSPage from "./pages/SaasPage";
import MicroSaasPage from "./pages/MicroSaasPage";
import ProductStrategyPage from "./pages/ProductStrategyPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/web-development", label: "Web" },
  { to: "/app-development", label: "Apps" },
  { to: "/ios-development", label: "iOS" },
  { to: "/saas", label: "SaaS" },
  { to: "/micro-saas", label: "Micro SaaS" },
  { to: "/strategy", label: "Strategy" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <span className="brand-mark">M</span>
          <span className="brand-name">MYOffice</span>
        </div>

        <nav className="site-nav desktop-nav" aria-label="Main navigation">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="nav-cta desktop-cta">
          Let&apos;s talk
        </NavLink>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(false)}
        />

        <aside className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <span>MYOffice</span>
            <button
              type="button"
              className="close-menu"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </NavLink>
        </aside>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/ios-development" element={<IosDevelopmentPage />} />
          <Route path="/saas" element={<SaaSPage />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/strategy" element={<ProductStrategyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© 2026 MYOffice • Global digital product studio</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
