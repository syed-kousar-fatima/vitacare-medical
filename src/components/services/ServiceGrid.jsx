import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ services }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-[#020617] overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 w-full"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={item} className="w-full">
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
      
      {services.length === 0 && (
        <div className="w-full py-40 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-4xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4">
            No Services Found
          </h3>
          <p className="font-poppins text-[#64748B] dark:text-[#94A3B8] max-w-md">
            We couldn't find any services matching your current filter. Please try selecting a different category.
          </p>
        </div>
      )}
    </section>
  );
};

export default ServiceGrid;
