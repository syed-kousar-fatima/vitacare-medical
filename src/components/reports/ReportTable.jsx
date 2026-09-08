import { motion } from 'framer-motion';
import { FileText, Eye, MoreVertical } from 'lucide-react';
import ReportStatus from './ReportStatus';
import DownloadButton from './DownloadButton';

const ReportTable = ({ reports }) => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#020617]">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#334155]">
              <th className="px-6 py-5 text-left text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Report Name</th>
              <th className="px-6 py-5 text-left text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Category</th>
              <th className="px-6 py-5 text-left text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Date</th>
              <th className="px-6 py-5 text-left text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Doctor</th>
              <th className="px-6 py-5 text-left text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Status</th>
              <th className="px-6 py-5 text-right text-xs font-poppins font-bold text-[#64748B] uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#334155]">
            {reports.map((report, index) => (
              <motion.tr 
                key={report.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A] transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9]">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC] text-sm">{report.name}</p>
                      <p className="text-[10px] font-poppins text-[#64748B] uppercase">{report.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="font-poppins text-sm text-[#64748B] dark:text-[#94A3B8]">{report.category}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="font-poppins text-sm text-[#64748B] dark:text-[#94A3B8]">{report.date}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#E2E8F0] dark:bg-[#334155] overflow-hidden">
                      <img src={report.doctorImage} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-poppins text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC]">{report.doctor}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <ReportStatus status={report.status} />
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-2 text-[#64748B] hover:text-[#0EA5E9] transition-colors">
                      <Eye size={18} />
                    </button>
                    <DownloadButton />
                    <button className="p-2 text-[#64748B]">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden space-y-4 p-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9]">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC]">{report.name}</h4>
                  <p className="text-xs font-poppins text-[#64748B]">{report.category} • {report.date}</p>
                </div>
              </div>
              <ReportStatus status={report.status} />
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0] dark:border-[#334155]">
              <div className="flex items-center gap-2">
                <img src={report.doctorImage} className="w-6 h-6 rounded-full" alt="" />
                <span className="text-xs font-poppins font-medium dark:text-[#F8FAFC]">{report.doctor}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-[#F8FAFC] dark:bg-[#1E293B] rounded-lg text-[#64748B]"><Eye size={18} /></button>
                <DownloadButton label="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportTable;
