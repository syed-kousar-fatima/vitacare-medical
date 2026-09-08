import PageTransition from '../components/layout/PageTransition';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  return (
    <PageTransition>
      <article className="w-full min-h-screen bg-white dark:bg-[#020617]">
        <div className="relative h-[60vh] w-full">
          <img src="https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-10 left-10">
            <Link to="/blog" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A]"><ArrowLeft size={24} /></Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto -mt-32 relative z-10 bg-white dark:bg-[#0F172A] rounded-[3rem] p-10 md:p-20 shadow-2xl border border-[#E2E8F0] dark:border-[#334155]">
          <span className="px-4 py-1.5 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-xs font-bold font-poppins uppercase tracking-widest mb-8 inline-block">Cardiology</span>
          <h1 className="text-4xl md:text-6xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight mb-8">10 Ways to Improve Your Heart Health Today</h1>
          <div className="flex items-center justify-between py-8 border-y border-[#E2E8F0] dark:border-[#334155] mb-12">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?u=1" className="w-14 h-14 rounded-full border-2 border-[#0EA5E9]" alt="" />
              <div>
                <p className="font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC]">Dr. Sarah Johnson</p>
                <p className="text-xs text-[#64748B]">Sept 10, 2026 • 8 Min Read</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B]"><Share2 size={20} /></button>
              <button className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B]"><Bookmark size={20} /></button>
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed space-y-6">
            <p className="text-xl text-[#0F172A] dark:text-[#F8FAFC] font-medium">Heart disease remains the leading cause of death globally, but the good news is that many cases are preventable through simple lifestyle adjustments.</p>
            <p>Regular exercise, a balanced diet, and stress management are the cornerstones of cardiovascular health. In this article, we delve deep into the clinical aspects of heart maintenance...</p>
          </div>
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogDetails;
