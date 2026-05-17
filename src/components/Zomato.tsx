import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function Zomato() {
  return (
    <section className="py-24 bg-cream-dark border-t border-choco/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl shadow-choco/5 relative overflow-hidden"
        >
          {/* Zomato red decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E23744]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Zomato_Logo.svg" 
            alt="Zomato" 
            className="h-10 mx-auto mb-8 relative z-10" 
          />
          <h3 className="text-3xl md:text-4xl font-serif text-choco mb-4 relative z-10">
            Craving dessert right now?
          </h3>
          <p className="text-choco-light/80 text-lg mb-10 max-w-lg mx-auto relative z-10">
            Available on Zomato for online ordering. Get your favorite cakes and treats delivered fresh to your doorstep in minutes.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#E23744] text-white px-8 py-4 rounded-full font-medium hover:bg-[#c92e3a] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#E23744]/30 relative z-10"
          >
            Order on Zomato
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
