import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, MapPin, Clock, PhoneCall } from 'lucide-react';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#020617] border-y border-slate-200 dark:border-slate-800">
      <div className="p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center border-r border-slate-200 dark:border-slate-800">
        <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-6 block">
          Get In Touch
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight mb-12">
          Have Questions? <br /> We're Here to <span className="text-gradient">Help.</span>
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <User className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? 'text-red-500' : 'text-slate-400 group-focus-within:text-[#0EA5E9]'}`} size={18} />
              <input 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text" 
                placeholder="Full Name" 
                className={`w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 transition-all ${errors.fullName ? 'focus:ring-red-500/20 ring-2 ring-red-500/50' : 'focus:ring-[#0EA5E9]/20'}`} 
              />
              {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-2 font-poppins font-bold uppercase">{errors.fullName}</p>}
            </div>
            <div className="relative group">
              <Mail className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-500' : 'text-slate-400 group-focus-within:text-[#0EA5E9]'}`} size={18} />
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email Address" 
                className={`w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 transition-all ${errors.email ? 'focus:ring-red-500/20 ring-2 ring-red-500/50' : 'focus:ring-[#0EA5E9]/20'}`} 
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-poppins font-bold uppercase">{errors.email}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <Phone className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? 'text-red-500' : 'text-slate-400 group-focus-within:text-[#0EA5E9]'}`} size={18} />
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="Phone Number" 
                className={`w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 transition-all ${errors.phone ? 'focus:ring-red-500/20 ring-2 ring-red-500/50' : 'focus:ring-[#0EA5E9]/20'}`} 
              />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-2 font-poppins font-bold uppercase">{errors.phone}</p>}
            </div>
            <div className="relative group">
              <select 
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full px-8 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-400 dark:text-slate-500 outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${errors.department ? 'focus:ring-red-500/20 ring-2 ring-red-500/50' : 'focus:ring-[#0EA5E9]/20'}`}
              >
                <option value="">Select Department</option>
                <option value="gen">General Inquiry</option>
                <option value="cardio">Cardiology</option>
                <option value="neuro">Neurology</option>
              </select>
              {errors.department && <p className="text-red-500 text-[10px] mt-1 ml-2 font-poppins font-bold uppercase">{errors.department}</p>}
            </div>
          </div>
          <div className="relative group">
            <MessageSquare className={`absolute left-6 top-6 transition-colors ${errors.message ? 'text-red-500' : 'text-slate-400 group-focus-within:text-[#0EA5E9]'}`} size={18} />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?" 
              className={`w-full pl-14 pr-6 py-6 h-48 bg-slate-50 dark:bg-slate-900 border-none rounded-[2rem] font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'focus:ring-red-500/20 ring-2 ring-red-500/50' : 'focus:ring-[#0EA5E9]/20'}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-[10px] mt-1 ml-2 font-poppins font-bold uppercase">{errors.message}</p>}
          </div>
          <Button className="w-full md:w-auto px-12 py-5 rounded-2xl shadow-xl shadow-[#0EA5E9]/20 font-black text-xs uppercase tracking-widest">
            Send Message <Send size={16} className="ml-2" />
          </Button>
        </form>
      </div>

      <div className="bg-[#F8FAFC] dark:bg-[#0F172A] p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center space-y-16">
        <div className="space-y-10 text-left">
          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 rounded-3xl bg-white dark:bg-[#020617] flex items-center justify-center text-[#0EA5E9] shadow-sm group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-500 shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="text-[11px] font-poppins font-black uppercase text-[#0EA5E9] tracking-[0.2em] mb-2">Main Clinic</h4>
              <p className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white leading-snug">
                123 Health City Drive, <br /> New York, NY 10001, USA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 rounded-3xl bg-white dark:bg-[#020617] flex items-center justify-center text-[#14B8A6] shadow-sm group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-500 shrink-0">
              <Clock size={28} />
            </div>
            <div className="flex-1">
              <h4 className="text-[11px] font-poppins font-black uppercase text-[#14B8A6] tracking-[0.2em] mb-4">Working Hours</h4>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2 max-w-sm">
                <span className="text-sm font-poppins text-slate-500">Mon - Fri</span>
                <span className="text-sm font-poppins font-bold text-slate-900 dark:text-white text-right">08 AM - 08 PM</span>
                <span className="text-sm font-poppins text-slate-500">Saturday</span>
                <span className="text-sm font-poppins font-bold text-slate-900 dark:text-white text-right">09 AM - 06 PM</span>
                <span className="text-sm font-poppins text-slate-500">Sunday</span>
                <span className="text-sm font-poppins font-black text-[#EF4444] text-right uppercase">Emergency</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <div className="w-16 h-16 rounded-3xl bg-white dark:bg-[#020617] flex items-center justify-center text-[#EF4444] shadow-sm group-hover:bg-[#EF4444] group-hover:text-white transition-all duration-500 shrink-0">
              <PhoneCall size={28} />
            </div>
            <div>
              <h4 className="text-[11px] font-poppins font-black uppercase text-[#EF4444] tracking-[0.2em] mb-2">Emergency 24/7</h4>
              <p className="text-3xl sm:text-4xl font-poppins font-black text-slate-900 dark:text-white tabular-nums">
                +1 (800) 555-0199
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale dark:invert transition-all hover:grayscale-0 dark:hover:invert-0 duration-700" alt="" />
          <div className="absolute inset-0 bg-[#0EA5E9]/10" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
