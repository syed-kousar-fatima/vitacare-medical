import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

const EmergencyCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full bg-[#EF4444] text-white overflow-hidden">
      <div className="max-w-[2560px] mx-auto">
        <div className="px-6 py-12 sm:px-12 md:px-20 lg:px-32 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={20} className="animate-pulse" />
              <span className="font-poppins font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                Emergency Support
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-cormorant italic font-bold">
              Immediate Care When You Need It <span className="text-white/60">Most.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3"
        >
          <motion.div 
            variants={itemVariants}
            className="p-10 sm:p-16 md:p-20 border-r border-b lg:border-b-0 border-white/10 flex flex-col justify-center group hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={32} className="animate-pulse" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-cormorant italic font-bold">Emergency Hotline</h3>
            </div>
            <a href="tel:+18005550199" className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black mb-6 hover:text-white/80 transition-colors">
              +1 (800) 555-0199
            </a>
            <p className="font-poppins text-white/70 uppercase tracking-[0.2em] text-xs sm:text-sm">
              Priority line available 24/7 for critical care
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-10 sm:p-16 md:p-20 border-r border-b lg:border-b-0 border-white/10 flex flex-col justify-center group hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-cormorant italic font-bold">Main Trauma Center</h3>
            </div>
            <p className="text-2xl sm:text-3xl font-poppins font-bold mb-3">123 Health City Drive</p>
            <p className="font-poppins text-lg text-white/80 mb-6">New York, NY 10001, USA</p>
            <button className="w-fit font-poppins font-bold text-xs uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-all">
              Get Directions
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-10 sm:p-16 md:p-20 flex flex-col justify-center group hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-cormorant italic font-bold">Facility Hours</h3>
            </div>
            <div className="space-y-4 font-poppins text-sm sm:text-base">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Mon - Fri</span>
                <span className="font-bold">08:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Saturday</span>
                <span className="font-bold">09:00 AM - 06:00 PM</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-white/70">Sunday</span>
                <span className="font-bold px-3 py-1 bg-white text-[#EF4444] rounded-lg text-xs uppercase">Emergencies Only</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
