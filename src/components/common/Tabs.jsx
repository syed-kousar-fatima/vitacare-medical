import { motion } from 'framer-motion';

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex border-b border-[#E2E8F0] dark:border-[#334155] overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-6 py-3 text-sm font-medium font-poppins transition-colors whitespace-nowrap ${
            activeTab === tab.id 
              ? 'text-[#0EA5E9] dark:text-[#38BDF8]' 
              : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]'
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0EA5E9] dark:bg-[#38BDF8]"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
