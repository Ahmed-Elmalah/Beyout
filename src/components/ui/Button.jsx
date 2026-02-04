const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-accent-gold hover:bg-yellow-500 text-slate-900 shadow-gold",
    outline: "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 hover:border-primary/50 group",
    neon: "bg-primary text-slate-900 hover:bg-primary/90 shadow-neon"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;