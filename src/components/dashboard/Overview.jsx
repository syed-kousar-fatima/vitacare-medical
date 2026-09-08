import { motion } from 'framer-motion';
import { 
  Heart, Activity, Droplets, Thermometer, 
  Calendar, Clock, User, Pill, FileText, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import WelcomeCard from './WelcomeCard';
import StatisticsCard from './StatisticsCard';
import AppointmentCard from './AppointmentCard';
import PrescriptionCard from './PrescriptionCard';
import ReportsCard from './ReportsCard';
import NotificationPanel from './NotificationPanel';

const Overview = () => {
  const stats = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', trend: 'up', trendValue: '12', color: '#EF4444', icon: Heart },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', trend: 'stable', trendValue: '0', color: '#0EA5E9', icon: Activity },
    { label: 'Glucose Level', value: '94', unit: 'mg/dL', trend: 'down', trendValue: '5', color: '#10B981', icon: Droplets },
    { label: 'Body Temp', value: '36.6', unit: '°C', trend: 'stable', trendValue: '2', color: '#F59E0B', icon: Thermometer },
  ];

  const upcomingAppointments = [
    { doctorName: 'Dr. Sarah Johnson', specialization: 'Cardiologist', time: '10:30 AM', date: '15 Sep', status: 'Confirmed', doctorImage: 'https://i.pravatar.cc/150?u=4', location: 'Room 302' }
  ];

  const previousAppointments = [
    { doctorName: 'Dr. Robert Smith', specialization: 'General Physician', time: '09:00 AM', date: '12 Aug', status: 'Completed', doctorImage: 'https://i.pravatar.cc/150?u=2', location: 'Room 105' }
  ];

  const prescriptions = [
    { medicineName: 'Amoxicillin', dosage: '500mg', duration: '7 Days', refills: '2', schedule: ['Morning', 'Evening'] }
  ];

  const reports = [
    { title: 'Complete Blood Count', date: '05 Sep 2026', size: '1.2 MB' }
  ];

  const notifications = [
    { id: 1, title: 'Report Ready', message: 'Your Blood Analysis is available.', time: '2m ago', type: 'info', isRead: false },
    { id: 2, title: 'Appointment', message: 'Session with Dr. Sarah starts in 1h.', time: '1h ago', type: 'success', isRead: true }
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <WelcomeCard userName="Syed Kousar" />

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatisticsCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-10">
          
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-slate-900 dark:text-white">Upcoming Appointments</h3>
              <button className="text-[10px] font-poppins font-black uppercase text-[#0EA5E9] tracking-widest flex items-center gap-2">View All <ArrowRight size={14}/></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingAppointments.map((app, i) => (
                <AppointmentCard key={i} appointment={app} />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-6">Appointment History</h3>
            <div className="bg-white dark:bg-[#0F172A] rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              {previousAppointments.map((app, i) => (
                <div key={i} className="p-6 flex items-center justify-between border-b border-slate-50 dark:border-slate-800 last:border-0 opacity-70">
                  <div className="flex items-center gap-4">
                    <img src={app.doctorImage} className="w-12 h-12 rounded-xl object-cover" alt="" />
                    <div className="text-left">
                      <h4 className="font-poppins font-bold text-slate-900 dark:text-white text-sm">{app.doctorName}</h4>
                      <p className="text-[9px] font-poppins font-black uppercase text-slate-400">{app.specialization} • {app.date}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-[9px] font-black uppercase">Completed</span>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-6">Prescriptions</h3>
              {prescriptions.map((p, i) => (
                <PrescriptionCard key={i} prescription={p} />
              ))}
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-6">Recent Reports</h3>
              <div className="space-y-4">
                {reports.map((r, i) => (
                  <ReportsCard key={i} report={r} />
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-8">
          <NotificationPanel notifications={notifications} />

          <section className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-6 text-left">Primary Doctor</h3>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#0EA5E9]/10 mb-4">
                <img src="https://i.pravatar.cc/150?u=4" className="w-full h-full object-cover" alt="" />
              </div>
              <h4 className="font-poppins font-bold text-slate-900 dark:text-white text-lg">Dr. Sarah Johnson</h4>
              <p className="text-xs font-poppins font-black uppercase text-[#0EA5E9] tracking-widest mb-6">Senior Cardiologist</p>
              <div className="w-full grid grid-cols-2 gap-3">
                <button className="py-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-[10px] font-poppins font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 transition-all hover:bg-[#0EA5E9] hover:text-white">Message</button>
                <button className="py-3 rounded-xl bg-[#0EA5E9] text-white text-[10px] font-poppins font-black uppercase tracking-widest shadow-lg shadow-[#0EA5E9]/20 transition-all hover:scale-105">Profile</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Overview;
