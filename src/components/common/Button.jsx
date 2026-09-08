import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', isLoading = false, ...props }) => {
  const variants = {
    primary: 'bg-[#0EA5E9] dark:bg-[#38BDF8] text-white hover:opacity-90',
    secondary: 'bg-[#14B8A6] dark:bg-[#2DD4BF] text-white hover:opacity-90',
    outline: 'border-2 border-[#E2E8F0] dark:border-[#334155] text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A]',
    danger: 'bg-[#EF4444] text-white hover:opacity-90',
    ghost: 'bg-transparent text-[#64748B] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A]'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      disabled={isLoading}
      className={`rounded-xl font-poppins font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
};

export default Button;
