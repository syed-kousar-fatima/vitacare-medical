import { forwardRef } from 'react';

const Input = forwardRef(({ label, error, icon: Icon, className = '', ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-sm font-medium font-poppins text-[#64748B] dark:text-[#94A3B8]">
          {label}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-[#94A3B8] group-focus-within:text-[#0EA5E9] dark:group-focus-within:text-[#38BDF8] transition-colors">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          className={`w-full bg-white dark:bg-[#0F172A] border font-poppins text-[#0F172A] dark:text-[#F8FAFC] border-[#E2E8F0] dark:border-[#334155] rounded-xl py-2.5 outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 dark:focus:ring-[#38BDF8]/20 focus:border-[#0EA5E9] dark:focus:border-[#38BDF8] transition-all ${Icon ? 'pl-10 pr-4' : 'px-4'} ${error ? 'border-[#EF4444]' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-poppins text-[#EF4444] mt-1">{error}</p>}
    </div>
  );
});

export default Input;
