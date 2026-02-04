import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import Router components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/ui/FloatingActions";
import { useThemeStore } from "./store/useThemeStore";
import Home from "./pages/Home";
import AllPackagesPage from "./pages/AllPackagesPage"; // Import the new page
import CustomBuilderPage from "./pages/CustomBuilderPage";
import { Toaster } from "react-hot-toast";

function App() {
  const { isDark } = useThemeStore();
  const { pathname } = useLocation(); // Hook to track route changes

  // Apply Dark Mode Class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#121212]">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '#333',
          },
        }}
      />
      <Header />
      
      {/* Define App Routes */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<AllPackagesPage />} />
        
        <Route path="/custom-package" element={<CustomBuilderPage/>} />
      </Routes>

      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;