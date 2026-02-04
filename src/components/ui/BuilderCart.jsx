import {
  MdInventory2,
  MdDeleteOutline,
  MdAdd,
  MdRemove,
  MdDeleteSweep,
  MdClose,
} from "react-icons/md";
import Button from "./Button";

// Added isOpen and onClose props for mobile
const BuilderCart = ({
  cartItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onCheckout,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
        />
      )}

      {/* Cart Container */}
      <aside
        className={`
            fixed lg:sticky top-0 right-0 h-full lg:top-24 lg:h-auto w-full md:w-100 lg:w-80 shrink-0 
            bg-white dark:bg-[#121212] lg:bg-transparent z-50 lg:z-auto
            transition-transform duration-300 ease-in-out lg:transform-none
            ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        `}
      >
        {/* The Cart Box */}
        <div className="h-full lg:h-auto bg-white dark:bg-[#1E1E1E] lg:rounded-xl border-l lg:border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl lg:shadow-xl lg:shadow-black/20 flex flex-col max-h-dvh lg:max-h-[calc(100vh-120px)]">
          {/* Header */}
          <div className="p-5 bg-slate-50 dark:bg-[#252525] border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2">
                <MdInventory2 className="text-primary" /> My Package
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                {cartItems.length} Items selected
              </p>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={onClear}
                  className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                  <MdDeleteSweep size={16} /> Clear
                </button>
              )}
              {/* Close Button (Mobile Only) */}
              <button
                onClick={onClose}
                className="lg:hidden p-2 bg-white dark:bg-[#1E1E1E] rounded-full text-slate-500 dark:text-white border border-slate-200 dark:border-white/10"
              >
                <MdClose size={18} />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-50 custom-scrollbar">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 opacity-50 space-y-2">
                <MdInventory2 size={48} />
                <p className="text-sm">Start adding devices!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#252525] border border-transparent hover:border-primary/20 transition-all group relative pr-10"
                >
                  <div className="h-12 w-12 shrink-0 rounded-lg bg-white dark:bg-[#1E1E1E] overflow-hidden border border-slate-200 dark:border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 bg-white dark:bg-[#1E1E1E] rounded-lg border border-slate-200 dark:border-white/10 p-0.5 shadow-sm">
                    <button
                      onClick={() => onDecrease(item.id)}
                      className="w-6 h-6 flex items-center justify-center rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-[#252525] hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <MdRemove size={14} />
                    </button>
                    <span className="text-sm font-bold text-slate-900 dark:text-white min-w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrease(item)}
                      className="w-6 h-6 flex items-center justify-center rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-[#252525] hover:text-primary transition-colors cursor-pointer"
                    >
                      <MdAdd size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all cursor-pointer p-1"
                  >
                    <MdDeleteOutline size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#252525]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-600 dark:text-gray-400">
                Total Estimate
              </span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full justify-center py-4! text-lg!"
            >
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BuilderCart;
