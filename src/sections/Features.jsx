import { MdToggleOn, MdSecurity, MdBolt } from "react-icons/md";
import FeatureCard from "../components/ui/FeatureCard"; // استدعاء الكومبوننت الجديد

const featuresData = [
  {
    icon: MdToggleOn,
    title: "Total Control",
    desc: "Manage lighting, climate, and appliances from a single, intuitive interface. Custom scenes for every moment of your day."
  },
  {
    icon: MdSecurity,
    title: "Unbreakable Security",
    desc: "AI-powered surveillance, facial recognition smart locks, and 24/7 monitoring ensure your peace of mind is never compromised."
  },
  {
    icon: MdBolt,
    title: "Energy Saving",
    desc: "Smart optimization algorithms that learn your habits to reduce energy bills and your carbon footprint automatically."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-300" id="features">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Beyout?</h2>
          <p className="text-gray-600 dark:text-gray-400">Advanced intelligence that anticipates your needs before you even ask.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;