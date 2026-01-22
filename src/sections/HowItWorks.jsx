import { MdChat, MdDesignServices, MdConstruction, MdSupportAgent } from "react-icons/md";
import StepCard from "../components/ui/StepCard";

const steps = [
  { icon: MdChat, title: "1. Consultation", desc: "We discuss your needs and assess your property layout." },
  { icon: MdDesignServices, title: "2. Design", desc: "Our engineers create a custom automation blueprint." },
  { icon: MdConstruction, title: "3. Installation", desc: "Professional setup with minimal disruption to your home." },
  { icon: MdSupportAgent, title: "4. Support", desc: "24/7 technical support and regular system updates." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0e0e0e] border-t border-gray-200 dark:border-white/5 transition-colors duration-300" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>
        
        <div className="relative">
          {/* الخط اللي واصل بينهم */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <StepCard key={idx} {...step} isFirst={idx === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;