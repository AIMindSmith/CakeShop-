import { motion } from 'motion/react';
import { Star, Clock, ShieldCheck, Heart, ChefHat, Sparkles } from 'lucide-react';

const features = [
  { icon: ChefHat, title: 'Fresh Ingredients', desc: 'Baked daily with premium ingredients' },
  { icon: Clock, title: 'Same Day Orders', desc: 'Quick turnaround for your celebrations' },
  { icon: Star, title: 'Premium Quality', desc: 'Uncompromising taste and texture' },
  { icon: ShieldCheck, title: 'Hygienic Preparation', desc: 'Strict cleanliness in our kitchen' },
  { icon: Sparkles, title: 'Customized Cakes', desc: 'Designed exactly how you imagine' },
  { icon: Heart, title: 'Loved By Locals', desc: 'Pune\'s trusted choice for desserts' },
];

export default function Features() {
  return (
    <section className="py-24 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.2em] uppercase text-rose font-bold mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-choco">Our Promise of Excellence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose/10 text-rose flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose group-hover:text-white transition-all duration-300">
                <feature.icon strokeWidth={1.5} size={28} />
              </div>
              <h4 className="text-xl font-serif font-semibold text-choco mb-3">{feature.title}</h4>
              <p className="text-choco-light font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
