import { motion } from 'framer-motion';

const Logo = ({ className = "w-auto h-10", showTagline = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] dark:from-[#38BDF8] dark:to-[#2DD4BF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0EA5E9]/20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              fillOpacity="0.3"
            />
            <path
              d="M12 7V17M7 12H17"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[#0EA5E9] dark:bg-[#38BDF8] rounded-2xl blur-md -z-10"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="font-cormorant italic text-[#0F172A] dark:text-[#F8FAFC]">Vita</span>
          <span className="font-poppins text-[#0EA5E9] dark:text-[#38BDF8]">Care</span>
        </h1>
        {showTagline && (
          <p className="text-[10px] uppercase tracking-[0.2em] font-poppins font-medium text-[#64748B] dark:text-[#94A3B8] -mt-1">
            Caring Beyond Treatment
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
