import PriceCard from "../components/ui/PriceCard";

const Packages = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#121212] transition-colors duration-300" id="packages">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Choose Your Intelligence</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <PriceCard 
            title="The Starter"
            price="$2,999"
            features={[
              "Smart Lighting Control",
              "Basic Security Cameras",
              "Thermostat Automation",
              "Voice Assistant Integration"
            ]}
          />

          {/* Premium Plan */}
          <PriceCard 
            title="The Premium"
            price="$5,499"
            isPopular={true}
            features={[
              "<strong>Everything in Starter</strong>",
              "Advanced AI Surveillance",
              "Smart Locks & Intercom",
              "Whole-Home Audio",
              "Energy Management Dashboard"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Packages;