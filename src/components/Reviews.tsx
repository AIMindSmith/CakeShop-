import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: "Vasudev Kumawat",
    text: "Mawa cake was amazing — truly a delightful experience! The owner made our midnight visit extra special with delicious complimentary cold coffee. Great hospitality and unforgettable taste. Highly recommended!",
  },
  {
    name: "Srinivas MAP",
    text: "Had a wonderful experience with this cake shop. The cake was absolutely delicious, fresh, and beautifully designed. The quality of ingredients and attention to detail were impressive. The service was prompt and courteous, and the overall experience exceeded my expectations.",
  },
  {
    name: "Kalyani Wagh",
    text: "Soft sponge, rich cream, and amazing flavor. One of the best cakes I’ve had. Highly recommended for birthdays and special occasions!",
  },
  {
    name: "Priya Sharma",
    text: "The designer cake for my daughter's first birthday was flawless. Tasted as good as it looked. CakeStory Desserts is now my go-to bakery in Pune.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Their fresh fruit cake is out of this world! Perfect balance of sweetness. The delivery was right on time despite the rain.",
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-choco text-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cream rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Quote className="mx-auto text-rose mb-8 w-16 h-16 opacity-50" />
        
        <div className="h-[250px] sm:h-[200px] relative flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light leading-relaxed mb-8 italic">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="text-rose font-bold uppercase tracking-widest text-sm mb-1">
                  {reviews[currentIndex].name}
                </div>
                <div className="flex gap-1 text-rose/80">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-rose w-8' : 'bg-cream/30 hover:bg-cream/60'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
