import { motion } from 'framer-motion';

const BlogCategories = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="w-full bg-[#F8FAFC] dark:bg-[#020617] border-b border-[#E2E8F0] dark:border-[#334155] overflow-x-auto no-scrollbar">
      <div className="flex w-full">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`relative flex-shrink-0 px-10 py-6 font-poppins text-xs font-bold uppercase tracking-[0.3em] transition-all duration-300
              ${activeCategory === category 
                ? 'text-[#0EA5E9] dark:text-[#38BDF8]' 
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
              }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeBlogCat"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#0EA5E9] dark:bg-[#38BDF8]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
