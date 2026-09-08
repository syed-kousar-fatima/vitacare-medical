import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Calendar, ClipboardList, 
  FileText, Users, Bell, Settings, LogOut 
} from 'lucide-react';
import Logo from '../common/Logo';

const Sidebar = ({ activeTab, setActiveTab, closeMobileMenu }) => {
  const menuItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'prescriptions', name: 'Prescriptions', icon: ClipboardList },
    { id: 'reports', name: 'Medical Reports', icon: FileText },
    { id: 'doctors', name: 'My Doctors', icon: Users },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F172A] border-r border-slate-200 dark:border-slate-800">
      <div className="p-8 shrink-0">
        <Logo />
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-poppins font-black text-[11px] uppercase tracking-[0.2em] transition-all
              ${activeTab === item.id 
                ? 'bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/20' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-[#0EA5E9]'
              }`}
          >
            <item.icon size={18} />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-100 dark:border-slate-800 shrink-0">
        <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-poppins font-black text-[11px] uppercase tracking-[0.2em] text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
