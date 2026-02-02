import { MdCheckCircle, MdSettings } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa"; 
import Button from "./Button";
import { Link } from "react-router-dom"; 

const PriceCard = ({ title, price, hardware = [], features = [], isPopular, isCustom }) => {
  
  const handleOrderClick = () => {
    const message = `مرحباً Beyout، أنا مهتم بباقة ${title} بسعر ${price} جنيه. محتاج تفاصيل أكتر.`;
    const url = `https://wa.me/201064334334?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`relative flex flex-col h-full group ${isPopular ? 'md:-translate-y-4' : ''}`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20 shadow-lg shadow-primary/20">
          Best Value
        </div>
      )}

      {/* Card Container */}
      <div className={`h-full rounded-2xl p-6 flex flex-col transition-all duration-300 relative overflow-hidden ${
        isPopular 
          ? 'bg-white dark:bg-[#181818] border-2 border-primary shadow-neon' 
          : isCustom
            ? 'bg-white dark:bg-[#121212] border-2 border-accent-gold shadow-gold' 
            : 'bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-white/5 hover:border-primary/50' 
      }`}>
        
        {/* Header */}
        <div className="mb-6 border-b border-gray-100 dark:border-white/10 pb-6">
            {isCustom && (
                 <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mb-4 text-accent-gold">
                    <MdSettings className="text-2xl" />
                 </div>
            )}
          <span className={`text-xs font-bold tracking-widest uppercase ${
            isPopular ? 'text-primary' : isCustom ? 'text-accent-gold' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {isCustom ? "Build Your Own" : title}
          </span>
          <h3 className={`text-3xl font-bold mt-2 ${isCustom ? 'text-slate-900 dark:text-accent-gold' : 'text-slate-900 dark:text-white'}`}>
            {isCustom ? "Custom Package" : `${price ? price.toLocaleString() : 0} EGP`}
          </h3>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col gap-6">
            
            {isCustom ? (
                // --- Custom Card Content ---
                <div className="flex flex-col h-full">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                        Need a specific setup? Use our interactive builder to select exactly what you need for your home.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {["Full Customization", "Instant Quote", "Expert Review"].map((item, i) => (
                             <li key={i} className="flex items-center gap-3 text-slate-900 dark:text-white text-sm">
                                <MdCheckCircle className="text-accent-gold" /> {item}
                             </li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <Link to="/custom-package" className="w-full">
                            <Button className="w-full justify-center bg-accent-gold text-black hover:bg-yellow-500 shadow-gold">
                                Start Building
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                // --- Regular Package Content ---
                <>
                    {/* Hardware Tags */}
                    <div className="flex flex-wrap gap-2">
                        {hardware.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 font-body text-gray-600 dark:text-gray-300 text-right mt-2" dir="rtl">
                        {features.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0">
                                    <MdCheckCircle className={`text-lg ${isPopular ? 'text-primary' : 'text-gray-500 dark:text-gray-600'}`} />
                                </span>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Action Button (WhatsApp) */}
                    <div className="mt-auto pt-6">
                        <Button 
                            onClick={handleOrderClick}
                            variant={isPopular ? "neon" : "outline"} 
                            className={`w-full justify-center ${!isPopular && 'text-slate-900 dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5'}`}
                        >
                            <FaWhatsapp className="text-lg" />
                            {isPopular ? "Order Now" : "Order Details"}
                        </Button>
                    </div>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;