import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617]">
      <Sidebar />
      <div className="lg:ml-72 transition-all duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="p-4 sm:p-6 lg:p-8 max-w-[2560px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
