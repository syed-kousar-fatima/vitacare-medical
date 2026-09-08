import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadButton = ({ onClick, label = "Download" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-[#0EA5E9] dark:bg-[#38BDF8] text-white rounded-xl font-poppins text-sm font-bold shadow-lg shadow-[#0EA5E9]/20 transition-all hover:opacity-90"
    >
      <Download size={16} />
      <span>{label}</span>
    </motion.button>
  );
};

export default DownloadButton;
