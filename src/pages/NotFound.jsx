import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import Button from '../components/common/Button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-[#020617] p-8 text-center">
        <h1 className="text-[12rem] md:text-[20rem] font-cormorant italic font-black text-[#0EA5E9]/10 leading-none">404</h1>
        <div className="max-w-md -mt-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-6">Page Not Found</h2>
          <p className="font-poppins text-[#64748B] dark:text-[#94A3B8] mb-10">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/">
            <Button className="w-full py-5 text-lg rounded-2xl shadow-xl shadow-[#0EA5E9]/20">
              Back to Home <Home size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
