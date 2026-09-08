import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Heart, Brain, Baby, Shield, Bone, 
  Stethoscope, Microscope, ArrowRight, CheckCircle2, 
  Users, Clock, ShieldCheck, ChevronRight
} from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/common/Button';

const Services = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const servicesData = [
    { 
      id: 'general-medicine', 
      title: 'General Medicine', 
      icon: Activity, 
      color: '#0EA5E9',
      image: 'https://i.pinimg.com/1200x/7f/77/65/7f77656a6274e471c6c772603ee659d0.jpg',
      shortDesc: 'Comprehensive healthcare for adults focusing on prevention.',
      longDesc: 'Our General Medicine department provides primary healthcare services for adults. We focus on the prevention, diagnosis, and treatment of adult diseases, ranging from common cold to chronic conditions like diabetes and hypertension.',
      benefits: ['Annual Wellness Exams', 'Chronic Disease Management', 'Immunizations', 'Health Screenings'],
      stats: { specialists: 12, patients: '15k+', success: '99%' }
    },
    { 
      id: 'cardiology', 
      title: 'Cardiology', 
      icon: Heart, 
      color: '#EF4444',
      image: 'https://i.pinimg.com/736x/2f/b2/a1/2fb2a17b06f51847ba40889ec9a6ee1d.jpg',
      shortDesc: 'Expert heart care using advanced diagnostics.',
      longDesc: 'The Cardiology department at VitaCare offers world-class heart care. Our team of specialists uses the latest technology to perform complex procedures and provide comprehensive cardiac rehabilitation.',
      benefits: ['Advanced ECG/EKG', 'Heart Valve Repair', 'Angioplasty', 'Cardiac Surgery'],
      stats: { specialists: 8, patients: '8k+', success: '96%' }
    },
    { 
      id: 'neurology', 
      title: 'Neurology', 
      icon: Brain, 
      color: '#8B5CF6',
      image: 'https://i.pinimg.com/1200x/b3/bc/60/b3bc6097f915e192f3f520744cc39334.jpg',
      shortDesc: 'Treatment for complex brain and nervous system disorders.',
      longDesc: 'Our Neurology center specializes in the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems.',
      benefits: ['Stroke Management', 'Epilepsy Treatment', 'Sleep Disorders', 'Neuro-rehabilitation'],
      stats: { specialists: 6, patients: '5k+', success: '94%' }
    },
    { 
      id: 'pediatrics', 
      title: 'Pediatrics', 
      icon: Baby, 
      color: '#F59E0B',
      image: 'https://i.pinimg.com/736x/f8/7b/b4/f87bb442ebe611af97c4280ce7b6f6c3.jpg',
      shortDesc: 'Compassionate medical care for infants and children.',
      longDesc: 'VitaCare Pediatrics provides a friendly and safe environment for your children. We offer comprehensive care from birth through adolescence, ensuring your child grows up healthy.',
      benefits: ['Neonatal Care', 'Growth Monitoring', 'Pediatric Surgery', 'Child Psychology'],
      stats: { specialists: 10, patients: '12k+', success: '98%' }
    },
    { 
      id: 'dental-care', 
      title: 'Dental Care', 
      icon: Shield, 
      color: '#10B981',
      image: 'https://i.pinimg.com/736x/91/ca/bb/91cabbcc87c4c75f8a34d4d305e001cf.jpg',
      shortDesc: 'Complete oral health solutions for all ages.',
      longDesc: 'Our Dental clinic offers a wide range of services from routine checkups to advanced cosmetic dentistry and oral surgery, all performed with the highest precision.',
      benefits: ['Painless Root Canal', 'Dental Implants', 'Orthodontics', 'Teeth Whitening'],
      stats: { specialists: 5, patients: '9k+', success: '97%' }
    },
    { 
      id: 'orthopedics', 
      title: 'Orthopedics', 
      icon: Bone, 
      color: '#64748B',
      image: 'https://i.pinimg.com/1200x/d9/d8/4f/d9d84f848ca312f37e89aeb93f2f3afb.jpg',
      shortDesc: 'Advanced care for bone, joint, and muscle conditions.',
      longDesc: 'Our Orthopedic department focuses on the musculoskeletal system. We provide surgical and non-surgical treatments for sports injuries, joint pain, and back problems.',
      benefits: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Spine Surgery'],
      stats: { specialists: 7, patients: '6k+', success: '95%' }
    },
    { 
      id: 'dermatology', 
      title: 'Dermatology', 
      icon: Stethoscope, 
      color: '#EC4899',
      image: 'https://i.pinimg.com/1200x/0b/cc/75/0bcc75c90c8d647c8cc15bfa28eca158.jpg',
      shortDesc: 'Expert clinical and cosmetic care for skin.',
      longDesc: 'VitaCare Dermatology offers expert diagnosis and treatment for skin, hair, and nail disorders. We also provide advanced aesthetic treatments to help you look your best.',
      benefits: ['Acne Treatment', 'Laser Therapy', 'Skin Cancer Screening', 'Chemical Peels'],
      stats: { specialists: 4, patients: '4k+', success: '98%' }
    },
    { 
      id: 'laboratory-services', 
      title: 'Laboratory Services', 
      icon: Microscope, 
      color: '#14B8A6',
      image: 'https://i.pinimg.com/1200x/28/fc/ea/28fcea3e9eee1ff9cfb889f647a1c8a6.jpg',
      shortDesc: 'State-of-the-art diagnostic testing with rapid results.',
      longDesc: 'Our laboratory is equipped with the latest diagnostic technology. We provide accurate and fast testing services to support clinical decisions across all departments.',
      benefits: ['Blood Analysis', 'Molecular Testing', 'Biopsy Reports', 'Health Packages'],
      stats: { specialists: 15, patients: '50k+', success: '100%' }
    }
  ];

  const currentService = servicesData.find(s => s.id === serviceId);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-24 sm:pt-32 pb-20 overflow-x-hidden">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 4xl:px-64">
          
          <div className="flex overflow-x-auto no-scrollbar gap-4 mb-16 pb-4 border-b border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => navigate('/services')}
              className={`flex-shrink-0 px-8 py-4 rounded-2xl font-poppins font-black text-[11px] uppercase tracking-widest transition-all ${!serviceId ? 'bg-[#0EA5E9] text-white shadow-lg' : 'bg-white dark:bg-[#0F172A] text-slate-400 border border-slate-100 dark:border-slate-800 hover:text-[#0EA5E9]'}`}
            >
              All Services
            </button>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/services/${s.id}`)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl font-poppins font-bold text-[11px] uppercase tracking-widest transition-all ${serviceId === s.id ? 'bg-[#0EA5E9] text-white shadow-lg' : 'bg-white dark:bg-[#0F172A] text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-[#0EA5E9]/30 hover:text-[#0EA5E9]'}`}
              >
                <s.icon size={16} />
                {s.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!serviceId ? (
              <motion.div 
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-6 gap-8"
              >
                {servicesData.map((s) => (
                  <Link to={`/services/${s.id}`} key={s.id}>
                    <motion.div 
                      whileHover={{ y: -15, scale: 1.02 }}
                      className="group bg-white dark:bg-[#0F172A] rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-[#0EA5E9]/10 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
                        <s.icon size={150} />
                      </div>
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${s.color}15`, color: s.color }}
                      >
                        <s.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-4">{s.title}</h3>
                      <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{s.shortDesc}</p>
                      <span className="flex items-center gap-2 font-poppins font-black text-[10px] uppercase tracking-widest text-[#0EA5E9]">
                        Explore Details <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="detail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{ backgroundColor: currentService.color }}>
                        <currentService.icon size={28} />
                      </div>
                      <h1 className="text-5xl sm:text-6xl 4xl:text-[9rem] font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight">
                        {currentService.title}
                      </h1>
                    </div>
                    <p className="text-lg sm:text-xl 4xl:text-4xl font-poppins text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                      {currentService.longDesc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentService.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-[#0EA5E9]/30 transition-all">
                          <CheckCircle2 className="text-[#14B8A6]" size={20} />
                          <span className="font-poppins font-bold text-sm text-slate-700 dark:text-slate-200">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-8">
                      {[
                        { icon: Users, label: 'Specialists', value: currentService.stats.specialists },
                        { icon: Clock, label: 'Experience', value: '24/7' },
                        { icon: ShieldCheck, label: 'Success Rate', value: currentService.stats.success }
                      ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                          <stat.icon className="text-[#0EA5E9] mb-2 mx-auto md:mx-0" size={24} />
                          <p className="text-[10px] font-poppins font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
                          <p className="text-xl font-poppins font-black text-slate-900 dark:text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-10 flex flex-wrap gap-6">
                      <Link to="/appointment">
                        <Button size="lg" className="px-10 py-5 rounded-2xl shadow-xl shadow-[#0EA5E9]/20 font-black text-xs uppercase tracking-widest">
                          Book Consultant
                        </Button>
                      </Link>
                      <button className="flex items-center gap-3 font-poppins font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
                        Contact Support <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/5] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl"
                  >
                    <img src={currentService.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <p className="text-white/70 font-poppins font-bold uppercase tracking-widest text-[10px] mb-2">VitaCare Excellence</p>
                      <h4 className="text-white text-3xl font-cormorant italic font-bold">Dedicated to your well-being.</h4>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
