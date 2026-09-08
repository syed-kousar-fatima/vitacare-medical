import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegClock, FaRegCalendarAlt, FaChevronRight } from 'react-icons/fa';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: 'Understanding Heart Health: Tips for a Better Life',
      excerpt: 'Learn the essential habits to keep your heart strong and healthy in the modern world.',
      category: 'Cardiology',
      date: 'Sept 15, 2026',
      readTime: 5,
      author: 'Dr. Sarah Johnson',
      image: 'https://i.pinimg.com/736x/87/39/45/8739459f5dce1b8b0ea5688ea191bd6c.jpg'
    },
    {
      id: 2,
      title: 'The Future of Neurology: AI in Brain Mapping',
      excerpt: 'How artificial intelligence is revolutionizing the way we treat complex neurological disorders.',
      category: 'Technology',
      date: 'Sept 12, 2026',
      readTime: 8,
      author: 'Dr. James Wilson',
      image: 'https://i.pinimg.com/736x/5b/49/8e/5b498e7fb9eb226aa5666bbf3c00d776.jpg'
    },
    {
      id: 3,
      title: 'Nutrition for Seniors: A Complete Guide',
      excerpt: 'Maintaining a balanced diet is crucial as we age. Discover the best foods for longevity.',
      category: 'Wellness',
      date: 'Sept 10, 2026',
      readTime: 6,
      author: 'Dr. Emily Chen',
      image: 'https://i.pinimg.com/736x/be/0e/df/be0edf09a855964905f53adac016cb83.jpg'
    }
  ];

  return (
    <section className="w-full py-24 md:py-36 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-[2560px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="text-[#F59E0B] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">
              Medical Knowledge
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
              Latest Articles & Health <span className="text-gradient">Insights</span>
            </h2>
            <p className="mt-6 font-poppins text-slate-500 dark:text-slate-400 text-sm sm:text-lg max-w-xl leading-relaxed">
              Stay informed with the latest medical breakthroughs, wellness guides, and expert tips from the VitaCare medical team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/blog" className="group flex items-center gap-4 font-poppins font-bold text-sm text-[#0EA5E9] uppercase tracking-[0.2em] border-b-2 border-[#0EA5E9]/10 pb-2 hover:border-[#0EA5E9] transition-all">
              Explore All News <FaChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 4xl:grid-cols-4 gap-8 sm:gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={post.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl rounded-full text-[10px] font-poppins font-black uppercase tracking-widest text-[#0EA5E9] shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-6 mb-6 text-[10px] font-poppins font-bold uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt size={14} className="text-[#14B8A6]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegClock size={14} className="text-[#F59E0B]" />
                    {post.readTime} Min Read
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-cormorant italic font-bold text-[#0F172A] dark:text-white mb-6 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                  {post.title}
                </h3>

                <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] font-poppins font-black text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[11px] font-poppins font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                      {post.author}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <motion.button 
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#0F172A] dark:text-white hover:bg-[#0EA5E9] hover:text-white transition-all"
                    >
                      <FaArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
