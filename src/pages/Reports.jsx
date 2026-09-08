import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Calendar, FileText, Download, 
  Eye, CheckCircle2, Clock, XCircle, ChevronRight,
  Database, Activity, Pill, Microscope, Radio
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/common/Button';

const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveTab] = useState('All');
  const [dateFilter, setDateFilter] = useState('');

  const reportsData = [
    { id: 'REP-8821', title: 'Complete Blood Count', type: 'Blood Test', date: '2026-09-05', status: 'Completed', doctor: 'Dr. Sarah Johnson', size: '1.2 MB' },
    { id: 'REP-8822', title: 'Chest X-Ray PA View', type: 'X-Ray', date: '2026-09-02', status: 'Completed', doctor: 'Dr. Michael Ross', size: '4.5 MB' },
    { id: 'REP-8823', title: 'Brain MRI Scan', type: 'Scan', date: '2026-09-08', status: 'Pending', doctor: 'Dr. James Wilson', size: '12.8 MB' },
    { id: 'PRE-4412', title: 'Hypertension Medication', type: 'Prescription', date: '2026-08-30', status: 'Completed', doctor: 'Dr. Robert Smith', size: '0.5 MB' },
    { id: 'REP-8824', title: 'Lipid Profile Test', type: 'Blood Test', date: '2026-08-25', status: 'Completed', doctor: 'Dr. Sarah Johnson', size: '1.1 MB' },
    { id: 'REP-8825', title: 'Abdominal Ultrasound', type: 'Scan', date: '2026-08-20', status: 'Completed', doctor: 'Dr. Emily Chen', size: '8.2 MB' },
    { id: 'PRE-4413', title: 'Post-Op Recovery Plan', type: 'Prescription', date: '2026-08-15', status: 'Completed', doctor: 'Dr. Michael Ross', size: '0.7 MB' },
    { id: 'REP-8826', title: 'Lumbar Spine X-Ray', type: 'X-Ray', date: '2026-09-07', status: 'Pending', doctor: 'Dr. Chris Evans', size: '3.9 MB' }
  ];

  const categories = ['All', 'Blood Test', 'X-Ray', 'Scan', 'Prescription'];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredReports = useMemo(() => {
    return reportsData.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           report.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || report.type === activeCategory;
      const matchesDate = !dateFilter || report.date === dateFilter;
      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [searchQuery, activeCategory, dateFilter]);

  const getStatusBadge = (status) => {
    if (status === 'Completed') return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-poppins font-black uppercase tracking-widest border border-green-500/20"><CheckCircle2 size={12}/> Completed</span>;
    return <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-poppins font-black uppercase tracking-widest border border-amber-500/20"><Clock size={12}/> Pending</span>;
  };

  const getIcon = (type) => {
    switch(type) {
      case 'Blood Test': return <Microscope className="text-red-500" />;
      case 'X-Ray': return <Radio className="text-blue-500" />;
      case 'Scan': return <Activity className="text-purple-500" />;
      case 'Prescription': return <Pill className="text-emerald-500" />;
      default: return <FileText className="text-slate-400" />;
    }
  };

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-28 md:pt-36 lg:pt-40 4xl:pt-56 pb-20 overflow-x-hidden text-left">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 4xl:px-64">
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="text-left">
              <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">Medical Records</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl 4xl:text-[9rem] font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight">
                Health <span className="text-gradient">Reports</span>
              </h1>
              <p className="font-poppins text-slate-500 dark:text-slate-400 mt-4 text-sm sm:text-base 4xl:text-3xl max-w-xl">
                Access and manage all your clinical documentation, lab results, and imaging reports in one secure place.
              </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-poppins font-black uppercase text-slate-400">Total Records</p>
                  <p className="text-2xl font-poppins font-black text-slate-900 dark:text-white">{reportsData.length}</p>
               </div>
               <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-slate-800 flex items-center justify-center text-[#0EA5E9] shadow-sm">
                  <Database size={24} />
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search by report name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                />
              </div>

              <div className="lg:col-span-5 flex overflow-x-auto no-scrollbar gap-2 p-1 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`flex-shrink-0 px-6 py-3 rounded-xl font-poppins font-bold text-[11px] uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#0EA5E9] text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="lg:col-span-3 relative">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-[#14B8A6]" size={18} />
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all appearance-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-white dark:bg-[#0F172A] rounded-[2.5rem] animate-pulse border border-slate-100 dark:border-slate-800" />
                ))
              ) : filteredReports.length > 0 ? (
                filteredReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white dark:bg-[#0F172A] rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-[#0EA5E9]/30 transition-all duration-500 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center group-hover:bg-[#0EA5E9]/10 transition-colors shadow-inner">
                          {getIcon(report.type)}
                        </div>
                        {getStatusBadge(report.status)}
                      </div>
                      
                      <div className="text-left mb-8">
                        <p className="text-[10px] font-poppins font-black uppercase text-[#0EA5E9] tracking-widest mb-1">{report.id}</p>
                        <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                          {report.title}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-400 font-poppins text-[11px] font-bold uppercase tracking-tighter">
                           <span className="flex items-center gap-1.5"><Calendar size={12}/> {report.date}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-200" />
                           <span>{report.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-[9px] font-poppins font-black uppercase text-slate-400 tracking-tighter">Issued By</p>
                        <p className="text-xs font-poppins font-bold text-slate-700 dark:text-slate-300">{report.doctor}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-[#0EA5E9] transition-all border border-transparent hover:border-[#0EA5E9]/20">
                          <Eye size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center shadow-lg shadow-[#0EA5E9]/20 hover:scale-110 transition-all">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="col-span-full py-32 flex flex-col items-center justify-center text-center bg-white dark:bg-[#0F172A] rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800"
                >
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-300 mb-6">
                    <XCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white">No Reports Found</h3>
                  <p className="font-poppins text-slate-500 dark:text-slate-400 mt-2">Try clearing your filters or changing your search query.</p>
                  <button onClick={() => { setSearchQuery(''); setActiveTab('All'); setDateFilter(''); }} className="mt-8 text-[#0EA5E9] font-poppins font-black text-xs uppercase tracking-widest hover:underline">Reset All Filters</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 bg-[#14B8A6] rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="relative z-10 text-left">
              <h3 className="text-3xl font-cormorant italic font-bold mb-2">Request Physical Copies?</h3>
              <p className="font-poppins text-white/80 text-sm md:text-base">We can deliver certified physical copies of your reports to your registered address.</p>
            </div>
            <button className="relative z-10 px-10 py-4 bg-white text-[#14B8A6] rounded-2xl font-poppins font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Request Delivery</button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Reports;
