import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, UserRoundX, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import DoctorCard from '../components/doctors/DoctorCard';
import DoctorSkeleton from '../components/doctors/DoctorSkeleton';

const Doctors = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

const doctorsData = [
  { id: 1, name: 'Dr. Alice Vane', specialization: 'General Medicine', rating: 4.5, reviews: 85, experience: 5, isAvailable: true, image: 'https://i.pinimg.com/736x/35/60/6f/35606f296e52742f503fb57360c9fafd.jpg' },
  { id: 2, name: 'Dr. Robert Smith', specialization: 'General Medicine', rating: 4.9, reviews: 150, experience: 20, isAvailable: true, image: 'https://i.pinimg.com/736x/be/70/ea/be70ea0d32181aad4f632101c030cd62.jpg' },
  { id: 3, name: 'Dr. Mark Zaid', specialization: 'Cardiology', rating: 4.6, reviews: 90, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/1200x/54/0a/82/540a8268115c5c900e6d01301ed057bd.jpg' },
  { id: 4, name: 'Dr. Sarah Johnson', specialization: 'Cardiology', rating: 4.9, reviews: 210, experience: 15, isAvailable: true, image: 'https://i.pinimg.com/736x/d7/68/b6/d768b6f12f444204ae64169b26052ee2.jpg' },
  { id: 5, name: 'Dr. Linda Grey', specialization: 'Neurology', rating: 4.5, reviews: 75, experience: 6, isAvailable: false, image: 'https://i.pinimg.com/736x/13/6c/a1/136ca1dce8286bd645b6ecaf9cd0c650.jpg' },
  { id: 6, name: 'Dr. James Wilson', specialization: 'Neurology', rating: 4.8, reviews: 130, experience: 18, isAvailable: true, image: 'https://i.pinimg.com/736x/37/25/1e/37251eab10cb27e8b11515a3c78ce64d.jpg' },
  { id: 7, name: 'Dr. Kevin Hart', specialization: 'Pediatrics', rating: 4.7, reviews: 110, experience: 8, isAvailable: true, image: 'https://i.pinimg.com/736x/f2/82/44/f282441189ec2f1a440049dbe339abdf.jpg' },
  { id: 8, name: 'Dr. Emily Chen', specialization: 'Pediatrics', rating: 5.0, reviews: 300, experience: 12, isAvailable: true, image: 'https://i.pinimg.com/1200x/3e/0a/c0/3e0ac07327c77a996595b16abdb122a4.jpg' },
  { id: 9, name: 'Dr. Ryan Gos', specialization: 'Dental Care', rating: 4.4, reviews: 60, experience: 4, isAvailable: true, image: 'https://i.pinimg.com/736x/40/9f/b1/409fb1eecf38d68d9a8aace27b2497ba.jpg' },
  { id: 10, name: 'Dr. Sophia Loren', specialization: 'Dental Care', rating: 4.9, reviews: 180, experience: 14, isAvailable: true, image: 'https://i.pinimg.com/736x/07/71/a9/0771a9f2038f17e58d5a0c883abc05b0.jpg' },
  { id: 11, name: 'Dr. Chris Evans', specialization: 'Orthopedics', rating: 4.6, reviews: 95, experience: 9, isAvailable: true, image: 'https://i.pinimg.com/736x/16/a2/8d/16a28d16c7188c92c942a248236b1292.jpg' },
  { id: 12, name: 'Dr. Michael Ross', specialization: 'Orthopedics', rating: 4.8, reviews: 220, experience: 16, isAvailable: true, image: 'https://i.pinimg.com/736x/47/a4/44/47a4448f2df0046ee1f7bed28f87e551.jpg' },
  { id: 13, name: 'Dr. Ethan Hunt', specialization: 'Dermatology', rating: 4.5, reviews: 80, experience: 5, isAvailable: false, image: 'https://i.pinimg.com/736x/1b/4d/8e/1b4d8ea4ca159a007ce85fd3812ad2a8.jpg' },
  { id: 14, name: 'Dr. Olivia Wilde', specialization: 'Dermatology', rating: 4.9, reviews: 140, experience: 13, isAvailable: true, image: 'https://i.pinimg.com/736x/32/51/36/3251368ec5318f8d28cd1ec1e30eb4e6.jpg' },
  { id: 15, name: 'Dr. Emma Stone', specialization: 'Laboratory Services', rating: 4.6, reviews: 55, experience: 7, isAvailable: true, image: 'https://i.pinimg.com/236x/3f/51/f2/3f51f2a8373574d624f2d64513ec9fe7.jpg' },
  { id: 16, name: 'Dr. William Reed', specialization: 'Laboratory Services', rating: 4.9, reviews: 120, experience: 19, isAvailable: true, image: 'https://i.pinimg.com/736x/65/91/dc/6591dc8360ddf9aab15b380620d27cd6.jpg' }
];


  const specializations = ['All', 'General Medicine', 'Cardiology', 'Neurology', 'Pediatrics', 'Dental Care', 'Orthopedics', 'Dermatology', 'Laboratory Services'];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctorsData
      .filter(doc => {
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             doc.specialization.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSpec = selectedSpecialization === 'All' || doc.specialization === selectedSpecialization;
        const matchesAvail = availabilityFilter === 'All' || 
                            (availabilityFilter === 'Available' ? doc.isAvailable : !doc.isAvailable);
        return matchesSearch && matchesSpec && matchesAvail;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'experience') return b.experience - a.experience;
        return 0;
      });
  }, [searchQuery, selectedSpecialization, availabilityFilter, sortBy]);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-white dark:bg-[#020617]">
        <div className="w-full py-16 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 bg-[#F8FAFC] dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl text-left">
            <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">Professional Team</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight mb-8">
              Our Expert <span className="text-gradient">Specialists</span>
            </h1>
          </motion.div>

          <div className="flex flex-col gap-6 mt-12 bg-white dark:bg-[#020617] p-4 sm:p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="relative w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by doctor name or specialized field..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-2xl w-full sm:w-auto">
                <Filter size={16} className="text-[#0EA5E9]" />
                <select 
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full sm:w-auto min-w-0 sm:min-w-[150px] bg-transparent font-poppins text-[13px] font-bold text-slate-900 dark:text-slate-300 outline-none cursor-pointer"
                >
                  {specializations.map(s => <option key={s} value={s} className="dark:bg-[#020617] text-slate-900 dark:text-white">{s}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-2xl w-full sm:w-auto">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <select 
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="w-full sm:w-auto min-w-0 sm:min-w-[120px] bg-transparent font-poppins text-[13px] font-bold text-slate-900 dark:text-slate-300 outline-none cursor-pointer"
                >
                  <option value="All" className="dark:bg-[#020617] text-slate-900 dark:text-white">All Status</option>
                  <option value="Available" className="dark:bg-[#020617] text-slate-900 dark:text-white">Available Now</option>
                  <option value="Unavailable" className="dark:bg-[#020617] text-slate-900 dark:text-white">Busy</option>
                </select>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-2xl w-full sm:w-auto">
                <SlidersHorizontal size={16} className="text-[#14B8A6]" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto min-w-0 sm:min-w-[140px] bg-transparent font-poppins text-[13px] font-bold text-slate-900 dark:text-slate-300 outline-none cursor-pointer"
                >
                  <option value="rating" className="dark:bg-[#020617] text-slate-900 dark:text-white">Sort by Rating</option>
                  <option value="experience" className="dark:bg-[#020617] text-slate-900 dark:text-white">Sort by Experience</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-6 gap-8 sm:gap-10">
            {loading ? (
              [...Array(8)].map((_, i) => <DoctorSkeleton key={i} />)
            ) : (
              <AnimatePresence mode="popLayout">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </AnimatePresence>
            )}
          </div>

          {!loading && filteredDoctors.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full py-32 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 mb-6">
                <UserRoundX size={48} />
              </div>
              <h3 className="text-3xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-2">No Specialists Found</h3>
              <p className="font-poppins text-slate-500 dark:text-slate-400">Try adjusting your filters or search keywords.</p>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Doctors;
