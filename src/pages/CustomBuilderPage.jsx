import { MdTrendingUp, MdChevronLeft, MdChevronRight } from "react-icons/md";
import BuilderProductCard from "../components/ui/BuilderProductCard";
import BuilderSidebar from "../components/ui/BuilderSidebar";
import BuilderCart from "../components/ui/BuilderCart";
import { productsData } from "../data/productsData"; 

const CustomBuilderPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0f2323] transition-colors duration-300 pt-24 pb-12">
      <div className="max-w-400 mx-auto px-4 lg:px-6">
        {/* Page Hero */}
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-teal-400 text-glow">
              Smart Ecosystem
            </span>
          </h1>
          <p className="text-slate-500 dark:text-[#8ecccc] text-base lg:text-lg font-normal max-w-2xl">
            Curate a custom package tailored to your lifestyle. Start from
            scratch or choose a preset.
          </p>
        </div>

        {/* Trending Carousel Section (Static for now) */}
        <section className="w-full mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
              <MdTrendingUp className="text-primary" /> Trending Now
            </h2>
            <div className="flex gap-2">
              <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-[#214a4a] text-slate-500 dark:text-gray-400 cursor-pointer">
                <MdChevronLeft size={24} />
              </button>
              <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-[#214a4a] text-slate-500 dark:text-gray-400 cursor-pointer">
                <MdChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Simple Horizontal List */}
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar scroll-smooth">
            {/* Reusing Product Card for carousel but simplified if needed, or mapping small subset */}
            {productsData.slice(0, 4).map((item) => (
              <div key={item.id} className="min-w-70 no-scrollbar">
                <BuilderProductCard
                  {...item}
                  rating={4.8} // Dummy rating
                />
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 h-full relative">
          {/* 1. Sidebar Filters */}
          <BuilderSidebar />

          {/* 2. Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {productsData.map((product) => (
                <BuilderProductCard
                  key={product.id}
                  title={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  rating={4.5} // Dummy rating
                  isTopRated={product.price > 2000} // Example logic for badge
                />
              ))}
            </div>
          </div>

          {/* 3. Sticky Cart */}
          <BuilderCart />
        </div>
      </div>
    </main>
  );
};

export default CustomBuilderPage;
