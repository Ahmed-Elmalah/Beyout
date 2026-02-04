import { useState, useMemo } from "react";
import BuilderProductCard from "../components/ui/BuilderProductCard";
import BuilderSidebar from "../components/ui/BuilderSidebar";
import BuilderCart from "../components/ui/BuilderCart";
import { productsData } from "../data/productsData";
import { useBuilderStore } from "../store";

const CustomBuilderPage = () => {
  // State for filtering (Local state is fine for UI filtering)
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Global State from Zustand
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  } = useBuilderStore();

  const totalPrice = getTotalPrice();

  // Filter Logic
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Products") return productsData;
    return productsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // WhatsApp Checkout Logic
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
    <main className="min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300 pt-24 pb-12">
      <div className="max-w-400 mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
          <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-teal-400">
              Smart Ecosystem
            </span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-base lg:text-lg font-normal max-w-2xl">
            Select your devices and see the estimated cost instantly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-full relative">
          {/* Sidebar */}
          <BuilderSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
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
              <p className="text-center text-gray-500 mt-10">
                No products found in this category.
              </p>
            )}
          </div>

          {/* Cart (متصلة بالستور من خلال الصفحة) */}
          <BuilderCart
            cartItems={cart}
            totalPrice={totalPrice}
            onRemove={removeFromCart}
            onCheckout={handleCheckout}
            onIncrease={addToCart}
            onDecrease={decreaseQuantity}
            onClear={clearCart}
          />
        </div>
      </div>
    </main>
  );
};

export default CustomBuilderPage;
