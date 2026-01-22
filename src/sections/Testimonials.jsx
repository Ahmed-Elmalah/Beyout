import ReviewCard from "../components/ui/ReviewCard";

const reviews = [
  {
    name: "Sarah M.",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    review: "Beyout completely transformed my villa. The lighting scenes are incredible for my work, and the security integration makes me feel safe when I travel."
  },
  {
    name: "Ahmed K.",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    review: "The level of control I have over my home's energy consumption is unmatched. It feels like living in the future. Highly recommended."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 border-y border-white/5 transition-colors duration-300 dark:bg-[#0e0e0e] bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Client Experiences</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;