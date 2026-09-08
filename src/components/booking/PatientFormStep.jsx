const PatientFormStep = ({ formData, onChange }) => {
  const inputClass = "w-full bg-[#F8FAFC] dark:bg-[#020617] border-4 border-transparent focus:border-[#0EA5E9]/30 rounded-2xl px-6 py-4 4xl:py-8 4xl:text-3xl font-poppins text-slate-900 dark:text-white outline-none transition-all";
  const labelClass = "block text-[10px] 4xl:text-xl font-poppins font-black uppercase text-slate-400 tracking-widest mb-2 ml-2";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div>
        <label className={labelClass}>Full Name</label>
        <input type="text" value={formData.fullName} onChange={(e) => onChange('fullName', e.target.value)} className={inputClass} placeholder="Enter your name" />
      </div>
      <div>
        <label className={labelClass}>Email Address</label>
        <input type="email" value={formData.email} onChange={(e) => onChange('email', e.target.value)} className={inputClass} placeholder="example@mail.com" />
      </div>
      <div>
        <label className={labelClass}>Phone Number</label>
        <input type="tel" value={formData.phone} onChange={(e) => onChange('phone', e.target.value)} className={inputClass} placeholder="+91 00000 00000" />
      </div>
      <div>
        <label className={labelClass}>Gender</label>
        <select value={formData.gender} onChange={(e) => onChange('gender', e.target.value)} className={inputClass}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={labelClass}>Reason for Visit</label>
        <textarea value={formData.reason} onChange={(e) => onChange('reason', e.target.value)} className={`${inputClass} h-32 resize-none`} placeholder="Brief description of your health concern..." />
      </div>
    </div>
  );
};

export default PatientFormStep;
