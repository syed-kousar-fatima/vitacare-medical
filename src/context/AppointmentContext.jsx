import { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('vitacare_appointments');
    return saved ? JSON.parse(saved) : [];
  });

  const [bookingData, setBookingData] = useState({
    doctor: null,
    date: null,
    time: '',
    patient: {
      fullName: '',
      email: '',
      phone: '',
      gender: 'male',
      reason: ''
    }
  });

  useEffect(() => {
    localStorage.setItem('vitacare_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: `VC-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  const resetBooking = () => {
    setBookingData({
      doctor: null,
      date: null,
      time: '',
      patient: { fullName: '', email: '', phone: '', gender: 'male', reason: '' }
    });
  };

  return (
    <AppointmentContext.Provider value={{ 
      appointments, 
      bookingData, 
      setBookingData, 
      addAppointment, 
      resetBooking 
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) throw new Error('useAppointments must be used within an AppointmentProvider');
  return context;
};
