import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const WelcomeCard = ({ userName = "Syed Kousar" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] dark:from-[#0284C7] dark:to-[#14B8A6] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-[#0EA5E9]/20"
    >
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl 4xl:text-7xl font-cormorant italic font-bold mb-4">
          Good Morning, {userName}
        </h1>
        <p className="font-poppins text-white/90 text-sm md:text-lg 4xl:text-3xl mb-8 leading-relaxed">
          Your health is on the right track! You have 2 appointments scheduled for today and your latest blood report is ready for review.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 md:px-8 py-3 bg-white text-[#0EA5E9] rounded-xl font-poppins font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-opacity-90 transition-all">
            View Schedule <Calendar size={16} />
          </button>
          <button className="px-6 md:px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-poppins font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-white/30 transition-all">
            Health Insights <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77,27.7,68.2,40.1C59.4,52.5,48.4,63.5,35.4,70.9C22.4,78.3,7.4,82.1,-7.7,80.8C-22.8,79.5,-38,73.1,-50.8,63.4C-63.6,53.7,-74,40.7,-79.1,26.1C-84.2,11.5,-84, -4.7,-79.7,-19.6C-75.4,-34.5,-67,-48.1,-55.1,-56.4C-43.2,-64.7,-27.8,-67.7,-14.4,-74.9C-1,-82.1,14.4,-93.5,29.6,-93.5C44.8,-93.5,59.8,-82.1,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;
