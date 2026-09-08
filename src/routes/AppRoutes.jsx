import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollTop from '../components/common/ScrollTop';

import Home from '../pages/Home';
import Doctors from '../pages/Doctors';
import DoctorProfile from '../pages/DoctorProfile';
import Appointment from '../pages/Appointment';
import Services from '../pages/Services';
import Dashboard from '../pages/Dashboard';
import Reports from '../pages/Reports';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <ScrollToTop />
      <ScrollTop />
      
      {!isDashboard && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      {!isDashboard && <Footer />}
    </div>
  );
};

export default AppRoutes;
