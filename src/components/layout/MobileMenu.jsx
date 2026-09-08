import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Home, Users, Activity, BookOpen, Mail, LayoutDashboard } from 'lucide-react';
import Logo from '../common/Logo';

const MobileMenu = ({ isOpen, onClose, services }) => {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const menuItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Find Doctors', icon: Users, path: '/doctors' },
    { name: 'Services', icon: Activity, path: '/services' },
    { name: 'Health Blog', icon: BookOpen, path: '/blog' },
    { name: 'Contact', icon: Mail, path: '/contact' },
    { name: 'Patient Portal', icon: LayoutDashboard, path: '/dashboard' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-[300px] bg-white dark:bg-slate-950 p-6 shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="scale-75 origin-left">
                <Logo />
              </div>
              <button onClick={onClose} className="p-2 text-slate-500">
                <X size={24} />
              </button>
            </div>
            
            <nav className="space-y-2">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white font-poppins font-bold text-sm"
              >
                <Home size={18} className="text-[#0EA5E9]" /> Home
              </Link>

              <div className="space-y-1">
                <button 
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white font-poppins font-bold text-sm"
                >
                  <div className="flex items-center gap-4">
                    <Activity size={18} className="text-[#14B8A6]" /> Services
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${isServicesExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 space-y-1"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={onClose}
                          className="flex items-center gap-3 p-3 rounded-xl text-xs font-poppins font-medium text-slate-600 dark:text-slate-400 hover:text-[#0EA5E9]"
                        >
                          <service.icon size={14} /> {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {menuItems.slice(3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 font-poppins font-bold text-sm ${item.name === 'Patient Portal' ? 'text-[#0EA5E9]' : 'text-slate-900 dark:text-white'}`}
                >
                  <item.icon size={18} className={item.name === 'Patient Portal' ? 'text-[#0EA5E9]' : 'text-[#0EA5E9]'} /> {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
              <Link to="/appointment" onClick={onClose}>
                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-white font-poppins font-black text-xs tracking-widest shadow-xl shadow-[#0EA5E9]/20">
                  BOOK APPOINTMENT
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
