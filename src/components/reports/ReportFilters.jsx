import { Search, Filter, Calendar } from 'lucide-react';

const ReportFilters = ({ onSearch, onFilterChange }) => {
  const categories = ['All Reports', 'Blood Test', 'X-Ray', 'MRI Scan', 'Prescription'];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-4 bg-white dark:bg-[#0F172A] p-4 border-b border-[#E2E8F0] dark:border-[#334155]">
      <div className="relative w-full lg:w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" size={18} />
        <input
          type="text"
          placeholder="Search reports..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-xl font-poppins text-sm outline-none focus:ring-2 focus:ring-[#0EA5E9]/20"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <div className="relative flex-1 lg:flex-none">
          <select 
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full lg:w-48 pl-4 pr-10 py-3 bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-xl font-poppins text-sm appearance-none outline-none cursor-pointer"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" size={16} />
        </div>

        <div className="relative flex-1 lg:flex-none">
          <input 
            type="date"
            className="w-full lg:w-48 px-4 py-3 bg-[#F8FAFC] dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-xl font-poppins text-sm outline-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportFilters;
