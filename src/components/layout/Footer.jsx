import { MdSmartToy } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const social = [
    {icon : FaFacebookF , link : "https://www.facebook.com/share/17DAfh4vXh/?mibextid=wwXIfr"} ,
    {icon : FaInstagram, link: "https://www.instagram.com/beyouttech?igsh=Z3ZhdG0yajdhZGFo&utm_source=ig_contact_invite"} ,
    {icon : FaTiktok, link:"https://www.tiktok.com/@beyout7?_r=1&_t=ZS-92LmbXPitG6" } ,
  ]
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MdSmartToy className="text-primary text-3xl" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Beyout</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {social.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group">
                <item.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-body">© 2026 Beyout Smart Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-primary text-sm font-body transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm font-body transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;