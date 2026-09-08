import { Search } from 'lucide-react';

const BlogSearch = ({ onSearch }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#334155]">
      <div className="w-full px-0">
        <div className="relative group">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-[#0EA5E9] transition-colors">
            <Search size={24} />
          </div>
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for health tips, medical news, or wellness guides..."
            className="w-full pl-20 pr-8 py-10 bg-transparent text-xl md:text-2xl font-poppins text-[#0F172A] dark:text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
