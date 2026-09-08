import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-[#E2E8F0] dark:border-[#334155] rounded-xl overflow-hidden bg-white dark:bg-[#0F172A]">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left group"
          >
            <span className="font-poppins font-medium text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#0EA5E9] dark:group-hover:text-[#38BDF8] transition-colors">
              {item.title}
            </span>
            <ChevronDown 
              size={18} 
              className={`text-[#64748B] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 pt-0 text-sm font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
