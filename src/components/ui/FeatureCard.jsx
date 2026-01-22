import GlassPanel from "./GlassPanel";

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <GlassPanel className="p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
      <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 border border-primary/20 group-hover:shadow-neon transition-all">
        <Icon className="text-primary text-3xl" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-body">
        {desc}
      </p>
    </GlassPanel>
  );
};

export default FeatureCard;