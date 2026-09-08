import { motion } from 'framer-motion';

const StepIndicator = ({ currentStep }) => {
  const steps = ['Doctor', 'Date', 'Time', 'Details', 'Confirm'];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2" />
        <motion.div 
          className="absolute top-1/2 left-0 h-0.5 bg-[#0EA5E9] -translate-y-1/2"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((label, index) => {
          const stepNum = index + 1;
          const isActive = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;

          return (
            <div key={label} className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isCompleted || isActive ? '#0EA5E9' : '#F8FAFC'
                }}
                className={`w-10 h-10 4xl:w-16 4xl:h-16 rounded-full border-4 flex items-center justify-center font-poppins font-black text-xs 4xl:text-xl
                  ${isCompleted || isActive ? 'border-[#0EA5E9] text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400 dark:bg-slate-900'}`}
              >
                {stepNum}
              </motion.div>
              <span className={`absolute -bottom-8 whitespace-nowrap text-[10px] 4xl:text-lg font-poppins font-black uppercase tracking-widest hidden sm:block
                ${isActive ? 'text-[#0EA5E9]' : 'text-slate-400'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
