import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const BlogCard = ({ article }) => {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="group flex flex-col bg-white dark:bg-[#0F172A] border-r border-b border-[#E2E8F0] dark:border-[#334155] transition-all duration-500 overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md rounded-full text-[10px] font-bold font-poppins uppercase tracking-widest text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#334155]">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-8 md:p-10 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6 text-[10px] font-poppins font-bold uppercase tracking-widest text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {article.readTime} Min
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
          <span>{article.date}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight mb-6 group-hover:text-[#0EA5E9] transition-colors">
          {article.title}
        </h3>

        <p className="font-poppins text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-8 border-t border-[#E2E8F0] dark:border-[#334155] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={article.authorImage} className="w-8 h-8 rounded-full object-cover" alt="" />
            <span className="text-xs font-bold font-poppins text-[#0F172A] dark:text-[#F8FAFC]">{article.author}</span>
          </div>
          <button className="w-10 h-10 rounded-full border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center text-[#64748B] group-hover:bg-[#0EA5E9] group-hover:border-[#0EA5E9] group-hover:text-white transition-all">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
