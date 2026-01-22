const StepCard = ({ icon: Icon, title, desc, isFirst }) => {
  return (
    <div className="flex flex-col md:items-center gap-6 group relative z-10">
      <div className={`w-24 h-24 rounded-full bg-white dark:bg-[#121212] border-2 flex items-center justify-center transition-all duration-300 ${
        isFirst 
          ? 'border-primary shadow-neon' 
          : 'border-gray-200 dark:border-gray-700 group-hover:border-primary group-hover:shadow-neon'
      }`}>
        <Icon className={`text-4xl transition-colors duration-300 ${isFirst ? 'text-primary' : 'text-gray-400 dark:text-white group-hover:text-primary'}`} />
      </div>
      <div className="md:text-center">
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-body">{desc}</p>
      </div>
    </div>
  );
};

export default StepCard;