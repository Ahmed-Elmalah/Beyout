import { MdStar, MdShoppingCart, MdAddBox } from "react-icons/md";

const BuilderProductCard = ({
  image,
  name,
  category,
  price,
  rating,
  isTopRated,
  onAdd,
}) => {
  return (
    <div className="group relative bg-white dark:bg-[#1E1E1E] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full aspect-4/3 bg-slate-100 dark:bg-[#252525] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        {isTopRated && (
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Top Rated
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-gray-400">
              {category}
            </p>
          </div>
          <span className="flex items-center gap-1 text-xs font-bold bg-slate-100 dark:bg-[#252525] text-slate-900 dark:text-white px-2 py-1 rounded">
            <MdStar className="text-yellow-400 text-sm" /> {rating}
          </span>
        </div>

        {/* Price & Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-white/5">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${price}
          </span>

          <div className="flex gap-2">
            {/* زرار الإضافة الرئيسي */}
            <button
              onClick={onAdd}
              className="px-3 py-2 rounded-lg bg-primary text-black font-bold text-sm hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MdAddBox className="text-lg" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProductCard;
