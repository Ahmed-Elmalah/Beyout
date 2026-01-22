import { MdFormatQuote } from "react-icons/md";
import GlassPanel from "./GlassPanel";

const ReviewCard = ({ name, role, image, review }) => {
  return (
    <GlassPanel className="p-8 relative">
      <MdFormatQuote className="text-6xl text-gray-200 dark:text-white/5 absolute top-4 right-4" />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-slate-900 dark:text-white font-bold">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic font-body">
        "{review}"
      </p>
    </GlassPanel>
  );
};

export default ReviewCard;