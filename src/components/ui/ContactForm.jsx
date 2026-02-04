import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"; // 1. استدعاء التوست
import Button from "./Button";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // سيبنا دي عشان نقفل الزرار بس

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // نقفل الزرار

    const SERVICE_ID = "service_s1d0o7s";
    const TEMPLATE_ID = "template_jpjflzp";
    const PUBLIC_KEY = "br_EjtqhvnxpGdZXA";

    // 2. استخدام toast.promise
    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY),
      {
        loading: "Sending message...",
        success: () => {
          setLoading(false); // نفتح الزرار تاني
          form.current.reset(); // نفضي الفورم
          return "Message sent successfully!"; // رسالة النجاح
        },
        error: (err) => {
          setLoading(false);
          console.error(err);
          return "Something went wrong. Try again."; // رسالة الخطأ
        },
      },
    );
  };

  const inputClasses =
    "resize-none w-full bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 dark:placeholder-gray-600 shadow-sm";
  const labelClasses =
    "block text-xs font-bold text-gray-700 dark:text-gray-500 uppercase tracking-wider mb-2";

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 relative">
      <div>
        <label className={labelClasses}>Full Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="John Doe"
          required
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Phone</label>
          <input
            type="tel"
            name="user_phone"
            placeholder="+20 100..."
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Unit Type</label>
          <select name="unit_type" className={inputClasses}>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Office">Office</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your property..."
          required
          className={inputClasses}
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className={`w-full mt-4 justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Processing..." : "Request Consultation"}
      </Button>
    </form>
  );
};

export default ContactForm;
