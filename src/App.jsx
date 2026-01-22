import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import FloatingActions from "./components/ui/FloatingActions";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    // ده اللي بيتحكم في الثيم للموقع كله
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    // الخلفية والخطوط الأساسية متحددة في index.css (body)
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <HomePage />
      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;