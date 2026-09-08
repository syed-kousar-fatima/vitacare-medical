import { Pill, Clock, AlertCircle, Download } from 'lucide-react';

const PrescriptionCard = ({ prescription }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 relative overflow-hidden group">
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 4xl:w-20 4xl:h-20 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center text-[#0EA5E9] shadow-inner">
          <Pill size={28} className="4xl:size-10" />
        </div>
        <div className="text-right">
          <p className="text-[9px] 4xl:text-lg font-poppins font-black uppercase text-slate-400 tracking-widest mb-1">Refills Left</p>
          <p className="text-lg 4xl:text-3xl font-poppins font-black text-slate-900 dark:text-white">{prescription.refills}</p>
        </div>
      </div>

      <h4 className="text-2xl 4xl:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-1">
        {prescription.medicineName}
      </h4>
      <p className="text-xs 4xl:text-2xl font-poppins font-bold text-[#0EA5E9] uppercase tracking-widest mb-8">
        {prescription.dosage} • {prescription.duration}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {prescription.schedule.map((time, i) => (
          <div key={i} className="bg-[#F8FAFC] dark:bg-[#020617] p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <Clock size={16} className="text-[#14B8A6]" />
            <span className="text-[11px] 4xl:text-xl font-poppins font-bold text-slate-700 dark:text-slate-300 uppercase">{time}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-[#F59E0B]">
          <AlertCircle size={16} />
          <span className="text-[10px] 4xl:text-lg font-poppins font-bold uppercase tracking-tighter">After Food</span>
        </div>
        <button className="w-10 h-10 4xl:w-14 4xl:h-14 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-[#0EA5E9] transition-all">
          <Download size={18} />
        </button>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
};

export default PrescriptionCard;
