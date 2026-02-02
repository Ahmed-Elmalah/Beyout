import { MdFilterAlt } from "react-icons/md";

const BuilderSidebar = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      {/* Categories Filter */}
      <div className="bg-white dark:bg-[#162e2e] rounded-xl p-5 border border-slate-200 dark:border-white/5">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
          <MdFilterAlt className="text-primary" /> Filters
        </h3>

        <div className="space-y-3">
          {["All Products", "Lighting", "Security", "Hubs", "Sensors"].map(
            (cat, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="category"
                    defaultChecked={idx === 0}
                    className="peer h-4 w-4 border-2 border-slate-400 dark:border-[#2f6a6a] bg-transparent text-primary focus:ring-primary checked:bg-primary checked:border-primary cursor-pointer appearance-none rounded-full"
                  />
                  {/* Custom Radio Circle for styling (optional, standard input works too with accent-color) */}
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-black scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-primary transition-colors">
                  {cat}
                </span>
              </label>
            ),
          )}
        </div>

        {/* <div className="my-6 border-b border-slate-200 dark:border-[#2f6a6a]"></div> */}

        {/* Price Range */}
        {/* <div>
          <h4 className="text-slate-900 dark:text-white font-medium mb-3 text-sm">Price Range</h4>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-[#8ecccc] mb-2">
            <span>$0</span>
            <span>$1000+</span>
          </div>
          <input 
            type="range" 
            className="w-full h-1 bg-slate-200 dark:bg-[#2f6a6a] rounded-lg appearance-none cursor-pointer accent-primary" 
          />
        </div> */}
      </div>
    </aside>
  );
};

export default BuilderSidebar;
