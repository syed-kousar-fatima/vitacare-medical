import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-500 focus:outline-none"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ x: theme === 'dark' ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-5 h-5 bg-white dark:bg-[#38BDF8] rounded-full shadow-md flex items-center justify-center z-10"
      >
        {theme === 'light' ? (
          <Sun size={12} className="text-[#F59E0B]" />
        ) : (
          <Moon size={12} className="text-white" />
        )}
      </motion.div>
      
      <div className="flex items-center justify-center w-full h-full">
        <Sun size={12} className={`ml-1 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="flex-1" />
        <Moon size={12} className={`mr-1 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
