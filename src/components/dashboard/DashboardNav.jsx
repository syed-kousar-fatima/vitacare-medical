import { Menu, Bell, User } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const DashboardNav = ({ onOpenMobileMenu }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 lg:hidden">
      <div className="h-full px-4 flex items-center justify-between">
        <button 
          onClick={onOpenMobileMenu}
          className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button className="p-2 text-slate-500 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
