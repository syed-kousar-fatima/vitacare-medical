import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import StepIndicator from '../components/booking/StepIndicator';
import DoctorStep from '../components/booking/DoctorStep';
import DateStep from '../components/booking/DateStep';
import TimeStep from '../components/booking/TimeStep';
import PatientFormStep from '../components/booking/PatientFormStep';
import ConfirmationStep from '../components/booking/ConfirmationStep';
import SuccessModal from '../components/booking/SuccessModal';
import Button from '../components/common/Button';
import { useNotification } from '../context/NotificationContext';

const Appointment = () => {
  const { addNotification } = useNotification();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    doctor: null,
    date: null,
    time: '',
    patient: { fullName: '', email: '', phone: '', gender: 'male', reason: '' }
  });

  const doctors = [
    { id: 1, name: 'Dr. Alice Vane', specialization: 'General Medicine', fee: 500, image: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Dr. Robert Smith', specialization: 'General Medicine', fee: 1200, image: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Dr. Mark Zaid', specialization: 'Cardiology', fee: 800, image: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'Dr. Sarah Johnson', specialization: 'Cardiology', fee: 1500, image: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, name: 'Dr. Linda Grey', specialization: 'Neurology', fee: 900, image: 'https://i.pravatar.cc/150?u=5' },
    { id: 6, name: 'Dr. James Wilson', specialization: 'Neurology', fee: 2000, image: 'https://i.pravatar.cc/150?u=6' },
    { id: 7, name: 'Dr. Kevin Hart', specialization: 'Pediatrics', fee: 600, image: 'https://i.pravatar.cc/150?u=7' },
    { id: 8, name: 'Dr. Emily Chen', specialization: 'Pediatrics', fee: 1000, image: 'https://i.pravatar.cc/150?u=8' },
    { id: 9, name: 'Dr. Ryan Gos', specialization: 'Dental Care', fee: 400, image: 'https://i.pravatar.cc/150?u=9' },
    { id: 10, name: 'Dr. Sophia Loren', specialization: 'Dental Care', fee: 1100, image: 'https://i.pravatar.cc/150?u=10' },
    { id: 11, name: 'Dr. Chris Evans', specialization: 'Orthopedics', fee: 750, image: 'https://i.pravatar.cc/150?u=11' },
    { id: 12, name: 'Dr. Michael Ross', specialization: 'Orthopedics', fee: 1800, image: 'https://i.pravatar.cc/150?u=12' },
    { id: 13, name: 'Dr. Ethan Hunt', specialization: 'Dermatology', fee: 700, image: 'https://i.pravatar.cc/150?u=13' },
    { id: 14, name: 'Dr. Olivia Wilde', specialization: 'Dermatology', fee: 1400, image: 'https://i.pravatar.cc/150?u=14' },
    { id: 15, name: 'Dr. Emma Stone', specialization: 'Laboratory Services', fee: 500, image: 'https://i.pravatar.cc/150?u=15' },
    { id: 16, name: 'Dr. William Reed', specialization: 'Laboratory Services', fee: 1200, image: 'https://i.pravatar.cc/150?u=16' }
  ];

  const validateStep = () => {
    if (step === 1 && !bookingData.doctor) return "Please select a doctor";
    if (step === 2 && !bookingData.date) return "Please select a date";
    if (step === 3 && !bookingData.time) return "Please select a time slot";
    if (step === 4) {
      if (!bookingData.patient.fullName) return "Name is required";
      if (!/^\S+@\S+\.\S+$/.test(bookingData.patient.email)) return "Valid email required";
      if (bookingData.patient.phone.length < 10) return "Valid phone number required";
    }
    return null;
  };

  const handleNext = () => {
    const error = validateStep();
    if (error) {
      addNotification({ type: 'error', title: 'Action Required', message: error });
      return;
    }
    if (step < 5) setStep(step + 1);
    else setIsSuccess(true);
  };

  const handleBack = () => step > 1 && setStep(step - 1);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-28 md:pt-36 lg:pt-44 pb-20 overflow-x-hidden">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 4xl:px-64">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl 4xl:text-[9rem] font-cormorant italic font-bold text-slate-900 dark:text-white mb-4">
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="font-poppins text-slate-500 dark:text-slate-400 text-sm sm:text-base 4xl:text-3xl">
              Follow the simple steps below to secure your consultation with our experts.
            </p>
          </div>

          <StepIndicator currentStep={step} />

          <div className="mt-12 bg-white dark:bg-[#0F172A] rounded-[2.5rem] sm:rounded-[4rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-12 md:p-16 lg:p-20 4xl:p-32 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {step === 1 && <DoctorStep doctors={doctors} selectedDoctor={bookingData.doctor} onSelect={(d) => setBookingData({...bookingData, doctor: d})} />}
                  {step === 2 && <DateStep selectedDate={bookingData.date} onSelect={(d) => setBookingData({...bookingData, date: d})} />}
                  {step === 3 && <TimeStep selectedTime={bookingData.time} onSelect={(t) => setBookingData({...bookingData, time: t})} />}
                  {step === 4 && <PatientFormStep formData={bookingData.patient} onChange={(k, v) => setBookingData({...bookingData, patient: {...bookingData.patient, [k]: v}})} />}
                  {step === 5 && <ConfirmationStep summary={bookingData} />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-8 py-8 sm:px-16 sm:py-12 bg-slate-50 dark:bg-[#1E293B]/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <button 
                onClick={handleBack}
                className={`px-8 py-4 font-poppins font-black text-xs sm:text-sm uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all ${step === 1 ? 'invisible' : ''}`}
              >
                Go Back
              </button>
              <Button 
                onClick={handleNext}
                className="px-10 py-4 sm:px-16 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#0EA5E9]/20"
              >
                {step === 5 ? 'Confirm & Book' : 'Save & Continue'}
              </Button>
            </div>
          </div>
        </div>

        <SuccessModal 
          isOpen={isSuccess} 
          onClose={() => setIsSuccess(false)} 
          bookingData={bookingData}
        />
      </div>
    </PageTransition>
  );
};

export default Appointment;
