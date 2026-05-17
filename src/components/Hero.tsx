import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2849&auto=format&fit=crop"
          alt="Premium Chocolate Cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-choco/90 md:from-choco/80 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:w-2/3 lg:w-1/2 md:mr-auto mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-rose tracking-[0.2em] uppercase text-xs sm:text-sm font-bold mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white">
            Premium Bakery in Pune
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-6">
            Fresh Cakes <br />
            <span className="italic font-light text-cream-dark">Crafted For Every</span> <br />
            Celebration
          </h1>
          <p className="text-lg md:text-xl text-cream-dark/90 font-light mb-10 max-w-lg leading-relaxed">
            Premium cakes, desserts, shakes & bakery delights made fresh every day with the finest ingredients to sweeten your memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="group flex items-center justify-center gap-2 bg-rose text-white px-8 py-4 rounded-full font-medium hover:bg-rose-hover transition-all duration-300 shadow-lg shadow-rose/30"
            >
              Explore Cakes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:07082669708"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white hover:text-choco transition-all duration-300"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
