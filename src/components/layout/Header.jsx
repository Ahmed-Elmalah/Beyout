import { useState } from "react";
import { MdSmartToy, MdMenu, MdClose, MdDarkMode, MdLightMode } from "react-icons/md";
import Button from "../ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark
  const [lang, setLang] = useState("EN");

  // Toggle Dark Mode Logic
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle Language Logic
  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 lg:gap-3 z-50">
          <MdSmartToy className="text-primary text-2xl md:text-3xl" />
          {/* تصغير الخط في التابلت (md) وتكبيره في الشاشات الكبيرة (lg) */}
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Beyout</span>
        </div>

        {/* Desktop & Tablet Navigation */}
        {/* هنا اللعبة: md:flex (ظاهر في التابلت) لكن md:gap-4 (مسافة ضيقة) و lg:gap-8 (مسافة واسعة) */}
        <nav className="hidden md:flex items-center md:gap-3 lg:gap-8">
          <a href="#" className="md:text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Home</a>
          {['Features', 'How it Works', 'Packages', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
              className="md:text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions Area */}
        {/* تقليل المسافة بين الزراير في التابلت */}
        <div className="flex items-center gap-2 lg:gap-5 z-50">
          
          {/* Theme Toggle */}
          {/* تم إزالة أي كلاس text-white ثابت عشان الشرط يشتغل صح */}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 ${isDark ? 'text-accent-gold' : 'text-slate-900'}`}
          >
            {isDark ? <MdLightMode className="text-lg lg:text-xl" /> : <MdDarkMode className="text-lg lg:text-xl" />}
          </button>

          {/* Language Toggle */}
          <button onClick={toggleLang} className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 text-slate-900 dark:text-white text-xs font-bold transition-colors cursor-pointer">          
            <span>{lang}</span>
          </button>

          {/* CTA Button */}
          {/* إخفاء الزرار في الموبايل، وظهوره في التابلت بحجم أصغر */}
          <div className="hidden sm:block">
            <Button className="py-2! px-3! text-[10px]! lg:text-xs!">Free Consultation</Button>
          </div>

          {/* Mobile Burger Icon (Visible ONLY on mobile 'sm' and below, Hidden on 'md' Tablet) */}
          <button 
            className="md:hidden p-2 text-slate-900 dark:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-900 dark:text-white hover:text-primary">Home</a>
            {['Features', 'How it Works', 'Packages', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-slate-900 dark:text-white hover:text-primary"
              >
                {item}
              </a>
            ))}
            <div className="sm:hidden mt-4">
                <Button className="py-3! px-8!">Free Consultation</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;