import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Button from '../common/Button';

const FeaturedArticle = ({ article }) => {
  return (
    <section className="w-full bg-white dark:bg-[#0F172A] overflow-hidden border-b border-[#E2E8F0] dark:border-[#334155]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-xs font-bold font-poppins uppercase tracking-widest">
              Featured Post
            </span>
            <div className="flex items-center gap-2 text-[#64748B] text-xs font-poppins">
              <Clock size={14} />
              <span>{article.readTime} Min Read</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-[1.1] mb-8">
            {article.title}
          </h2>

          <p className="text-lg md:text-xl font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-10 max-w-xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src={article.authorImage} className="w-12 h-12 rounded-full object-cover" alt="" />
              <div>
                <p className="text-sm font-bold font-poppins text-[#0F172A] dark:text-[#F8FAFC]">{article.author}</p>
                <p className="text-xs font-poppins text-[#64748B]">{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#64748B] text-sm font-poppins">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
          </div>

          <Button className="w-fit px-10 py-4 text-lg">
            Read Full Article <ArrowRight size={20} />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative h-[400px] lg:h-auto overflow-hidden"
        >
          <img 
            src={article.image} 
            className="absolute inset-0 w-full h-full object-cover"
            alt={article.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0F172A] to-transparent lg:block hidden" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
