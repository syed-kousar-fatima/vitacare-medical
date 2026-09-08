import { motion } from 'framer-motion';

const ServiceFilter = ({ categories, activeCategory, onFilter }) => {
  return (
    <div className="w-full border-b border-[#E2E8F0] dark:border-[#334155] bg-white dark:bg-[#020617]">
      <div className="flex overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilter(category)}
            className={`relative flex-shrink-0 px-8 py-6 font-poppins text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-300
              ${activeCategory === category 
                ? 'text-[#0EA5E9] dark:text-[#38BDF8]' 
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
              }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="activeCategory"
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

export default ServiceFilter;
