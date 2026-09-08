import { FileText, Download, Eye, Calendar } from 'lucide-react';

const ReportsCard = ({ report }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between p-6 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-[#0EA5E9]/50 transition-all group shadow-sm">
      <div className="flex items-center gap-5 mb-4 sm:mb-0">
        <div className="w-14 h-14 4xl:w-20 4xl:h-20 bg-slate-50 dark:bg-[#020617] rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#0EA5E9] group-hover:bg-[#0EA5E9]/10 transition-all">
          <FileText size={28} className="4xl:size-10" />
        </div>
        <div>
          <h5 className="font-poppins font-bold text-slate-900 dark:text-white text-base 4xl:text-3xl mb-1">
            {report.title}
          </h5>
          <div className="flex items-center gap-3 text-[10px] 4xl:text-lg text-slate-400 font-poppins font-black uppercase tracking-widest">
            <Calendar size={12} className="text-[#14B8A6]" />
            <span>{report.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span>{report.size}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="px-6 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-[10px] font-poppins font-black uppercase tracking-widest text-slate-500 hover:text-[#0EA5E9] transition-all flex items-center gap-2">
          <Eye size={14} /> View
        </button>
        <button className="px-6 py-2.5 rounded-xl bg-[#0EA5E9] text-white text-[10px] font-poppins font-black uppercase tracking-widest shadow-lg shadow-[#0EA5E9]/20 hover:scale-105 transition-all flex items-center gap-2">
          <Download size={14} /> Download
        </button>
      </div>
    </div>
  );
};

export default ReportsCard;
