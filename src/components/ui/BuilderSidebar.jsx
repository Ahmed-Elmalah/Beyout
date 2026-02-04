import { MdFilterAlt } from "react-icons/md";

const BuilderSidebar = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    "All Products",
    "Lighting",
    "Security",
    "Hubs",
    "Sensors",
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-5 border border-slate-200 dark:border-white/5">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
          <MdFilterAlt className="text-primary" /> Filters
        </h3>

        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <label
              key={idx}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => onSelectCategory(cat)}
                  className="peer h-4 w-4 border-2 border-slate-400 dark:border-gray-600 bg-transparent text-primary focus:ring-primary checked:bg-primary checked:border-primary cursor-pointer appearance-none rounded-full"
                />
                <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-black scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span
                className={`text-sm font-medium transition-colors ${selectedCategory === cat ? "text-primary" : "text-slate-700 dark:text-gray-300 group-hover:text-primary"}`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BuilderSidebar;
