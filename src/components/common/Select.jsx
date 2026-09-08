const Select = ({ label, options = [], error, className = '', ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-sm font-medium font-poppins text-[#64748B] dark:text-[#94A3B8]">
          {label}
        </label>
      )}
      <select
        className={`w-full bg-white dark:bg-[#0F172A] border font-poppins text-[#0F172A] dark:text-[#F8FAFC] border-[#E2E8F0] dark:border-[#334155] rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 dark:focus:ring-[#38BDF8]/20 focus:border-[#0EA5E9] dark:focus:border-[#38BDF8] transition-all appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="dark:bg-[#020617]">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs font-poppins text-[#EF4444] mt-1">{error}</p>}
    </div>
  );
};

export default Select;
