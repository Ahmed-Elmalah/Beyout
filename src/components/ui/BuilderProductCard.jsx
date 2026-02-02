import {
  MdFavoriteBorder,
  MdStar,
  MdShoppingCart,
  MdAddBox,
} from "react-icons/md";

const BuilderProductCard = ({
  image,
  title,
  category,
  price,
  rating,
  isTopRated,
}) => {
  return (
    <div className="group relative bg-white dark:bg-[#162e2e] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full aspect-4/3 bg-slate-100 dark:bg-[#102323] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge */}
        {isTopRated && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            Top Rated
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-primary hover:text-black transition-colors cursor-pointer">
          <MdFavoriteBorder className="text-lg" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {category}
            </p>
          </div>
          <span className="flex items-center gap-1 text-xs font-bold bg-slate-100 dark:bg-[#214a4a] text-slate-900 dark:text-white px-2 py-1 rounded">
            <MdStar className="text-yellow-400 text-sm" /> {rating}
          </span>
        </div>

        {/* Price & Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-[#214a4a]">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${price}
          </span>

          <div className="flex gap-2">
            <button
              className="p-2 rounded-lg border border-slate-200 dark:border-[#2f6a6a] text-slate-500 dark:text-[#8ecccc] hover:bg-slate-50 dark:hover:bg-[#214a4a] transition-colors cursor-pointer"
              title="Quick Add"
            >
              <MdShoppingCart className="text-xl" />
            </button>
            <button className="px-3 py-2 rounded-lg bg-primary text-black font-bold text-sm hover:bg-cyan-300 transition-colors flex items-center gap-2 cursor-pointer shadow-neon">
              <MdAddBox className="text-lg" />
              Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderProductCard;
