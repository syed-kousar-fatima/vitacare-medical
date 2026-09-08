import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Stethoscope, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const SearchDoctors = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    specialization: '',
    location: '',
    availability: ''
  });

  const specializations = [
    "General Medicine", "Cardiology", "Neurology", "Pediatrics",
    "Dental Care", "Orthopedics", "Dermatology", "Laboratory Services"
  ];

  const locations = [
    "Health City Main", "Downtown Wellness Center", "Northside Medical Plaza",
    "East Wing Hospital", "Westside Family Clinic"
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchData.specialization) params.append('specialization', searchData.specialization);
    if (searchData.location) params.append('location', searchData.location);
    if (searchData.availability) params.append('availability', searchData.availability);
    navigate(`/doctors?${params.toString()}`);
  };

  return (
    <div className="w-full px-0 -mt-8 sm:-mt-12 md:-mt-10 lg:-mt-12 xl:-mt-24 2xl:-mt-32 relative z-30">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-12 md:px-16 lg:px-24 xl:px-48 4xl:px-64">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800 p-4 sm:p-6 lg:p-8 xl:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 items-center">
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0EA5E9]">
                <Stethoscope size={20} />
              </div>
              <select 
                value={searchData.specialization}
                onChange={(e) => setSearchData({ ...searchData, specialization: e.target.value })}
                className="w-full pl-14 pr-10 py-4 sm:py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl font-poppins text-[12px] sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all appearance-none cursor-pointer"
              >
                <option value="">Specialization</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec.toLowerCase()}>{spec}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#14B8A6]">
                <MapPin size={20} />
              </div>
              <select 
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                className="w-full pl-14 pr-10 py-4 sm:py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl font-poppins text-[12px] sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all appearance-none cursor-pointer"
              >
                <option value="">Location</option>
                {locations.map(loc => (
                  <option key={loc} value={loc.toLowerCase()}>{loc}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="relative group">
              <select 
                value={searchData.availability}
                onChange={(e) => setSearchData({ ...searchData, availability: e.target.value })}
                className="w-full px-6 py-4 sm:py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl font-poppins text-[12px] sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all appearance-none cursor-pointer"
              >
                <option value="">Availability</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="weekend">This Weekend</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <ChevronDown size={16} />
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={handleSearch}
              className="h-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-poppins font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#0EA5E9]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Search size={18} className="mr-2" /> Find Doctors
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchDoctors;
