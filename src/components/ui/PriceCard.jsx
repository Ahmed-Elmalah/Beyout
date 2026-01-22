import { MdCheck, MdCheckCircle } from "react-icons/md";
import Button from "./Button";
import GlassPanel from "./GlassPanel";

const PriceCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`relative flex flex-col h-full ${isPopular ? 'p-[1px] rounded-2xl bg-gradient-to-b from-primary to-blue-600 shadow-neon' : ''}`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-10">
          Most Popular
        </div>
      )}

      {/* Card Content */}
      <div className={`h-full rounded-2xl p-8 flex flex-col transition-colors duration-300 ${
        isPopular 
          ? 'bg-white dark:bg-[#181818]' // Premium Background
          : 'glass-panel bg-white/50 dark:bg-[#1e1e1e]/60 hover:bg-white/80 dark:hover:bg-white/5' // Standard Background
      }`}>
        <div className="mb-4">
          <span className={`text-sm font-bold tracking-wider uppercase ${isPopular ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
            {title}
          </span>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{price}</h3>
        </div>

        <ul className="flex-1 space-y-4 mb-8 font-body text-gray-600 dark:text-gray-300">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              {isPopular ? (
                <MdCheckCircle className="text-primary flex-shrink-0" />
              ) : (
                <MdCheck className="text-gray-400 flex-shrink-0" />
              )}
              {/* Bold text for "Everything in..." feature */}
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <Button 
          variant={isPopular ? "neon" : "outline"} 
          className={`w-full justify-center ${!isPopular && 'text-slate-900 dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5'}`}
        >
          {isPopular ? "Get Premium" : "Select Plan"}
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;