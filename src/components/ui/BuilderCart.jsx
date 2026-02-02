import { MdInventory2, MdDelete } from "react-icons/md";
import Button from "./Button";

const BuilderCart = () => {
  return (
    <aside className="w-full lg:w-80 shrink-0 relative">
      <div className="lg:sticky lg:top-24 bg-white dark:bg-[#162e2e] rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl shadow-black/10 flex flex-col max-h-[calc(100vh-120px)]">
        {/* Header */}
        <div className="p-5 bg-slate-50 dark:bg-[#1f4242] border-b border-slate-200 dark:border-[#2f6a6a]">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
            <MdInventory2 className="text-primary" /> My Package
          </h3>
          <p className="text-xs text-slate-500 dark:text-[#8ecccc] mt-1">
            Building your ecosystem...
          </p>
        </div>

        {/* Cart Items List (Static for Design) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-50 lg:min-h-0 custom-scrollbar">
          {/* Dummy Item 1 */}
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1f4242] transition-colors group">
            <div className="h-12 w-12 rounded bg-slate-200 dark:bg-[#102323] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=100&q=60"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Smart Lock Pro
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                $150.00
              </p>
            </div>
            <button className="text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
              <MdDelete className="text-lg" />
            </button>
          </div>

          {/* Dummy Item 2 */}
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#1f4242] transition-colors group">
            <div className="h-12 w-12 rounded bg-slate-200 dark:bg-[#102323] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=100&q=60"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate">
                Sentry Cam 360
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                $89.99
              </p>
            </div>
            <button className="text-slate-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
              <MdDelete className="text-lg" />
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-200 dark:border-[#2f6a6a] bg-slate-50 dark:bg-[#1f4242]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Total Est. Cost
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              $239.99
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="w-full justify-center py-3!">
              Proceed to Checkout
            </Button>
            <button className="w-full bg-transparent border border-slate-300 dark:border-[#2f6a6a] text-slate-700 dark:text-white font-medium py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-[#2f6a6a] transition-colors cursor-pointer">
              Save Package
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BuilderCart;
