import { SiGooglehome, SiAmazonalexa, SiApple, SiSmartthings, SiZigbee } from "react-icons/si";

const brands = [
  { icon: SiGooglehome, name: "Google Home" },
  { icon: SiAmazonalexa, name: "Alexa" },
  { icon: SiSmartthings, name: "Tuya Smart" },
  { icon: SiApple, name: "HomeKit" },
  { icon: SiZigbee, name: "Zigbee" },
];

const Partners = () => {
  return (
    <section className="py-10 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium tracking-widest uppercase mb-8">
          Seamless Integration With
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((Brand, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white group cursor-default">
              <Brand.icon className="text-2xl group-hover:text-primary transition-colors" />
              <span>{Brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;