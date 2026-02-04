import { MdFilterAlt, MdSearch, MdClose } from "react-icons/md";

// Added isOpen and onClose props for mobile
const BuilderSidebar = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearch,
  isOpen,
  onClose,
}) => {
  const categories = [
    "All Products",
    "Lighting",
    "Security",
    "Hubs",
    "Sensors",
  ];

  return (
    <>
      {/* Mobile Overlay (Backdrop) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-[80%] max-w-75 lg:w-64 
        bg-white dark:bg-[#121212] lg:bg-transparent z-50 lg:z-auto
        transition-transform duration-300 ease-in-out p-6 lg:p-0 overflow-y-auto lg:overflow-visible
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        space-y-6 shadow-2xl lg:shadow-none border-r lg:border-none border-slate-200 dark:border-white/10
      `}
      >
        {/* Mobile Header (Close Button) */}
        <div className="flex lg:hidden justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Filters
          </h3>
          <button
            onClick={onClose}
            className="p-2 bg-slate-100 dark:bg-[#252525] rounded-full text-slate-500 dark:text-white"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Search Box */}
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-4 border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search devices..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-slate-100 dark:bg-[#252525] text-slate-900 dark:text-white text-sm rounded-lg pl-10 pr-4 py-3 outline-none border border-transparent focus:border-primary/50 transition-all placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Categories Filter */}
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-5 border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
            <MdFilterAlt className="text-primary" /> Categories
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
                    onChange={() => {
                      onSelectCategory(cat);
                      // Optional: Close sidebar on selection for mobile
                      if (window.innerWidth < 1024) onClose();
                    }}
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
    </>
  );
};

export default BuilderSidebar;
