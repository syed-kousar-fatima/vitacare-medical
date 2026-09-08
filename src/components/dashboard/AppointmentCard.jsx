import { Clock, MapPin, MoreVertical, Calendar } from 'lucide-react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 hover:shadow-xl transition-all group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 4xl:w-20 4xl:h-20 rounded-2xl overflow-hidden border-4 border-[#F8FAFC] dark:border-[#1E293B] shadow-md">
            <img src={appointment.doctorImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-cormorant italic font-bold text-xl 4xl:text-4xl text-slate-900 dark:text-white">
              {appointment.doctorName}
            </h4>
            <p className="text-[10px] 4xl:text-lg font-poppins font-black uppercase tracking-widest text-[#0EA5E9]">
              {appointment.specialization}
            </p>
          </div>
        </div>
        <button className="p-2 text-slate-400 hover:text-[#0EA5E9] transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <Calendar size={16} className="text-[#0EA5E9]" />
          <span className="text-xs 4xl:text-xl font-poppins font-bold uppercase tracking-wider">{appointment.date}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <Clock size={16} className="text-[#14B8A6]" />
          <span className="text-xs 4xl:text-xl font-poppins font-bold uppercase tracking-wider">{appointment.time}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
        <span className={`px-4 py-1.5 rounded-full text-[9px] 4xl:text-lg font-poppins font-black uppercase tracking-widest border ${
          appointment.status === 'Confirmed' 
          ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20' 
          : 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20'
        }`}>
          {appointment.status}
        </span>
        <button className="text-[10px] 4xl:text-lg font-poppins font-black uppercase tracking-widest text-[#0EA5E9] hover:underline">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
