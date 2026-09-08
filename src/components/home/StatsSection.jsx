import { motion } from 'framer-motion';
import Counter from '../common/Counter';

const StatsSection = () => {
  const stats = [
    { label: 'Expert Doctors', value: 250, suffix: '+', color: '#0EA5E9' },
    { label: 'Satisfied Patients', value: 15, suffix: 'k+', color: '#14B8A6' },
    { label: 'Medical Rooms', value: 180, suffix: '+', color: '#F59E0B' },
    { label: 'Years Experience', value: 25, suffix: '+', color: '#EF4444' }
  ];

  const getAnimation = (index) => {
    switch (index) {
      case 0: return { initial: { opacity: 0, y: -100 }, whileInView: { opacity: 1, y: 0 } };
      case 1: return { initial: { opacity: 0, y: 100 }, whileInView: { opacity: 1, y: 0 } };
      case 2: return { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } };
      case 3: return { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } };
      default: return {};
    }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-[2560px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-6"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-6">
            Our Impact in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="max-w-2xl mx-auto font-poppins text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Over a decade of dedicated service, providing world-class healthcare and advanced medical solutions to thousands of patients across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border-y border-[#E2E8F0] dark:border-[#334155]">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              {...getAnimation(i)}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="p-12 md:p-20 text-center border-r last:border-r-0 border-[#E2E8F0] dark:border-[#334155] hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A] transition-colors group"
            >
              <h3 className="text-6xl md:text-7xl font-cormorant italic font-bold mb-4 transition-transform duration-500 group-hover:scale-110" style={{ color: stat.color }}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="font-poppins font-bold uppercase tracking-[0.3em] text-xs text-[#64748B] dark:text-[#94A3B8]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
