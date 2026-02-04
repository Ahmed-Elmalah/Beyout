import { useState, useMemo } from "react";
import { MdFilterList, MdShoppingCart } from "react-icons/md"; // Icons
import BuilderProductCard from "../components/ui/BuilderProductCard";
import BuilderSidebar from "../components/ui/BuilderSidebar";
import BuilderCart from "../components/ui/BuilderCart";
import { productsData } from "../data/productsData";
import { useBuilderStore } from "../store";

const CustomBuilderPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile Visibility States
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobileCart, setShowMobileCart] = useState(false);

  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  } = useBuilderStore();
  const totalPrice = getTotalPrice();

  // Search & Filter Logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Products" ||
        item.category === selectedCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCheckout = () => {
    if (cart.length === 0) return alert("Your package is empty!");
    let message =
      "Hello Beyout, I have built my custom smart home package:\n\n";
    cart.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}) - ${item.price * item.quantity} EGP\n`;
    });
    message += `\n*Total Estimate: ${totalPrice.toLocaleString()} EGP*`;
    const url = `https://wa.me/201064334334?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300 pt-24 pb-24 lg:pb-12">
      <div className="max-w-400 mx-auto px-4 lg:px-6">
        {/* Header & Mobile Actions */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div className="text-center md:text-left w-full md:w-auto">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-teal-400">
                Smart Ecosystem
              </span>
            </h1>
            <p className="text-slate-500 dark:text-gray-400 text-sm md:text-lg font-normal mt-2">
              Select your devices and see the estimated cost instantly.
            </p>
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden w-full md:w-auto flex items-center justify-center gap-2 bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-white/10 p-3 rounded-xl text-slate-900 dark:text-white font-bold shadow-sm"
          >
            <MdFilterList className="text-primary text-xl" /> Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-full relative">
          {/* Sidebar (Pass mobile props) */}
          <BuilderSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            isOpen={showMobileFilters} // Mobile State
            onClose={() => setShowMobileFilters(false)} // Close Function
          />

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <BuilderProductCard
                  key={product.id}
                  {...product}
                  onAdd={() => addToCart(product)}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  No products found
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>

          {/* Cart (Pass mobile props) */}
          <BuilderCart
            cartItems={cart}
            totalPrice={totalPrice}
            onIncrease={addToCart}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
            onClear={clearCart}
            onCheckout={handleCheckout}
            isOpen={showMobileCart} // Mobile State
            onClose={() => setShowMobileCart(false)} // Close Function
          />
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1E1E1E] border-t border-slate-200 dark:border-white/10 p-4 lg:hidden z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-xs text-slate-500 dark:text-gray-400">
              Total Estimate
            </p>
            <p className="text-xl font-black text-slate-900 dark:text-white">
              ${totalPrice.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => setShowMobileCart(true)}
            className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-bold shadow-neon-sm"
          >
            <MdShoppingCart /> View Cart ({cart.length})
          </button>
        </div>
      </div>
    </main>
  );
};

export default CustomBuilderPage;
