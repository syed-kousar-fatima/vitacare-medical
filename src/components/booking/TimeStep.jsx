import { motion } from 'framer-motion';
import { FaSun, FaCloudSun, FaMoon } from 'react-icons/fa';

const TimeStep = ({ selectedTime, onSelect }) => {
  const slots = {
    Morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
    Afternoon: ['01:00 PM', '02:00 PM', '03:00 PM'],
    Evening: ['05:00 PM', '06:00 PM', '07:00 PM']
  };

  return (
    <div className="space-y-12">
      {Object.entries(slots).map(([period, times]) => (
        <div key={period}>
          <div className="flex items-center gap-3 mb-6 text-slate-400">
            {period === 'Morning' && <FaSun />}
            {period === 'Afternoon' && <FaCloudSun />}
            {period === 'Evening' && <FaMoon />}
            <h4 className="font-poppins font-black text-xs 4xl:text-2xl uppercase tracking-[0.3em]">{period} Slots</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {times.map((time) => (
              <motion.button
                key={time}
                whileHover={{ scale: 1.05 }}
                onClick={() => onSelect(time)}
                className={`py-4 rounded-2xl border-4 font-poppins font-bold text-sm 4xl:text-2xl transition-all
                  ${selectedTime === time 
                    ? 'bg-[#14B8A6] border-[#14B8A6] text-white shadow-lg' 
                    : 'bg-[#F8FAFC] dark:bg-[#020617] border-transparent text-slate-600 dark:text-slate-400'}`}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeStep;
