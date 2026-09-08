import { motion } from 'framer-motion';

const SupportCard = ({ icon: Icon, title, info, subInfo, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-[#0EA5E9] text-white shadow-xl shadow-[#0EA5E9]/20',
    secondary: 'bg-[#14B8A6] text-white shadow-xl shadow-[#14B8A6]/20',
    accent: 'bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 shadow-sm'
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`w-full p-10 md:p-16 flex flex-col items-center text-center transition-all duration-500 rounded-[3rem] ${variants[variant]}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${variant === 'accent' ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]' : 'bg-white/20 text-white'}`}>
        <Icon size={32} />
      </div>
      <h3 className="text-3xl md:text-4xl font-cormorant italic font-bold mb-4">
        {title}
      </h3>
      <p className="text-xl font-poppins font-bold mb-2">
        {info}
      </p>
      <p className="font-poppins text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
        {subInfo}
      </p>
    </motion.div>
  );
};

export default SupportCard;
