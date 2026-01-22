const GlassPanel = ({ children, className = "" }) => {
  return (
    <div className={`glass-panel rounded-2xl border transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
};
export default GlassPanel;