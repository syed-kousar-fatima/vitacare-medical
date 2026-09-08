import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaArrowRight, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Brown',
      role: 'Heart Patient',
      text: 'The level of care I received was exceptional. The doctors took their time to explain everything clearly and the facility is absolutely top-notch.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?u=mb'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Wellness Member',
      text: 'VitaCare has the most modern facilities I have ever visited. The online booking process was seamless and the dashboard makes tracking reports so easy.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?u=er'
    },
    {
      name: 'David Smith',
      role: 'Surgery Patient',
      text: 'I highly recommend the cardiology department. Their quick response and expert treatment truly saved my life during a critical emergency.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?u=ds'
    },
    {
      name: 'Syed Kousar',
      role: 'Regular Patient',
      text: 'Professional staff and a very clean environment. It is rare to find a hospital that treats you with such personal care and modern technology combined.',
      rating: 5,
      image: 'https://i.pravatar.cc/150?u=sk'
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-24 md:py-36 bg-[#F8FAFC] dark:bg-[#0F172A] overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">
              Success Stories
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              What Our Patients <span className="text-gradient">Say</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[450px] sm:h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-white dark:bg-[#020617] rounded-[3rem] p-8 sm:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none flex flex-col md:flex-row items-center gap-10 md:gap-16"
              >
                <div className="shrink-0 relative">
                  <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-[2rem] overflow-hidden border-4 border-[#0EA5E9]/10">
                    <img src={testimonials[currentIndex].image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#0EA5E9] rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FaQuoteLeft size={18} />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 text-[#F59E0B] mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                  <p className="text-xl sm:text-2xl font-cormorant italic font-medium text-[#0F172A] dark:text-[#F8FAFC] leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="text-lg font-poppins font-bold text-[#0F172A] dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs font-poppins font-bold uppercase tracking-widest text-[#0EA5E9]">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center md:justify-between items-center mt-12 gap-8">
            <div className="flex gap-4 order-2 md:order-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-12 bg-[#0EA5E9]' : 'w-2 bg-slate-200 dark:bg-slate-800'}`}
                />
              ))}
            </div>

            <div className="flex gap-4 order-1 md:order-2">
              <button 
                onClick={prev}
                className="w-14 h-14 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0EA5E9] hover:text-white hover:border-[#0EA5E9] transition-all"
              >
                <FaChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="w-14 h-14 rounded-2xl bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] flex items-center justify-center shadow-xl hover:bg-[#0EA5E9] dark:hover:bg-[#38BDF8] hover:text-white transition-all"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
