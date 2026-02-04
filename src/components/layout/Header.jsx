import { useState, useEffect } from "react";
import { MdSmartToy, MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Router Hooks
import Button from "../ui/Button";
import { useThemeStore } from "../../store/useThemeStore"; // Import Zustand Store

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN"); // Default Language

  // Hooks for Navigation Logic
  const location = useLocation();
  const navigate = useNavigate();

  // Theme Store (Zustand handles dark mode logic globally)
  const { isDark, toggleTheme } = useThemeStore();

  // Toggle Language Logic (Placeholder for now)
  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  // Smart Navigation Function
  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false); // Close mobile menu first

    // Check if we are NOT on the home page
    if (location.pathname !== "/") {
      navigate("/"); // Go to Home
      // Wait a bit for page to load then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on Home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Best Sellers", id: "best-sellers" },
    { name: "Packages", id: "packages" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 z-50 cursor-pointer">
          <MdSmartToy className="text-primary text-2xl md:text-3xl" />
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Beyout</span>
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center md:gap-3 lg:gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavigation(link.id)} 
              className="cursor-pointer bg-transparent border-none md:text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions Area */}
        <div className="flex items-center gap-2 lg:gap-5 z-50">
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white"
          >
            {isDark ? <MdLightMode className="text-lg lg:text-xl text-accent-gold" /> : <MdDarkMode className="text-lg lg:text-xl" />}
          </button>

          {/* Language Toggle */}
          <button onClick={toggleLang} className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white text-xs font-bold transition-colors cursor-pointer">          
            <span>{lang}</span>
          </button>

          {/* CTA Button (Link to Custom Builder) */}
          <div className="hidden sm:block">
            <Link to="/custom-package">
                <Button className="py-2! px-3! text-[10px]! lg:text-xs!">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Burger Icon */}
          <button 
            className="md:hidden p-2 text-slate-900 dark:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 z-40">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavigation(link.id)} 
              className="text-2xl font-bold text-slate-900 dark:text-white hover:text-primary bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          <div className="sm:hidden mt-4">
            <Link to="/custom-package" onClick={() => setIsMenuOpen(false)}>
                <Button className="py-3! px-8!">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;