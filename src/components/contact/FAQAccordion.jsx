import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { q: "How can I book an appointment with a specialist?", a: "You can book an appointment through our online portal by selecting your preferred doctor and time slot, or by calling our 24/7 support line." },
    { q: "Do you accept international health insurance?", a: "Yes, VitaCare works with major international insurance providers. Please contact our billing department to verify your specific coverage." },
    { q: "What should I bring for my first consultation?", a: "Please bring a valid ID, your insurance card, and any previous medical records or current medications related to your visit." },
    { q: "Are emergency services available at all clinics?", a: "While all our locations provide urgent care, our main Health City Trauma Center is the primary facility for 24/7 life-threatening emergencies." }
  ];

  return (
    <section className="w-full py-24 md:py-36 bg-[#F8FAFC] dark:bg-[#020617] overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
        <div className="text-center mb-20">
          <span className="text-[#14B8A6] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">Common Questions</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight">
            Frequency Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-[#0F172A] rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm transition-all hover:border-[#0EA5E9]/30">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 sm:p-10 text-left"
              >
                <div className="flex items-center gap-8">
                  <span className="text-2xl font-cormorant italic font-black text-slate-200 dark:text-slate-800">0{i + 1}</span>
                  <h4 className="text-lg sm:text-xl font-poppins font-bold text-slate-900 dark:text-white">{faq.q}</h4>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'bg-[#0EA5E9] text-white rotate-180' : 'bg-slate-50 dark:bg-slate-900 text-slate-400'}`}>
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-10 sm:px-24 pb-10">
                      <p className="font-poppins text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
