import { motion } from 'framer-motion';
import { Send, Bell } from 'lucide-react';
import Button from '../common/Button';

const Newsletter = () => {
  return (
    <section className="w-full py-20 sm:py-32 bg-white dark:bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-slate-900 dark:bg-white blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-slate-800 dark:bg-slate-200 blur-[150px] rounded-full" 
        />
      </div>

      <div className="max-w-[2560px] mx-auto px-4 sm:px-12 md:px-20 lg:px-32 xl:px-48 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0EA5E9] dark:bg-[#38BDF8] rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-16 lg:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(14,165,233,0.3)]"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100" stroke="white" strokeWidth="0.5" fill="transparent" />
              <path d="M0 80 C 30 20 60 20 100 80" stroke="white" strokeWidth="0.5" fill="transparent" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white text-[10px] sm:text-xs font-poppins font-black uppercase tracking-[0.3em] mb-8"
              >
                <Bell size={14} className="animate-bounce" /> Newsletter
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl 4xl:text-8xl font-cormorant italic font-bold text-white leading-[1.1] mb-8">
                Stay Updated with <br className="hidden sm:block" /> Health Tips & News.
              </h2>
              
              <p className="text-sm sm:text-lg 4xl:text-2xl font-poppins text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join our community of 15k+ subscribers. Get the latest medical insights, wellness guides, and VitaCare updates directly to your inbox.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 sm:p-3 bg-white dark:bg-slate-950 rounded-[2rem] shadow-2xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 sm:py-2 bg-transparent font-poppins text-sm sm:text-base text-slate-900 dark:text-white outline-none placeholder:text-slate-400 min-w-0"
                />
                <Button className="px-8 py-4 sm:py-5 rounded-[1.5rem] font-poppins font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl whitespace-nowrap">
                  Subscribe <Send size={16} className="ml-2" />
                </Button>
              </motion.form>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=sub${i}`} className="w-8 h-8 rounded-full border-2 border-[#0EA5E9] dark:border-[#38BDF8]" alt="" />
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs font-poppins text-white/70 tracking-wide text-center lg:text-left leading-tight">
                  * We respect your privacy. Unsubscribe at any time with one click.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
