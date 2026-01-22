import ContactForm from "../components/ui/ContactForm";
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from "react-icons/md";

const Contact = () => {
  return (
    <section className="min-h-screen grid md:grid-cols-2 bg-gray-50 dark:bg-[#121212] transition-colors duration-300" id="contact">
      
      {/* Left Side: Form */}
      <div className="p-8 md:p-20 flex flex-col justify-center order-2 md:order-1">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Contact Us</span>
        {/* Light Mode Fix: لون النص بقى slate-900 (أسود هادي) في الفاتح */}
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Ready to transform your home? Fill out the form below and our smart home experts will get back to you within 24 hours.
        </p>
        
        <ContactForm />
      </div>

      {/* Right Side: Floating Info Cards (بديل الموبايل) */}
      <div className="relative h-125 md:h-auto bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden flex items-center justify-center order-1 md:order-2 group transition-colors duration-300 border-b md:border-b-0 md:border-l border-gray-200 dark:border-white/5">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(#06f9f9_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        </div>
        
        {/* Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Floating Cards Container */}
        <div className="relative z-10 flex flex-col gap-6 w-full max-w-md px-6">
            
            {/* Card 1: Address */}
            <div className="flex items-center gap-5 p-5 bg-white dark:bg-[#181818] rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 animate-float">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MdLocationOn className="text-2xl" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Our Office</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fifth Settlement, New Cairo, Egypt</p>
                </div>
            </div>

            {/* Card 2: Phone (Delay Animation) */}
            <div className="flex items-center gap-5 p-5 bg-white dark:bg-[#181818] rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 animate-float [animation-delay:1s]">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                    <MdPhone className="text-2xl" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Call Us</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">+20 106 433 4334</p>
                </div>
            </div>

            {/* Card 3: Email (Delay Animation) */}
            <div className="flex items-center gap-5 p-5 bg-white dark:bg-[#181818] rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 animate-float [animation-delay:2s]">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <MdEmail className="text-2xl" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Email Us</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">info@beyout-smart.com</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;