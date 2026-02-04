import {
  MdInventory2,
  MdDeleteOutline,
  MdAdd,
  MdRemove,
  MdDeleteSweep,
} from "react-icons/md";
import Button from "./Button";

const BuilderCart = ({
  cartItems,
  totalPrice,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onCheckout,
}) => {
  return (
    <aside className="w-full lg:w-80 shrink-0 relative">
      <div className="lg:sticky lg:top-24 bg-white dark:bg-[#1E1E1E] rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl shadow-black/20 flex flex-col max-h-[calc(100vh-120px)]">
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

          {cartItems.length > 0 && (
            <button
              onClick={onClear}
              className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
            >
              <MdDeleteSweep size={16} /> Clear
            </button>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-50 lg:min-h-0 custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 opacity-50 space-y-2">
              <MdInventory2 size={48} />
              <p className="text-sm">Start adding devices!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              // التعديل: رجعنا لـ flex-row عشان كله يبقى في سطر واحد
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#252525] border border-transparent hover:border-primary/20 transition-all group relative pr-10"
              >
                {/* Image */}
                <div className="h-12 w-12 shrink-0 rounded-lg bg-white dark:bg-[#1E1E1E] overflow-hidden border border-slate-200 dark:border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Price */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                {/* Compact Quantity Controls (الجديد هنا) */}
                <div className="flex items-center gap-1 bg-white dark:bg-[#1E1E1E] rounded-lg border border-slate-200 dark:border-white/10 p-0.5 shadow-sm">
                  {/* زرار النقصان الصغير */}
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="w-6 h-6 flex items-center justify-center rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-[#252525] hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <MdRemove size={14} />
                  </button>

                  {/* رقم الكمية واضح */}
                  <span className="text-sm font-bold text-slate-900 dark:text-white min-w-5 text-center">
                    {item.quantity}
                  </span>

                  {/* زرار الزيادة الصغير */}
                  <button
                    onClick={() => onIncrease(item)}
                    className="w-6 h-6 flex items-center justify-center rounded-md text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-[#252525] hover:text-primary transition-colors cursor-pointer"
                  >
                    <MdAdd size={14} />
                  </button>
                </div>

                {/* زرار الحذف الجانبي (بيظهر لما تقف على الكارت) */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all cursor-pointer p-1"
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
  );
};

export default BuilderCart;
