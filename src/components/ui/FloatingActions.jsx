import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const FloatingActions = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-16 right-6 z-40 flex flex-col gap-6 items-center">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full bg-accent-gold text-background-dark shadow-lg shadow-yellow-500/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <MdKeyboardArrowUp className="text-2xl font-bold" />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/201064334334"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 cursor-pointer animate-bounce-slow"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default FloatingActions;
