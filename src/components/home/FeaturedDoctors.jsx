import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock, FaCalendarCheck } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Button from '../common/Button';

const FeaturedDoctors = () => {
  const doctors = [
    { id: 1, name: 'Dr. Alice Vane', specialization: 'General Physician', rating: 4.5, reviews: 85, experience: 5, isAvailable: true, image: 'https://i.pinimg.com/736x/35/60/6f/35606f296e52742f503fb57360c9fafd.jpg', type: 'Normal' },
    { id: 2, name: 'Dr. Robert Smith', specialization: 'Senior Consultant', rating: 4.9, reviews: 150, experience: 20, isAvailable: true, image: 'https://i.pinimg.com/736x/be/70/ea/be70ea0d32181aad4f632101c030cd62.jpg', type: 'Specialist' },
    { id: 3, name: 'Dr. Mark Zaid', specialization: 'Cardiologist', rating: 4.6, reviews: 90, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/1200x/54/0a/82/540a8268115c5c900e6d01301ed057bd.jpg', type: 'Normal' },
    { id: 4, name: 'Dr. Sarah Johnson', specialization: 'Interventional Cardiologist', rating: 4.9, reviews: 210, experience: 15, isAvailable: true, image: 'https://i.pinimg.com/736x/d7/68/b6/d768b6f12f444204ae64169b26052ee2.jpg', type: 'Specialist' },
    { id: 5, name: 'Dr. Linda Grey', specialization: 'Neurologist', rating: 4.5, reviews: 75, experience: 6, isAvailable: false, image: 'https://i.pinimg.com/736x/13/6c/a1/136ca1dce8286bd645b6ecaf9cd0c650.jpg', type: 'Normal' },
    { id: 6, name: 'Dr. James Wilson', specialization: 'Neurosurgeon', rating: 4.8, reviews: 130, experience: 18, isAvailable: true, image: 'https://i.pinimg.com/736x/37/25/1e/37251eab10cb27e8b11515a3c78ce64d.jpg', type: 'Specialist' },
    { id: 7, name: 'Dr. Kevin Hart', specialization: 'Pediatrician', rating: 4.7, reviews: 110, experience: 8, isAvailable: true, image: 'https://i.pinimg.com/736x/f2/82/44/f282441189ec2f1a440049dbe339abdf.jpg', type: 'Normal' },
    { id: 8, name: 'Dr. Emily Chen', specialization: 'Pediatric Specialist', rating: 5.0, reviews: 300, experience: 12, isAvailable: true, image: 'https://i.pinimg.com/1200x/3e/0a/c0/3e0ac07327c77a996595b16abdb122a4.jpg', type: 'Specialist' },
    { id: 9, name: 'Dr. Ryan Gos', specialization: 'Dentist', rating: 4.4, reviews: 60, experience: 4, isAvailable: true, image: 'https://i.pinimg.com/736x/40/9f/b1/409fb1eecf38d68d9a8aace27b2497ba.jpg', type: 'Normal' },
    { id: 10, name: 'Dr. Sophia Loren', specialization: 'Orthodontist Specialist', rating: 4.9, reviews: 180, experience: 14, isAvailable: true, image: 'https://i.pinimg.com/736x/07/71/a9/0771a9f2038f17e58d5a0c883abc05b0.jpg', type: 'Specialist' },
    { id: 11, name: 'Dr. Chris Evans', specialization: 'Orthopedic Doctor', rating: 4.6, reviews: 95, experience: 9, isAvailable: true, image: 'https://i.pinimg.com/736x/16/a2/8d/16a28d16c7188c92c942a248236b1292.jpg', type: 'Normal' },
    { id: 12, name: 'Dr. Michael Ross', specialization: 'Orthopedic Surgeon', rating: 4.8, reviews: 220, experience: 16, isAvailable: true, image: 'https://i.pinimg.com/736x/47/a4/44/47a4448f2df0046ee1f7bed28f87e551.jpg', type: 'Specialist' },
    { id: 13, name: 'Dr. Ethan Hunt', specialization: 'Dermatologist', rating: 4.5, reviews: 80, experience: 5, isAvailable: false, image: 'https://i.pinimg.com/736x/1b/4d/8e/1b4d8ea4ca159a007ce85fd3812ad2a8.jpg', type: 'Normal' },
    { id: 14, name: 'Dr. Olivia Wilde', specialization: 'Dermato-Surgeon', rating: 4.9, reviews: 140, experience: 13, isAvailable: true, image: 'https://i.pinimg.com/736x/32/51/36/3251368ec5318f8d28cd1ec1e30eb4e6.jpg', type: 'Specialist' },
    { id: 15, name: 'Dr. Emma Stone', specialization: 'Pathologist', rating: 4.6, reviews: 55, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/236x/3f/51/f2/3f51f2a8373574d624f2d64513ec9fe7.jpg', type: 'Normal' },
    { id: 16, name: 'Dr. William Reed', specialization: 'Laboratory Medicine Specialist', rating: 4.9, reviews: 120, experience: 19, isAvailable: true, image: 'https://i.pinimg.com/736x/65/91/dc/6591dc8360ddf9aab15b380620d27cd6.jpg', type: 'Specialist' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full py-20 sm:py-28 md:py-36 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 sm:mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-[#14B8A6] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">Expert Medical Team</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
              Meet Our World Class <span className="text-gradient">Specialists</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link to="/doctors" className="group flex items-center gap-4 font-poppins font-bold text-sm text-[#0EA5E9] uppercase tracking-widest border-b-2 border-[#0EA5E9]/20 pb-2 hover:border-[#0EA5E9] transition-all">
              View All Doctors <HiOutlineArrowNarrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-6 gap-8 sm:gap-10">
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={cardVariants} whileHover={{ y: -15 }} className="group bg-[#F8FAFC] dark:bg-[#0F172A] rounded-[2.5rem] sm:rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(14,165,233,0.15)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-6 left-6">
                   <span className={`px-3 py-1 rounded-full text-[9px] font-poppins font-black uppercase tracking-widest ${doctor.type === 'Specialist' ? 'bg-[#0EA5E9] text-white' : 'bg-white text-[#0EA5E9]'}`}>
                    {doctor.type}
                   </span>
                </div>

                <div className="absolute top-6 right-6">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 text-[10px] font-poppins font-bold uppercase tracking-widest ${doctor.isAvailable ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-slate-500/20 text-white'}`}>
                    <span className={`w-2 h-2 rounded-full ${doctor.isAvailable ? 'bg-[#10B981] animate-pulse' : 'bg-slate-400'}`} />
                    {doctor.isAvailable ? 'Available' : 'Busy'}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-cormorant italic font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-white/80 font-poppins text-xs uppercase tracking-widest">{doctor.specialization}</p>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => ( <FaStar key={i} size={12} className={i < Math.floor(doctor.rating) ? 'fill-current' : 'opacity-30'} /> ))}
                    </div>
                    <span className="text-xs font-poppins font-bold text-[#0F172A] dark:text-white">{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <FaRegClock size={14} />
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-tighter">{doctor.experience} Yrs Exp</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link to={`/doctor/${doctor.id}`} className="w-full"><button className="w-full py-4 rounded-2xl border border-slate-200 dark:border-slate-800 font-poppins font-bold text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-[#0EA5E9] hover:text-white transition-all">Profile</button></Link>
                  <Link to="/appointment" className="w-full"><button className="w-full py-4 rounded-2xl bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] font-poppins font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#0EA5E9] dark:hover:bg-[#38BDF8] hover:text-white transition-all">Book</button></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
