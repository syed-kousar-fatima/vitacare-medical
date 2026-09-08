import { Search } from 'lucide-react';

const DoctorSearch = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-[#94A3B8]">
        <Search size={20} />
      </div>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search doctors by name, specialization, or hospital..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] text-[#0F172A] dark:text-[#F8FAFC] font-poppins outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 focus:border-[#0EA5E9] dark:focus:border-[#38BDF8] transition-all shadow-sm"
      />
    </div>
  );
};

export default DoctorSearch;
