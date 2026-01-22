import { MdAdd } from "react-icons/md";

const ProductCard = ({ title, category, price, image }) => {
  return (
    <div className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-[#1E1E1E] rounded-3xl p-4 relative group hover:translate-y-[-5px] transition-all duration-300 border border-gray-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/30 shadow-sm hover:shadow-lg dark:shadow-none">
      
      {/* Image Area */}
      <div className="h-[200px] w-full bg-gray-100 dark:bg-[#121212] rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
        />
      </div>

      {/* Content */}
      <div className="px-2">
        <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{category}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-accent-gold font-bold text-xl">${price}</span>
          
          {/* Add Button */}
          <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#2a2a2a] group-hover:bg-primary text-slate-900 dark:text-white group-hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm">
            <MdAdd className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;