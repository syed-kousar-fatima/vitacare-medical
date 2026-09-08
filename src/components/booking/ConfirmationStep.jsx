import { FaUserMd, FaCalendarDay, FaClock, FaRupeeSign } from 'react-icons/fa';

const ConfirmationStep = ({ summary }) => {
  const items = [
    { icon: FaUserMd, label: 'Specialist', value: summary.doctor.name, sub: summary.doctor.specialization },
    { icon: FaCalendarDay, label: 'Date', value: summary.date.toLocaleDateString('en-US', { dateStyle: 'full' }) },
    { icon: FaClock, label: 'Time Slot', value: summary.time },
    { icon: FaRupeeSign, label: 'Consultation Fee', value: `₹${summary.doctor.fee}`, highlight: true }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-[#F8FAFC] dark:bg-[#020617] rounded-[3rem] p-8 sm:p-12 border-4 border-[#0EA5E9]/10">
      <h3 className="text-3xl 4xl:text-6xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-10 text-center">Review Details</h3>
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-0">
            <div className="w-14 h-14 4xl:w-24 4xl:h-24 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-[#0EA5E9] shadow-sm">
              <item.icon size={24} className="4xl:size-10" />
            </div>
            <div>
              <p className="text-[10px] 4xl:text-xl font-poppins font-black uppercase text-slate-400 tracking-widest mb-1">{item.label}</p>
              <p className={`font-poppins font-bold text-lg 4xl:text-4xl ${item.highlight ? 'text-[#10B981]' : 'text-slate-900 dark:text-white'}`}>
                {item.value}
              </p>
              {item.sub && <p className="text-xs 4xl:text-xl text-slate-500 font-medium">{item.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationStep;
