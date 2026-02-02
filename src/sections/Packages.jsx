import { Link } from "react-router-dom";
import PriceCard from "../components/ui/PriceCard";
import Button from "../components/ui/Button";
import { packagesData } from "../data/packagesData";

const Packages = () => {
  // Select only the first 2 packages for the Home page
  const homePackages = packagesData.slice(0, 2);

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
        
        {/* The Grid (2 Packages + 1 Custom Card) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {/* 1. Map the first 2 packages */}
          {homePackages.map((pkg) => (
            <PriceCard 
              key={pkg.id}
              {...pkg}
            />
          ))}

          {/* 2. Custom Package Card (Links to Builder Page) */}
          <Link to="/custom-package" className="block h-full">
            <PriceCard isCustom={true} />
          </Link>

        </div>

        {/* View All Button (Links to All Packages Page) */}
        <div className="flex justify-center">
            <Link to="/packages">
                <Button 
                    variant="outline" 
                    className="min-w-[200px] border-gray-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                >
                    View All Packages
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
};
export default Packages;