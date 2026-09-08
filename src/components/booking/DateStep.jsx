import { motion } from 'framer-motion';

const DateStep = ({ selectedDate, onSelect }) => {
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {dates.map((date, i) => {
        const isSelected = selectedDate?.toDateString() === date.toDateString();
        return (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(date)}
            className={`w-24 h-32 4xl:w-40 4xl:h-52 rounded-3xl border-4 flex flex-col items-center justify-center gap-2 transition-all
              ${isSelected 
                ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-xl shadow-[#0EA5E9]/30' 
                : 'bg-[#F8FAFC] dark:bg-[#020617] border-transparent text-slate-600 dark:text-slate-400 hover:border-slate-200'}`}
          >
            <span className="text-[10px] 4xl:text-xl font-poppins font-black uppercase tracking-widest opacity-60">
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <span className="text-3xl 4xl:text-6xl font-poppins font-black">
              {date.getDate()}
            </span>
            <span className="text-[11px] 4xl:text-xl font-poppins font-bold">
              {date.toLocaleDateString('en-US', { month: 'short' })}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default DateStep;
