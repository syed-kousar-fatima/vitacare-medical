import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaStar, FaRegClock, FaGraduationCap, FaAward, 
  FaCalendarAlt, FaChevronLeft, FaCheckCircle,
  FaCalendarCheck, FaStethoscope, FaHistory
} from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import { MdOutlinePayments } from 'react-icons/md';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/common/Button';
import { useNotification } from '../context/NotificationContext';

const doctorsData = [
  { id: 1, name: 'Dr. Alice Vane', specialization: 'General Medicine', qualification: 'MBBS, MD - Internal Medicine', rating: 4.5, reviews: 85, experience: 5, isAvailable: true, image: 'https://i.pinimg.com/736x/35/60/6f/35606f296e52742f503fb57360c9fafd.jpg', fee: 500, patients: '2k+', bio: 'Dr. Alice Vane is a dedicated General Physician with a focus on holistic family healthcare and preventive medicine.' },
  { id: 2, name: 'Dr. Robert Smith', specialization: 'General Medicine', qualification: 'MBBS, MD, Senior Consultant', rating: 4.9, reviews: 150, experience: 20, isAvailable: true, image: 'https://i.pinimg.com/736x/be/70/ea/be70ea0d32181aad4f632101c030cd62.jpg', fee: 1200, patients: '15k+', bio: 'With two decades of experience, Dr. Robert Smith specializes in managing complex chronic conditions and internal medicine.' },
  { id: 3, name: 'Dr. Mark Zaid', specialization: 'Cardiology', qualification: 'MD, DM - Cardiology', rating: 4.6, reviews: 90, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/1200x/54/0a/82/540a8268115c5c900e6d01301ed057bd.jpg', fee: 800, patients: '4k+', bio: 'Dr. Mark Zaid focuses on non-invasive cardiology and clinical heart health diagnostics.' },
  { id: 4, name: 'Dr. Sarah Johnson', specialization: 'Cardiology', qualification: 'MD, DM, FACC - Interventional Cardiology', rating: 4.9, reviews: 210, experience: 15, isAvailable: true, image: 'https://i.pinimg.com/736x/d7/68/b6/d768b6f12f444204ae64169b26052ee2.jpg', fee: 1500, patients: '10k+', bio: 'Dr. Sarah Johnson is a world-renowned interventional cardiologist specializing in complex coronary procedures.' },
  { id: 5, name: 'Dr. Linda Grey', specialization: 'Neurology', qualification: 'MD, DM - Neurology', rating: 4.5, reviews: 75, experience: 6, isAvailable: false, image: 'https://i.pinimg.com/736x/13/6c/a1/136ca1dce8286bd645b6ecaf9cd0c650.jpg', fee: 900, patients: '3k+', bio: 'Expert in treating migraine, epilepsy, and general neurological disorders.' },
  { id: 6, name: 'Dr. James Wilson', specialization: 'Neurology', qualification: 'MD, MCh - Neurosurgeon', rating: 4.8, reviews: 130, experience: 18, isAvailable: true, image: 'https://i.pinimg.com/736x/37/25/1e/37251eab10cb27e8b11515a3c78ce64d.jpg', fee: 2000, patients: '8k+', bio: 'A leading neurosurgeon specializing in minimally invasive brain and spine surgeries.' },
  { id: 7, name: 'Dr. Kevin Hart', specialization: 'Pediatrics', qualification: 'MBBS, DCH', rating: 4.7, reviews: 110, experience: 8, isAvailable: true, image: 'https://i.pinimg.com/736x/f2/82/44/f282441189ec2f1a440049dbe339abdf.jpg', fee: 600, patients: '5k+', bio: 'Dedicated to child wellness and expert management of pediatric infectious diseases.' },
  { id: 8, name: 'Dr. Emily Chen', specialization: 'Pediatrics', qualification: 'MD - Pediatric Specialist', rating: 5.0, reviews: 300, experience: 12, isAvailable: true, image: 'https://i.pinimg.com/1200x/3e/0a/c0/3e0ac07327c77a996595b16abdb122a4.jpg', fee: 1000, patients: '9k+', bio: 'Specializes in neonatal care and developmental pediatrics.' },
  { id: 9, name: 'Dr. Ryan Gos', specialization: 'Dental Care', qualification: 'BDS', rating: 4.4, reviews: 60, experience: 4, isAvailable: true, image: 'https://i.pinimg.com/736x/40/9f/b1/409fb1eecf38d68d9a8aace27b2497ba.jpg', fee: 400, patients: '1k+', bio: 'Focused on preventive dentistry and painless root canal treatments.' },
  { id: 10, name: 'Dr. Sophia Loren', specialization: 'Dental Care', qualification: 'MDS - Orthodontics', rating: 4.9, reviews: 180, experience: 14, isAvailable: true, image: 'https://i.pinimg.com/736x/07/71/a9/0771a9f2038f17e58d5a0c883abc05b0.jpg', fee: 1100, patients: '7k+', bio: 'Expert in cosmetic dentistry and advanced orthodontic alignment procedures.' },
  { id: 11, name: 'Dr. Chris Evans', specialization: 'Orthopedics', qualification: 'MBBS, MS - Ortho', rating: 4.6, reviews: 95, experience: 9, isAvailable: true, image: 'https://i.pinimg.com/736x/16/a2/8d/16a28d16c7188c92c942a248236b1292.jpg', fee: 750, patients: '4k+', bio: 'Specializes in sports injuries and fracture management.' },
  { id: 12, name: 'Dr. Michael Ross', specialization: 'Orthopedics', qualification: 'MS, MCh - Orthopedic Surgeon', rating: 4.8, reviews: 220, experience: 16, isAvailable: true, image: 'https://i.pinimg.com/736x/47/a4/44/47a4448f2df0046ee1f7bed28f87e551.jpg', fee: 1800, patients: '12k+', bio: 'Expert orthopedic surgeon focused on joint replacements.' },
  { id: 13, name: 'Dr. Ethan Hunt', specialization: 'Dermatology', qualification: 'MD - Dermatology', rating: 4.5, reviews: 80, experience: 5, isAvailable: false, image: 'https://i.pinimg.com/736x/1b/4d/8e/1b4d8ea4ca159a007ce85fd3812ad2a8.jpg', fee: 700, patients: '3k+', bio: 'Specialist in clinical dermatology and treatment of chronic skin conditions.' },
  { id: 14, name: 'Dr. Olivia Wilde', specialization: 'Dermatology', qualification: 'MD, DVD - Dermato-Surgeon', rating: 4.9, reviews: 140, experience: 13, isAvailable: true, image: 'https://i.pinimg.com/736x/32/51/36/3251368ec5318f8d28cd1ec1e30eb4e6.jpg', fee: 1400, patients: '6k+', bio: 'Expert in aesthetic dermatology and advanced laser skin procedures.' },
  { id: 15, name: 'Dr. Emma Stone', specialization: 'Laboratory Services', qualification: 'MD - Pathologist', rating: 4.6, reviews: 55, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/236x/3f/51/f2/3f51f2a8373574d624f2d64513ec9fe7.jpg', fee: 500, patients: 'N/A', bio: 'Expert in clinical pathology and advanced laboratory diagnostics.' },
  { id: 16, name: 'Dr. William Reed', specialization: 'Laboratory Services', qualification: 'MD, PhD - Lab Medicine', rating: 4.9, reviews: 120, experience: 19, isAvailable: true, image: 'https://i.pinimg.com/736x/65/91/dc/6591dc8360ddf9aab15b380620d27cd6.jpg', fee: 1200, patients: 'N/A', bio: 'Leading specialist in molecular diagnostics.' }
];


const dates = [
  { day: 'Mon', date: '08', month: 'Sep' },
  { day: 'Tue', date: '09', month: 'Sep' },
  { day: 'Wed', date: '10', month: 'Sep' },
  { day: 'Thu', date: '11', month: 'Sep' },
  { day: 'Fri', date: '12', month: 'Sep' }
];

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:30 PM'];

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const doctor = doctorsData.find(d => d.id === parseInt(id)) || doctorsData[0];

  const handleConfirmBooking = () => {
    if (!selectedSlot) {
      addNotification({ type: 'error', title: 'Slot Required', message: 'Please select a time slot.' });
      return;
    }
    const booking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      date: `${dates[selectedDate].date} ${dates[selectedDate].month}`,
      time: selectedSlot,
      fee: doctor.fee,
      status: 'Confirmed'
    };
    const existing = JSON.parse(localStorage.getItem('vitacare_appointments') || '[]');
    localStorage.setItem('vitacare_appointments', JSON.stringify([booking, ...existing]));
    addNotification({ type: 'success', title: 'Confirmed', message: 'Appointment booked successfully!' });
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pb-20 overflow-x-hidden">
        <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 pt-28 md:pt-36 lg:pt-40 4xl:pt-56 pb-12">
          <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 4xl:px-64">
            <div className="mb-10">
              <Link to="/doctors" className="inline-flex items-center gap-2 text-[#0EA5E9] font-poppins font-black text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all">
                <FaChevronLeft /> Back to Doctors
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24 4xl:gap-40 items-center md:items-start text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px] 4xl:max-w-[650px] aspect-[4/5] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-[10px] md:border-[12px] border-[#F8FAFC] dark:border-[#1E293B] shadow-2xl shrink-0"
              >
                <img src={doctor.image} className="w-full h-full object-cover" alt={doctor.name} />
                <div className="absolute top-5 right-5">
                   <div className="bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${doctor.isAvailable ? 'bg-[#10B981] animate-pulse' : 'bg-slate-400'}`} />
                      <span className={`text-[10px] font-poppins font-black uppercase text-slate-700 dark:text-white`}>
                        {doctor.isAvailable ? 'Available' : 'Busy'}
                      </span>
                   </div>
                </div>
              </motion.div>

              <div className="flex-1 space-y-8 w-full max-w-6xl">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <span className="px-4 py-1.5 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-[10px] font-poppins font-black uppercase">
                      {doctor.specialization}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#F59E0B] bg-[#F59E0B]/5 px-3 py-1 rounded-xl">
                      <FaStar size={14} />
                      <span className="text-sm font-poppins font-black text-slate-900 dark:text-white">{doctor.rating}</span>
                      <span className="text-xs text-slate-400 font-medium ml-1">({doctor.reviews} Reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl 4xl:text-[11rem] font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight">
                    {doctor.name}
                  </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: FaAward, label: 'Experience', value: `${doctor.experience} Yrs` },
                    { icon: FaCalendarCheck, label: 'Patients', value: doctor.patients },
                    { icon: MdOutlinePayments, label: 'Fees', value: `₹${doctor.fee}` },
                    { icon: HiShieldCheck, label: 'Verified', value: 'Yes' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-[#1E293B] p-5 lg:p-6 4xl:p-14 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center md:items-start shadow-sm hover:border-[#0EA5E9]/30 transition-all">
                      <stat.icon className="text-[#0EA5E9] mb-3 4xl:size-12" size={22} />
                      <p className="text-[10px] 4xl:text-xl font-poppins font-black uppercase text-slate-400 tracking-[0.1em] mb-1">{stat.label}</p>
                      <p className="text-lg xl:text-xl 4xl:text-5xl font-poppins font-black text-slate-900 dark:text-white whitespace-nowrap">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <p className="font-poppins text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg xl:text-xl 4xl:text-4xl max-w-5xl mx-auto md:mx-0">
                  {doctor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 4xl:px-48 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white dark:bg-[#0F172A] rounded-[3rem] p-8 md:p-12 4xl:p-24 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 4xl:w-20 4xl:h-20 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                    <FaGraduationCap size={28} className="4xl:size-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl 4xl:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white">Qualification & Experience</h3>
                </div>
                
                <div className="space-y-10">
                  <div className="p-8 4xl:p-16 bg-[#F8FAFC] dark:bg-[#020617] rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <h4 className="text-[11px] 4xl:text-xl font-poppins font-black uppercase text-[#0EA5E9] tracking-widest mb-3">Medical Credentials</h4>
                    <p className="text-xl 4xl:text-4xl font-poppins font-bold text-slate-900 dark:text-white">{doctor.qualification}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 4xl:gap-16">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 4xl:w-16 4xl:h-16 rounded-2xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] shrink-0"><FaHistory size={20} className="4xl:size-8" /></div>
                      <div>
                        <h5 className="font-poppins font-bold text-lg 4xl:text-3xl text-slate-900 dark:text-white mb-2">Clinical Practice</h5>
                        <p className="text-sm 4xl:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed">Practicing for over {doctor.experience} years in elite medical institutions with excellence.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 4xl:w-16 4xl:h-16 rounded-2xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0"><FaStethoscope size={20} className="4xl:size-8" /></div>
                      <div>
                        <h5 className="font-poppins font-bold text-lg 4xl:text-3xl text-slate-900 dark:text-white mb-2">Specialized Focus</h5>
                        <p className="text-sm 4xl:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed">Deep expertise in {doctor.specialization} clinical protocols and advanced patient care.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white dark:bg-[#0F172A] rounded-[3rem] p-8 md:p-12 4xl:p-24 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-3xl md:text-4xl 4xl:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-10">Clinical Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 4xl:gap-12">
                  {['Comprehensive Diagnosis', 'Customized Treatment Plans', 'Preventive Healthcare', 'Advanced Post-Op Care'].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 4xl:p-12 bg-[#F8FAFC] dark:bg-[#020617] rounded-3xl border border-slate-100 dark:border-slate-800">
                      <FaCheckCircle className="text-[#14B8A6] 4xl:size-10" size={20} />
                      <span className="font-poppins font-bold text-sm md:text-base 4xl:text-3xl text-slate-700 dark:text-slate-200">{s}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="sticky top-28 bg-white dark:bg-[#0F172A] rounded-[3rem] p-10 4xl:p-20 border border-slate-200 dark:border-slate-800 shadow-2xl">
                <h3 className="text-2xl 4xl:text-5xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-10">Schedule Session</h3>
                <div className="mb-10">
                  <p className="text-[10px] 4xl:text-xl font-poppins font-black uppercase text-slate-400 tracking-[0.2em] mb-5">Select Date</p>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {dates.map((item, i) => (
                      <button key={i} onClick={() => setSelectedDate(i)} className={`flex-shrink-0 w-16 4xl:w-28 py-5 4xl:py-10 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${selectedDate === i ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-900 border-transparent text-slate-600 dark:text-slate-400 hover:border-slate-200'}`}>
                        <span className="text-[10px] 4xl:text-lg font-bold uppercase">{item.day}</span>
                        <span className="text-xl 4xl:text-4xl font-black">{item.date}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-12">
                  <p className="text-[10px] 4xl:text-xl font-poppins font-black uppercase text-slate-400 tracking-[0.2em] mb-5">Time Slots</p>
                  <div className="grid grid-cols-2 gap-3 4xl:gap-6">
                    {timeSlots.map((slot) => (
                      <button key={slot} onClick={() => setSelectedSlot(slot)} className={`py-4 4xl:py-8 rounded-xl text-[11px] 4xl:text-2xl font-poppins font-bold transition-all border ${selectedSlot === slot ? 'bg-[#14B8A6] border-[#14B8A6] text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-900 border-transparent text-slate-600 dark:text-slate-400'}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-8">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-sm 4xl:text-2xl font-poppins font-bold text-slate-400 uppercase tracking-widest">Total Fee</span>
                    <span className="text-3xl 4xl:text-7xl font-poppins font-black text-slate-900 dark:text-white">₹{doctor.fee}</span>
                  </div>
                  <Button onClick={handleConfirmBooking} className="w-full py-5 4xl:py-10 rounded-2xl shadow-xl shadow-[#0EA5E9]/20 font-black text-[11px] 4xl:text-2xl uppercase tracking-[0.2em]">Confirm Booking</Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DoctorProfile;
