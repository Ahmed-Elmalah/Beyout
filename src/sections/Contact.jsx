import ContactForm from "../components/ui/ContactForm";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Button from "../components/ui/Button"; // used in the visual part

const Contact = () => {
  return (
    <section className="min-h-screen grid md:grid-cols-2 bg-white dark:bg-[#121212] transition-colors duration-300" id="contact">
      
      {/* Left Side: Form */}
      <div className="p-8 md:p-20 flex flex-col justify-center order-2 md:order-1">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Start your journey to a smarter home today.</p>
        <ContactForm />
      </div>

      {/* Right Side: Social Visual */}
      <div className="relative h-[500px] md:h-auto bg-gray-100 dark:bg-[#0a0a0a] overflow-hidden flex items-center justify-center order-1 md:order-2 group transition-colors duration-300">
        <div className="absolute inset-0 z-0">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#121212] via-transparent to-white/50 dark:to-[#121212]/50 z-10" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-primary/10 dark:via-[#121212] dark:to-[#121212]" />
        </div>

        {/* Floating Animation Content */}
        <div className="relative z-20 flex flex-col items-center gap-8 animate-float">
            {/* Phone Mockup */}
            <div className="w-64 h-[500px] border-8 border-gray-800 dark:border-[#2a2a2a] rounded-[3rem] bg-white dark:bg-[#121212] relative shadow-2xl dark:shadow-primary/20 overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute top-0 w-32 h-6 bg-gray-800 dark:bg-[#2a2a2a] rounded-b-xl z-20"></div>
                <div className="text-center z-10 p-6">
                    <div className="w-20 h-20 bg-gradient-to-tr from-primary to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-2xl">B</div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-xl">Beyout Community</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Join 10k+ Smart Home Owners</p>
                    <div className="mt-6 flex gap-3 justify-center">
                         <Button variant="neon" className="!py-2 !px-4 text-xs rounded-full">Follow Us</Button>
                    </div>
                </div>
                {/* Abstract Background Image inside Phone */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
            </div>

            {/* Orbiting Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-gray-300 dark:border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#181818] p-3 rounded-full border border-gray-200 dark:border-white/10 text-blue-600 shadow-lg">
                    <FaFacebookF size={24} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-[#181818] p-3 rounded-full border border-gray-200 dark:border-white/10 text-pink-600 shadow-lg">
                    <FaTiktok size={24} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;