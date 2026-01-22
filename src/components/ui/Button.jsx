const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-accent-gold hover:bg-yellow-500 text-background-dark shadow-gold",
    outline: "border border-white/20 hover:border-primary/50 hover:bg-white/5 text-white group",
    neon: "bg-primary text-background-dark hover:bg-primary/90 shadow-neon"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;