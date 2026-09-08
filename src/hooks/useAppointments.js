import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useAppointments = () => {
  const [appointments, setAppointments] = useLocalStorage('vitacare_appointments', []);

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: `VC-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };
    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  const cancelAppointment = (id) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  return { appointments, addAppointment, cancelAppointment };
};

export default useAppointments;
