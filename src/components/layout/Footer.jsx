import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../common/Logo';

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaYoutube, href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '#' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Health Blog', path: '/blog' },
    { name: 'Book Appointment', path: '/appointment' },
    { name: 'Medical Reports', path: '/dashboard/reports' }
  ];

  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-[#E2E8F0] dark:border-[#334155] pt-20 pb-10">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo showTagline={true} />
            <p className="font-poppins text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Providing world-class healthcare services with expert doctors and modern technology. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-10 h-10 rounded-full bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center text-[#64748B] hover:text-[#0EA5E9] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-poppins text-[#64748B] dark:text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-6">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Online Chat', 'Emergency', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="font-poppins text-[#64748B] dark:text-[#94A3B8] hover:text-[#0EA5E9] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-cormorant italic font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#64748B] dark:text-[#94A3B8]">
                <MapPin size={20} className="text-[#0EA5E9] shrink-0" />
                <span className="font-poppins">123 Medical Drive, Health City, HC 45678</span>
              </li>
              <li className="flex items-center gap-3 text-[#64748B] dark:text-[#94A3B8]">
                <Phone size={20} className="text-[#0EA5E9] shrink-0" />
                <span className="font-poppins">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3 text-[#64748B] dark:text-[#94A3B8]">
                <Mail size={20} className="text-[#0EA5E9] shrink-0" />
                <span className="font-poppins">support@vitacare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#E2E8F0] dark:border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-sm text-[#64748B] dark:text-[#94A3B8]">
            © 2026 VitaCare. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-poppins text-[#64748B] dark:text-[#94A3B8]">
            <Link to="#" className="hover:text-[#0EA5E9]">Terms of Service</Link>
            <Link to="#" className="hover:text-[#0EA5E9]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
