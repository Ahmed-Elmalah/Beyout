import { useRef, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight, MdArrowForward } from "react-icons/md";
import ProductCard from "../components/ui/ProductCard";

const products = [
  {
    id: 1,
    title: "Smart Lock Pro",
    category: "Biometric & Remote Access",
    price: "349.00",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "360 Security Camera",
    category: "4K AI Motion Tracking",
    price: "199.00",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "RGB Smart Bulb",
    category: "16M Colors & Scenes",
    price: "49.00",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    title: "Voice Hub",
    category: "Neural Command Center",
    price: "279.00",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    title: "Smart Thermostat",
    category: "Climate Control AI",
    price: "159.00",
    image: "https://images.unsplash.com/photo-1565514020176-db792341258d?auto=format&fit=crop&w=500&q=60",
  }
];

const BestSellers = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // عشان نوقف الحركة لما اليوزر يعمل هوفر

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    if (direction === "left") {
      current.scrollLeft -= 350;
    } else {
      // لو وصل للآخر نرجعه للأول (Infinite Scroll Effect)
      if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
        current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        current.scrollLeft += 350;
      }
    }
  };

  // Auto Scroll Logic
  useEffect(() => {
    // لو اليوزر مش واقف بالماوس، حرك السلايدر
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        scroll("right");
      }, 3000); // بيتحرك كل 3 ثواني
    }
    return () => clearInterval(interval);
  }, [isPaused]); // بيعيد التشغيل لما حالة التوقف تتغير

  return (
    <section id="best-sellers" className="py-24 bg-gray-50 dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Best Sellers</h2>
            <p className="text-gray-600 dark:text-gray-400">Premium hardware for the modern intelligent home.</p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 hover:border-primary hover:text-primary text-slate-900 dark:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <MdChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 hover:border-primary hover:text-primary text-slate-900 dark:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <MdChevronRight className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          // لما الماوس يدخل يوقف الأوتو، ولما يخرج يشتغل تاني
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-10 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-8">
            <a href="/products" className="group flex items-center gap-2 text-primary font-bold hover:text-slate-900 dark:hover:text-white transition-colors">
                Explore All Products & Accessories
                <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;