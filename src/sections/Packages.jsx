import { useState } from "react";
import PriceCard from "../components/ui/PriceCard";
import Button from "../components/ui/Button"; // هنحتاج الزرار
import { packagesData } from "../data/packagesData";

const Packages = () => {
  const [showAll, setShowAll] = useState(false);

  // اللوجيك هنا:
  // لو showAll = false -> خد أول 2 باكدج بس (عشان مع الكارت الـ Custom يبقوا 3)
  // لو showAll = true  -> اعرض كل الباكدجات
  const visiblePackages = showAll ? packagesData : packagesData.slice(0, 2);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#121212] transition-colors duration-300" id="packages">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Intelligence</h2>
            <p className="text-gray-500 dark:text-gray-400">
                Curated packages designed for every home size and lifestyle.
            </p>
        </div>
        
        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* 1. عرض الباكدجات (بناءً على الحالة) */}
          {visiblePackages.map((pkg) => (
            <PriceCard 
              key={pkg.id}
              {...pkg}
            />
          ))}

          {/* 2. كارت الـ Custom (دايماً موجود في الآخر) */}
          {/* ده هيكون رقم 3 في الحالة العادية، ورقم 9 لما نفتح الكل */}
          <a href="/products" className="block h-full">
            <PriceCard isCustom={true} />
          </a>

        </div>

        {/* Show More / Less Button */}
        <div className="flex justify-center">
            <Button 
                variant="outline" 
                onClick={() => setShowAll(!showAll)}
                className="min-w-[200px] border-gray-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
            >
                {showAll ? "Show Less" : "View All Packages"}
            </Button>
        </div>

      </div>
    </section>
  );
};
export default Packages;