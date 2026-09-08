import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, ChevronRight, BookOpen, Tag } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Medical', 'Wellness', 'Nutrition', 'Lifestyle', 'Technology'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Improve Your Heart Health Today',
      excerpt: 'Discover simple yet effective lifestyle changes that can significantly reduce your risk of heart disease and improve your overall well-being.',
      category: 'Medical',
      author: 'Dr. Sarah Johnson',
      date: 'Sep 05, 2026',
      readTime: '8 min',
      image: 'https://i.pinimg.com/1200x/ca/08/44/ca08447f5e61aa3facd2fd45ad2b5d7c.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Mental Wellness in the Modern Age',
      excerpt: 'Mental health is just as important as physical health. Learn how to navigate stress and anxiety in a fast-paced digital world.',
      category: 'Wellness',
      author: 'Dr. Emily Chen',
      date: 'Sep 03, 2026',
      readTime: '6 min',
      image: 'https://i.pinimg.com/736x/55/9d/2b/559d2b5f162463390a1101b98b8b0767.jpg'
    },
    {
      id: 3,
      title: 'The Future of Robotic Surgery: What to Expect',
      excerpt: 'How artificial intelligence and precision robotics are transforming the operating room and patient recovery times.',
      category: 'Technology',
      author: 'Dr. James Wilson',
      date: 'Aug 28, 2026',
      readTime: '12 min',
      image: 'https://i.pinimg.com/736x/b5/5b/9c/b55b9c44d970b1cc30afed13cc5c3bc0.jpg'
    },
    {
      id: 4,
      title: 'Nutrition Myths Debunked by Science',
      excerpt: 'Separating fact from fiction when it comes to your daily diet. Are superfoods really that super?',
      category: 'Nutrition',
      author: 'Dr. Robert Smith',
      date: 'Aug 25, 2026',
      readTime: '5 min',
      image: 'https://i.pinimg.com/736x/a8/50/df/a850dfcded2ca58c8ec82dfcb984c7ac.jpg'
    },
    {
      id: 5,
      title: 'Yoga for Chronic Back Pain Relief',
      excerpt: 'Specific poses and breathing techniques designed to strengthen your core and alleviate persistent spinal discomfort.',
      category: 'Lifestyle',
      author: 'Dr. Michael Ross',
      date: 'Aug 20, 2026',
      readTime: '7 min',
      image: 'https://i.pinimg.com/1200x/2d/4e/47/2d4e4717f85cc0552b2e46ec4522bddd.jpg'
    },
    {
      id: 6,
      title: 'The Importance of Regular Health Screenings',
      excerpt: 'Why early detection is your best defense against major health issues. A guide to essential tests by age.',
      category: 'Medical',
      author: 'Dr. Alice Vane',
      date: 'Aug 15, 2026',
      readTime: '10 min',
      image: 'https://i.pinimg.com/1200x/09/fd/a8/09fda847036d6a8b061be9a695c0f9e5.jpg'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] pt-28 md:pt-36 lg:pt-40 4xl:pt-56 pb-20 overflow-x-hidden text-left">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 4xl:px-64">
          
          <div className="mb-16">
            <span className="text-[#0EA5E9] font-poppins font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">VitaCare Journal</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl 4xl:text-[9rem] font-cormorant italic font-bold text-slate-900 dark:text-white leading-tight">
              Health & Wellness <span className="text-gradient">Blog</span>
            </h1>
          </div>

          {!loading && featuredPost && !searchQuery && activeCategory === 'All' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full mb-20 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#0F172A] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
                <div className="relative h-[300px] lg:h-auto overflow-hidden">
                  <img src={featuredPost.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                  <div className="absolute top-8 left-8">
                    <span className="px-6 py-2 bg-[#0EA5E9] text-white rounded-full text-[10px] font-poppins font-black uppercase tracking-widest shadow-lg">Featured</span>
                  </div>
                </div>
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-poppins font-black uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2 text-[#14B8A6]"><Tag size={14}/> {featuredPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-2"><Clock size={14}/> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl 4xl:text-7xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-poppins text-slate-500 dark:text-slate-400 text-base md:text-lg 4xl:text-3xl leading-relaxed mb-10">
                    {featuredPost.excerpt}
                  </p>
                  <button className="flex items-center gap-4 font-poppins font-black text-xs uppercase tracking-widest text-[#0EA5E9] group-hover:gap-6 transition-all">
                    Read Full Article <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-12 bg-white dark:bg-[#0F172A] p-4 sm:p-6 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 bg-slate-50 dark:bg-slate-900 rounded-2xl w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-8 py-3 rounded-xl font-poppins font-bold text-[11px] uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#0EA5E9] text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl font-poppins text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 sm:gap-10">
            <AnimatePresence mode="popLayout">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div key={i} className="h-[500px] bg-white dark:bg-[#0F172A] rounded-[3rem] animate-pulse border border-slate-100 dark:border-slate-800" />
                ))
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white dark:bg-[#0F172A] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-[#0EA5E9]/20 transition-all duration-500 flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl rounded-full text-[9px] font-poppins font-black uppercase tracking-widest text-[#0EA5E9] border border-slate-100 dark:border-slate-800 shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-[9px] font-poppins font-black uppercase tracking-widest text-slate-400 mb-6">
                        <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="flex items-center gap-1.5"><Clock size={12}/> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400"><User size={14}/></div>
                          <span className="text-[10px] font-poppins font-bold text-slate-600 dark:text-slate-300">{post.author}</span>
                        </div>
                        <button className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-32 text-center bg-white dark:bg-[#0F172A] rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
                  <BookOpen size={48} className="mx-auto text-slate-200 mb-4" />
                  <h3 className="text-2xl font-cormorant italic font-bold text-slate-900 dark:text-white">No Articles Found</h3>
                  <p className="text-slate-500">Try a different search term or category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-[#0EA5E9] rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-[#0EA5E9]/20"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-cormorant italic font-bold mb-6">Never Miss a Health Update</h2>
              <p className="font-poppins text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Subscribe to our weekly newsletter and get the latest medical news and wellness tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input type="email" placeholder="Your email address" className="flex-1 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 outline-none focus:bg-white/20 transition-all" />
                <button className="px-10 py-4 bg-white text-[#0EA5E9] rounded-2xl font-poppins font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Subscribe</button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 50 Q 25 0 50 50 T 100 50" stroke="white" fill="transparent" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
