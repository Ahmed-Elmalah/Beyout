import Button from "./Button";

const ContactForm = () => {
  const inputClasses = "w-full bg-gray-50 dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 dark:placeholder-gray-600";
  const labelClasses = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2";

  return (
    <form className="space-y-6">
      <div>
        <label className={labelClasses}>Full Name</label>
        <input type="text" placeholder="John Doe" className={inputClasses} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Phone</label>
          <input type="tel" placeholder="+20 100..." className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Unit Type</label>
          <select className={inputClasses}>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Office</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClasses}>Message</label>
        <textarea rows="4" placeholder="Tell us about your property..." className={inputClasses}></textarea>
      </div>
      <Button type="button" className="w-full mt-4">Request Consultation</Button>
    </form>
  );
};

export default ContactForm;