import { useState, useEffect } from 'react';

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockDoctors = [
      { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', rating: 4.9, reviews: 120, fee: 150, experience: 12, isAvailable: true, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80' },
      { id: 2, name: 'Dr. James Wilson', specialization: 'Neurologist', rating: 4.8, reviews: 95, fee: 180, experience: 15, isAvailable: false, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80' },
      { id: 3, name: 'Dr. Emily Chen', specialization: 'Pediatrician', rating: 5.0, reviews: 210, fee: 120, experience: 8, isAvailable: true, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80' },
      { id: 4, name: 'Dr. Michael Ross', specialization: 'Orthopedic', rating: 4.7, reviews: 88, fee: 140, experience: 10, isAvailable: true, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80' }
    ];

    setTimeout(() => {
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);
  }, []);

  const filterDoctors = (query) => {
    return doctors.filter(doc => 
      doc.name.toLowerCase().includes(query.toLowerCase()) || 
      doc.specialization.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { doctors, loading, filterDoctors };
};

export default useDoctors;
