import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock } from 'react-icons/fa';

const DoctorCard = forwardRef(({ doctor }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-[#0F172A] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#0EA5E9]/10 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-5 right-5">
          <div className={`px-4 py-1.5 rounded-full backdrop-blur-xl border border-white/20 text-[9px] font-poppins font-black uppercase tracking-widest flex items-center gap-2 ${doctor.isAvailable ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-slate-500/20 text-white'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${doctor.isAvailable ? 'bg-[#10B981] animate-pulse' : 'bg-slate-400'}`} />
            {doctor.isAvailable ? 'Available' : 'Busy'}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-cormorant italic font-bold text-white mb-0.5">{doctor.name}</h3>
          <p className="text-white/70 font-poppins text-[10px] uppercase tracking-[0.2em]">{doctor.specialization}</p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-xl">
            <FaStar className="text-[#F59E0B]" size={12} />
            <span className="text-xs font-poppins font-bold text-slate-700 dark:text-white">{doctor.rating}</span>
            <span className="text-[10px] text-slate-400 font-medium">({doctor.reviews})</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <FaRegClock size={14} />
            <span className="text-[10px] font-poppins font-black uppercase">{doctor.experience} Yrs</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link to={`/doctor/${doctor.id}`} className="w-full">
            <button className="w-full py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 font-poppins font-bold text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-[#0EA5E9] hover:text-white transition-all">
              View Profile
            </button>
          </Link>
          <Link to="/appointment" className="w-full">
            <button className="w-full py-3.5 rounded-xl bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] font-poppins font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#0EA5E9] dark:hover:bg-[#38BDF8] hover:text-white transition-all">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

DoctorCard.displayName = 'DoctorCard';
export default DoctorCard;
