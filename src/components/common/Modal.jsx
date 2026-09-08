import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#0F172A] rounded-2xl shadow-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#334155]"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0] dark:border-[#334155]">
              <h3 className="text-xl font-semibold font-cormorant text-[#0F172A] dark:text-[#F8FAFC] italic">
                {title}
              </h3>
              <button onClick={onClose} className="text-[#64748B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 font-poppins">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
