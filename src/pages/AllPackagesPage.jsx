import { packagesData } from "../data/packagesData";
import PriceCard from "../components/ui/PriceCard";
import { Link } from "react-router-dom";

const AllPackagesPage = () => {
  return (
    <main className="pt-24 pb-12 min-h-screen bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16 relative">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
            Our Smart Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto relative z-10">
            Explore our complete range of automation packages designed for every
            home size and lifestyle.
          </p>
        </div>

        {/* Packages Grid - Displays ALL packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PriceCard key={pkg.id} {...pkg} />
          ))}

          <Link to="/custom-package" className="block h-full">
            <PriceCard isCustom={true} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AllPackagesPage;
