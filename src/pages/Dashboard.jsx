import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import Sidebar from '../components/layout/Sidebar';
import DashboardNav from '../components/dashboard/DashboardNav';
import Overview from '../components/dashboard/Overview';
import AppointmentCard from '../components/dashboard/AppointmentCard';
import PrescriptionCard from '../components/dashboard/PrescriptionCard';
import ReportsCard from '../components/dashboard/ReportsCard';
import NotificationPanel from '../components/dashboard/NotificationPanel';
import ThemeToggle from '../components/common/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'appointments':
        return (
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white text-left">My Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 gap-8">
              <AppointmentCard appointment={{ doctorName: 'Dr. Sarah Johnson', specialization: 'Cardiology', time: '10:30 AM', date: '15 Sep', status: 'Confirmed', doctorImage: 'https://i.pravatar.cc/150?u=4' }} />
              <AppointmentCard appointment={{ doctorName: 'Dr. James Wilson', specialization: 'Neurology', time: '02:00 PM', date: '18 Sep', status: 'Pending', doctorImage: 'https://i.pravatar.cc/150?u=6' }} />
            </div>
          </div>
        );
      case 'prescriptions':
        return (
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white text-left">Active Prescriptions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 gap-8">
              <PrescriptionCard prescription={{ medicineName: 'Amoxicillin', dosage: '500mg', duration: '7 Days', refills: '2', schedule: ['Morning', 'Evening'] }} />
              <PrescriptionCard prescription={{ medicineName: 'Lisinopril', dosage: '10mg', duration: '30 Days', refills: '5', schedule: ['Morning'] }} />
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white text-left">Medical Reports</h2>
            <div className="grid grid-cols-1 gap-4">
              <ReportsCard report={{ title: 'Complete Blood Count', date: '05 Sep 2026', size: '1.2 MB' }} />
              <ReportsCard report={{ title: 'Chest X-Ray', date: '28 Aug 2026', size: '4.5 MB' }} />
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white text-left">Notifications</h2>
            <NotificationPanel notifications={[
              { id: 1, title: 'Appointment Confirmed', message: 'Your session with Dr. Sarah is set.', time: '2m ago', type: 'success', isRead: false },
              { id: 2, title: 'Report Ready', message: 'Blood analysis report is available.', time: '1h ago', type: 'info', isRead: false }
            ]} />
          </div>
        );
      default: return <Overview />;
    }
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-[#020617] overflow-hidden">
        
        <div className="hidden lg:block w-72 h-screen fixed left-0 top-0">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
              />
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 z-[60] w-72 lg:hidden"
              >
                <Sidebar 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                  closeMobileMenu={() => setIsMobileMenuOpen(false)} 
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <main className="flex-1 lg:ml-72 w-full min-h-screen overflow-y-auto no-scrollbar">
          <DashboardNav onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
          
          <div className="hidden lg:flex justify-end items-center px-12 py-6">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="max-w-[2560px] mx-auto p-4 sm:p-8 md:p-12 lg:p-16 4xl:p-32 pt-6 sm:pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
