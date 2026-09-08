import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Bell, ChevronDown, Activity, Heart, Brain, Baby, 
  Shield, Bone, Microscope, Stethoscope, User, Settings, 
  LogOut, CheckCircle2, Info, AlertCircle, LayoutDashboard 
} from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Appointment Confirmed', desc: 'Your session with Dr. Sarah is set.', time: '2m ago', icon: CheckCircle2, color: 'text-green-500' },
    { id: 2, title: 'Report Ready', desc: 'Blood analysis report is available.', time: '1h ago', icon: Info, color: 'text-blue-500' },
    { id: 3, title: 'Medicine Reminder', desc: 'Time for your evening dosage.', time: '3h ago', icon: AlertCircle, color: 'text-amber-500' },
  ]);
  
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { name: 'General Medicine', icon: Activity, path: '/services/general-medicine' },
    { name: 'Cardiology', icon: Heart, path: '/services/cardiology' },
    { name: 'Neurology', icon: Brain, path: '/services/neurology' },
    { name: 'Pediatrics', icon: Baby, path: '/services/pediatrics' },
    { name: 'Dental Care', icon: Shield, path: '/services/dental-care' },
    { name: 'Orthopedics', icon: Bone, path: '/services/orthopedics' },
    { name: 'Dermatology', icon: Stethoscope, path: '/services/dermatology' },
    { name: 'Laboratory Services', icon: Microscope, path: '/services/laboratory-services' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setIsProfileOpen(false);
    navigate('/');
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'h-12 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm' 
          : 'h-16 bg-transparent'
      }`}>
        <div className="max-w-[2560px] mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="shrink-0 scale-75 sm:scale-90 origin-left">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <Link to="/" className={`text-[10px] font-poppins font-black uppercase tracking-[0.2em] transition-colors ${location.pathname === '/' ? 'text-[#0EA5E9]' : 'text-slate-500 dark:text-slate-400'} hover:text-[#0EA5E9]`}>Home</Link>
            
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1.5 text-[10px] font-poppins font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 group-hover:text-[#0EA5E9] transition-colors">
                Services <ChevronDown size={10} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-1 w-[400px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800 p-3 grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link key={s.name} to={s.path} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                        <div className="w-7 h-7 rounded-md bg-[#0EA5E9]/10 text-[#0EA5E9] flex items-center justify-center"><s.icon size={14} /></div>
                        <span className="font-poppins text-[10px] font-bold text-slate-700 dark:text-slate-200">{s.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/doctors" className="text-[10px] font-poppins font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-[#0EA5E9]">Doctors</Link>
            <Link to="/blog" className="text-[10px] font-poppins font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-[#0EA5E9]">Blog</Link>
            <Link to="/contact" className="text-[10px] font-poppins font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-[#0EA5E9]">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <div className="relative">
              <button onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }} className="p-2 text-slate-500 dark:text-slate-400 hover:text-[#0EA5E9] relative">
                <Bell size={18} />
                {notifications.length > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950" />}
              </button>
              <AnimatePresence>
                {isNotifOpen && (
                  <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-[10px] font-poppins font-black uppercase tracking-widest">Notifications</span>
                      <button onClick={clearNotifications} className="text-[9px] text-[#0EA5E9] font-bold">Clear All</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((n) => (
                          <div key={n.id} className="p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                            <n.icon size={16} className={`${n.color} shrink-0`} />
                            <div>
                              <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-100">{n.title}</h4>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">{n.desc}</p>
                              <span className="text-[9px] text-slate-400 mt-1 block">{n.time}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-10 text-center text-slate-400 text-[11px] font-poppins">No new notifications</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }} className="flex items-center gap-2 p-1 pr-3 bg-slate-100 dark:bg-slate-900 rounded-full hover:ring-2 hover:ring-[#0EA5E9]/20 transition-all">
                <div className="w-7 h-7 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white"><User size={14} /></div>
                <span className="text-[10px] font-poppins font-bold text-slate-700 dark:text-slate-200">Syed</span>
              </button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-2">
                    <Link to="/dashboard" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                      <LayoutDashboard size={14} className="text-slate-400" />
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Dashboard</span>
                    </Link>
                    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                      <Settings size={14} className="text-slate-400" />
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">Settings</span>
                    </button>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500 transition-all">
                      <LogOut size={14} />
                      <span className="text-[11px] font-bold">Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/appointment">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-5 py-2 bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-white rounded-lg font-poppins font-black text-[9px] tracking-widest uppercase shadow-md">Book Now</motion.button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 text-slate-900 dark:text-white"><Menu size={22} /></button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} services={services} />
    </>
  );
};

export default Navbar;
