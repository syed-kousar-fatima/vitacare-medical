import { Award, Clock, MapPin, ShieldCheck } from 'lucide-react';
import RatingStars from './RatingStars';
import AvailabilityBadge from './AvailabilityBadge';

const DoctorProfileCard = ({ doctor }) => {
  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-[2rem] border border-[#E2E8F0] dark:border-[#334155] p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="relative rounded-3xl overflow-hidden aspect-square border-4 border-[#F8FAFC] dark:border-[#1E293B]">
            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC]">{doctor.name}</h2>
                <ShieldCheck className="text-[#0EA5E9]" size={24} />
              </div>
              <p className="text-lg font-poppins text-[#64748B] dark:text-[#94A3B8]">{doctor.qualification}</p>
            </div>
            <AvailabilityBadge isAvailable={doctor.isAvailable} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, label: 'Experience', value: `${doctor.experience} Yrs` },
              { icon: Clock, label: 'Work Time', value: '09:00 - 18:00' },
              { icon: MapPin, label: 'Location', value: 'Health City' },
              { icon: ShieldCheck, label: 'Verified', value: 'Yes' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#F8FAFC] dark:bg-[#1E293B] p-4 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
                <stat.icon size={20} className="text-[#0EA5E9] mb-2" />
                <p className="text-[10px] uppercase font-poppins text-[#64748B] dark:text-[#94A3B8]">{stat.label}</p>
                <p className="text-sm font-bold font-poppins text-[#0F172A] dark:text-[#F8FAFC]">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC]">About Doctor</h4>
            <p className="font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              {doctor.bio || 'A highly skilled professional dedicated to providing exceptional healthcare services with a patient-centered approach.'}
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <RatingStars rating={doctor.rating} reviews={doctor.reviews} />
            <div className="h-4 w-px bg-[#E2E8F0] dark:bg-[#334155]" />
            <span className="font-poppins font-bold text-[#0EA5E9] dark:text-[#38BDF8]">USD {doctor.fee} / Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
