import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaHome, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const SuccessModal = ({ isOpen, onClose, bookingData }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-lg 4xl:max-w-4xl bg-white dark:bg-[#0F172A] rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-16 text-center border-8 border-white dark:border-slate-800 shadow-2xl"
      >
        <div className="w-24 h-24 4xl:w-40 4xl:h-40 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <FaCheckCircle className="text-[#10B981] 4xl:size-20" size={48} />
        </div>
        <h2 className="text-4xl 4xl:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-4">Booking Successful!</h2>
        <p className="font-poppins text-slate-500 dark:text-slate-400 mb-10 4xl:text-3xl leading-relaxed">
          Your appointment with <span className="font-bold text-slate-900 dark:text-white">{bookingData.doctor?.name}</span> is confirmed for {bookingData.date?.toDateString()} at {bookingData.time}.
        </p>
        
        <div className="flex flex-col gap-4">
          <Button onClick={() => navigate('/dashboard')} className="w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest">View Dashboard</Button>
          <button onClick={() => navigate('/')} className="flex items-center justify-center gap-3 font-poppins font-bold text-slate-400 hover:text-[#0EA5E9] transition-all">
            <FaHome /> Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
