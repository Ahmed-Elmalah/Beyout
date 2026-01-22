import { MdThermostat, MdLightbulb, MdPlayCircle } from "react-icons/md";
import Button from "../components/ui/Button";
import GlassPanel from "../components/ui/GlassPanel";
import heroBgImage from '../assets/heroIMG.png'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#121212]">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgImage}
          alt="Smart Villa Background" 
          className="w-full h-full object-cover" 
        />

       
        <div className="absolute inset-0 dark:bg-black/80 bg-white/20" />
      </div>


      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Future Living</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Transform Your Home into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">Living Intelligence</span>.
          </h1>
          
          {/* والنص الفرعي رمادي فاتح */}
          <p className="text-lg text-gray-300 max-w-lg leading-relaxed font-body">
            Experience the perfect blend of luxury, security, and control with Beyout's advanced automation systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="py-4 px-8">Get Your Free Consultation</Button>
            {/* تعديل ألوان زرار الـ Outline عشان يليق عالخلفية الغامقة */}
            <Button variant="outline" className="py-4 px-8 text-white border-white/20 hover:bg-white/10">
              <MdPlayCircle className="text-xl group-hover:text-primary" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Card Animation */}
        <div className="hidden md:flex justify-end relative">
          <GlassPanel className="p-6 max-w-sm w-full transform translate-y-12 animate-float shadow-2xl">
            {/* Room Card 1 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <MdThermostat className="text-primary text-xl" />
                </div>
                <div>
                  {/* تعديل الألوان هنا لتناسب الخلفية الغامقة */}
                  <p className="text-xs text-gray-400 uppercase">Living Room</p>
                  <p className="text-white font-bold">22°C • Cool</p>
                </div>
              </div>
              <div className="h-8 w-12 bg-primary/20 rounded-full p-1 relative cursor-pointer">
                <div className="h-6 w-6 bg-primary rounded-full absolute right-1 shadow-sm" />
              </div>
            </div>
            
            {/* Room Card 2 */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <MdLightbulb className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase">Mood Lighting</p>
                  <p className="text-white font-bold">Evening Relax</p>
                </div>
              </div>
              <div className="h-8 w-12 bg-purple-500/20 rounded-full p-1 relative cursor-pointer">
                <div className="h-6 w-6 bg-purple-500 rounded-full absolute right-1 shadow-sm" />
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
};
export default Hero;