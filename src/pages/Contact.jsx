import PageTransition from '../components/layout/PageTransition';
import ContactForm from '../components/contact/ContactForm';
import FAQAccordion from '../components/contact/FAQAccordion';
import SupportCard from '../components/contact/SupportCard';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#F8FAFC] dark:bg-[#020617] overflow-x-hidden">
        <div className="w-full pt-28 md:pt-36 lg:pt-40 4xl:pt-56 px-4 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full mb-20">
            <SupportCard 
              icon={Phone} 
              title="Emergency" 
              info="+1 (800) 555-0199" 
              subInfo="24/7 Priority Line" 
              variant="primary" 
            />
            <SupportCard 
              icon={Mail} 
              title="Email Us" 
              info="care@vitacare.com" 
              subInfo="Response within 24h" 
              variant="secondary" 
            />
            <SupportCard 
              icon={MapPin} 
              title="Visit Us" 
              info="123 Health City, NY" 
              subInfo="Main Trauma Center" 
              variant="accent" 
            />
          </div>
        </div>
        <ContactForm />
        <FAQAccordion />
      </div>
    </PageTransition>
  );
};

export default Contact;
