import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative w-full bg-white dark:bg-[#0F172A] p-8 md:p-12 border-r border-b border-[#E2E8F0] dark:border-[#334155] transition-colors duration-500 hover:bg-[#0EA5E9]/5 dark:hover:bg-[#38BDF8]/5"
    >
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 dark:bg-[#38BDF8]/10 flex items-center justify-center text-[#0EA5E9] dark:text-[#38BDF8] mb-8 group-hover:scale-110 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-500">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
          {service.title}
        </h3>

        <p className="font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8 max-w-sm">
          {service.description}
        </p>

        <button className="flex items-center gap-3 font-poppins font-bold text-sm uppercase tracking-widest text-[#0EA5E9] dark:text-[#38BDF8] group-hover:gap-5 transition-all duration-300">
          Learn More <ArrowRight size={18} />
        </button>
      </div>

      <div className="absolute top-0 right-0 p-8 text-6xl font-cormorant italic font-black text-[#0F172A]/5 dark:text-[#F8FAFC]/5 select-none transition-opacity group-hover:opacity-10">
        0{service.id}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
