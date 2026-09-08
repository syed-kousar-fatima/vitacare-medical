import { Filter, ChevronDown } from 'lucide-react';

const DoctorFilters = () => {
  const filterGroups = [
    { label: 'Specialization', options: ['All', 'Cardiology', 'Neurology', 'Pediatrics'] },
    { label: 'Availability', options: ['Any Day', 'Today', 'This Weekend'] },
    { label: 'Gender', options: ['All', 'Male', 'Female'] },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0EA5E9] text-white rounded-xl font-poppins text-sm font-medium cursor-pointer">
        <Filter size={16} />
        <span>All Filters</span>
      </div>
      
      {filterGroups.map((group) => (
        <div key={group.label} className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] rounded-xl font-poppins text-sm text-[#0F172A] dark:text-[#F8FAFC] hover:border-[#0EA5E9] transition-all">
            <span>{group.label}</span>
            <ChevronDown size={14} className="text-[#64748B]" />
          </button>
        </div>
      ))}

      <select className="px-4 py-2 bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] rounded-xl font-poppins text-sm text-[#0F172A] dark:text-[#F8FAFC] outline-none cursor-pointer">
        <option>Sort by: Rating</option>
        <option>Sort by: Experience</option>
        <option>Sort by: Fee (Low to High)</option>
      </select>
    </div>
  );
};

export default DoctorFilters;
