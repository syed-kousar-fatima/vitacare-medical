import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import SearchDoctors from '../components/home/SearchDoctors';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedDoctors from '../components/home/FeaturedDoctors';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import EmergencyCTA from '../components/home/EmergencyCTA';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <PageTransition>
      <div className="w-full overflow-hidden bg-white dark:bg-[#020617]">
        <Hero />
        <SearchDoctors />
        <StatsSection />
        <ServicesPreview />
        <FeaturedDoctors />
        <EmergencyCTA />
        <Testimonials />
        <BlogPreview />
        <Newsletter />
      </div>
    </PageTransition>
  );
};

export default Home;
