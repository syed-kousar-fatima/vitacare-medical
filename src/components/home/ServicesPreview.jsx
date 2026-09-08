import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  Brain, 
  Baby, 
  Shield, 
  Bone, 
  Stethoscope, 
  Microscope, 
  ArrowRight 
} from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    { id: 1, title: 'General Medicine', description: 'Comprehensive healthcare for adults, focusing on prevention and chronic care.', icon: Activity, color: '#0EA5E9' },
    { id: 2, title: 'Cardiology', description: 'Expert heart care using advanced diagnostics and personalized treatment plans.', icon: Heart, color: '#EF4444' },
    { id: 3, title: 'Neurology', description: 'Specialized treatment for complex brain, spine, and nervous system disorders.', icon: Brain, color: '#8B5CF6' },
    { id: 4, title: 'Pediatrics', description: 'Compassionate medical care for infants, children, and adolescents.', icon: Baby, color: '#F59E0B' },
    { id: 5, title: 'Dental Care', description: 'Complete oral health solutions from preventive cleanings to advanced surgery.', icon: Shield, color: '#10B981' },
    { id: 6, title: 'Orthopedics', description: 'Advanced care for bone, joint, and muscle conditions to restore mobility.', icon: Bone, color: '#64748B' },
    { id: 7, title: 'Dermatology', description: 'Expert clinical and cosmetic care for all skin, hair, and nail conditions.', icon: Stethoscope, color: '#EC4899' },
    { id: 8, title: 'Laboratory Services', description: 'State-of-the-art diagnostic testing with precise and rapid results.', icon: Microscope, color: '#14B8A6' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#020617] overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
        <div className="mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
              Featured Medical <span className="text-gradient">Services</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-6 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group p-8 sm:p-10 bg-white dark:bg-[#0F172A] rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-slate-800 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0EA5E9]/5 hover:border-[#0EA5E9]/30"
            >
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500">
                <service.icon size={180} />
              </div>

              <div className="relative z-10">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-8 sm:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}
                >
                  <service.icon size={28} className="sm:size-8" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-4 sm:mb-6 group-hover:text-[#0EA5E9] transition-colors">
                  {service.title}
                </h3>

                <p className="font-poppins text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 sm:mb-10 min-h-[60px] sm:min-h-[80px]">
                  {service.description}
                </p>

                <Link 
                  to={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center gap-3 font-poppins font-bold text-[10px] sm:text-xs uppercase tracking-widest text-[#0EA5E9] group-hover:gap-5 transition-all"
                >
                  Learn More <ArrowRight size={14} className="sm:size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center"
        >
          <Link to="/services">
            <button className="w-full sm:w-auto px-10 py-4 sm:px-14 sm:py-5 bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-2xl font-poppins font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300">
              Explore All Specialized Departments
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
