const Badge = ({ children, variant = 'success', className = '' }) => {
  const variants = {
    success: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
    warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
    danger: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
    primary: 'bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/20',
    info: 'bg-[#14B8A6]/10 text-[#14B8A6] border-[#14B8A6]/20'
  };

  return (
    <span className={`px-2.5 py-0.5 text-xs font-semibold font-poppins rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
