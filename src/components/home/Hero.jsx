import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhoneAlt, FaPlay } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import Button from '../common/Button';

const Hero = () => {
  const [isBroken, setIsBroken] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBroken(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white dark:bg-[#020617] overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-slate-900 dark:bg-white blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800 dark:bg-slate-200 blur-[150px] rounded-full"
        />
      </div>

      <div className="w-full max-w-[2560px] mx-auto px-0 relative z-10">
        <AnimatePresence>
          {!isBroken && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#020617]">
              <div className="relative flex items-center">
                <motion.div
                  initial={{ y: -1200, rotate: -25 }}
                  animate={{ y: 0, rotate: 0 }}
                  exit={{ x: -800, y: 200, rotate: -45, opacity: 0, transition: { duration: 0.8, ease: "backIn" } }}
                  transition={{ type: "spring", stiffness: 80, damping: 12 }}
                  className="w-28 h-20 sm:w-44 sm:h-28 bg-[#0EA5E9] rounded-l-full border-[6px] border-white shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ y: -1200, rotate: 25 }}
                  animate={{ y: 0, rotate: 0 }}
                  exit={{ x: 800, y: 200, rotate: 45, opacity: 0, transition: { duration: 0.8, ease: "backIn" } }}
                  transition={{ type: "spring", stiffness: 80, damping: 12 }}
                  className="w-28 h-20 sm:w-44 sm:h-28 bg-slate-100 dark:bg-slate-800 rounded-r-full border-[6px] border-white shadow-2xl"
                />
              </div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 font-cormorant italic text-3xl font-bold dark:text-white">VitaCare...</motion.p>
            </div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isBroken ? { opacity: 1 } : {}}
          className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center w-full"
        >
          <div className="p-6 sm:p-12 md:p-16 lg:p-12 xl:p-20 2xl:p-32 4xl:p-48 4xl:pl-56">
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              animate={isBroken ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-[#0EA5E9]" />
                <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">VitaCare Medical Group</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl 4xl:text-[11rem] font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-[1.05] mb-8">
                Complete <br /> Healthcare, <br />
                <span className="text-gradient">Inside One Capsule.</span>
              </h1>
              
              <p className="text-sm sm:text-lg lg:text-base xl:text-xl font-poppins text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-xl 4xl:max-w-4xl 4xl:text-3xl">
                From diagnosis to treatment, our expert doctors and modern facilities deliver personalized medical care—simple, safe, and reliable.
              </p>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-16">
                <Link to="/appointment">
                  <Button size="lg" className="px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl shadow-[#0EA5E9]/20 text-sm sm:text-base font-bold 4xl:text-2xl 4xl:px-20">
                    Book Appointment <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                <button className="flex items-center gap-4 px-8 py-4 sm:py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl font-poppins font-bold text-slate-700 dark:text-white shadow-lg 4xl:text-2xl 4xl:px-16">
                  <FaPhoneAlt className="text-[#14B8A6]" /> Emergency: 24/7
                </button>
              </div>

              <div className="flex items-center gap-8 border-t border-slate-100 dark:border-slate-800 pt-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=user${i}`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white dark:border-[#020617] object-cover" alt="User" />
                  ))}
                </div>
                <div>
                  <p className="font-poppins font-bold text-[#0F172A] dark:text-white 4xl:text-2xl">Trust of 10,000+ Patients</p>
                  <div className="flex items-center gap-1.5 text-[#F59E0B]">
                    <HiShieldCheck size={18} />
                    <span className="text-xs font-poppins font-medium text-slate-500 dark:text-slate-400 4xl:text-lg">ISO 9001:2015 Certified Clinic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12 lg:p-8 xl:p-16 2xl:p-24 4xl:p-32 4xl:pr-56">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isBroken ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] 4xl:h-[85vh] max-h-[1200px] rounded-[3rem] sm:rounded-[5rem] overflow-hidden border-[8px] sm:border-[12px] xl:border-[16px] border-white dark:border-slate-800 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)]"
            >
              <img 
                src="https://i.pinimg.com/736x/be/8b/7e/be8b7ecd97bbf990f52b3883d58f41e2.jpg" 
                className="w-full h-full object-cover"
                alt="VitaCare Clinic"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 p-5 sm:p-8 rounded-[2rem] flex items-center justify-between">
                <div className="max-w-[70%]">
                  <h4 className="text-white font-poppins font-bold text-base sm:text-xl xl:text-2xl mb-1">Health & Wellness Clinic</h4>
                  <p className="text-white/70 text-[10px] sm:text-sm font-medium">Expert medical care at your doorstep</p>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-[#0EA5E9] cursor-pointer shadow-lg">
                  <FaPlay size={16} className="ml-1 sm:size-20" />
                </motion.div>
              </div>
            </motion.div>
            <div className="absolute -z-10 w-[90%] h-[90%] bg-[#0EA5E9]/10 blur-[120px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
