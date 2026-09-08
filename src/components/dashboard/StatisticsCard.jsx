import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatisticsCard = ({ label, value, unit, trend, trendValue, icon: Icon, color }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 4xl:w-16 4xl:h-16 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: color }}>
          <Icon size={24} className="4xl:size-8" />
        </div>
        <div className={`flex items-center gap-1 text-[10px] 4xl:text-lg font-poppins font-black uppercase ${trend === 'up' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
          {trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {trendValue}%
        </div>
      </div>
      
      <p className="text-[10px] 4xl:text-lg font-poppins font-black uppercase text-slate-400 tracking-widest mb-1">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl 4xl:text-5xl font-poppins font-black text-slate-900 dark:text-white">
          {value}
        </h3>
        <span className="text-xs 4xl:text-xl font-poppins font-bold text-slate-400">{unit}</span>
      </div>

      <div className="mt-6 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '70%' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
