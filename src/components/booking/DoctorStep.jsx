import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const DoctorStep = ({ doctors, selectedDoctor, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 4xl:grid-cols-4">
      {doctors.map((doc) => (
        <motion.div
          key={doc.id}
          whileHover={{ y: -10 }}
          onClick={() => onSelect(doc)}
          className={`relative p-6 rounded-[2.5rem] border-4 cursor-pointer transition-all duration-300 flex flex-col items-center text-center
            ${selectedDoctor?.id === doc.id 
              ? 'bg-[#0EA5E9]/5 border-[#0EA5E9] shadow-2xl shadow-[#0EA5E9]/10' 
              : 'bg-[#F8FAFC] dark:bg-[#020617] border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
        >
          {selectedDoctor?.id === doc.id && (
            <div className="absolute top-6 right-6 text-[#0EA5E9]">
              <FaCheckCircle size={24} />
            </div>
          )}
          <div className="w-24 h-24 4xl:w-40 4xl:h-40 rounded-3xl overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-lg">
            <img src={doc.image} className="w-full h-full object-cover" alt="" />
          </div>
          <h4 className="font-cormorant italic font-bold text-2xl 4xl:text-5xl text-slate-900 dark:text-white mb-1">{doc.name}</h4>
          <p className="font-poppins text-xs 4xl:text-2xl font-bold uppercase tracking-widest text-[#0EA5E9]">{doc.specialization}</p>
          <p className="mt-4 font-poppins font-black text-slate-900 dark:text-white 4xl:text-3xl">₹{doc.fee}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DoctorStep;
