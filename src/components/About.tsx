import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-rose/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965&auto=format&fit=crop"
                alt="Chef decorating a cake"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 md:p-8 rounded-3xl max-w-[240px]"
            >
              <div className="text-4xl font-serif text-rose font-bold mb-2">100%</div>
              <div className="text-choco font-medium leading-tight">Fresh & Handmade every single day.</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-rose font-bold mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-choco leading-[1.2] mb-6">
              Baking happiness <br />
              <span className="italic font-light">for Pune</span>
            </h3>
            <p className="text-lg text-choco-light/80 font-light leading-relaxed mb-8">
              CakeStory Desserts has become a favorite destination for cake lovers in Pune with delicious custom cakes, desserts, shakes, and bakery treats.
            </p>
            <p className="text-lg text-choco-light/80 font-light leading-relaxed mb-8">
              We believe in the magic of fresh ingredients, handmade perfection, and quality that speaks for itself. Whether it's a grand birthday celebration or a midnight craving, our creations are crafted to bring joy to your special moments.
            </p>
            
            <div className="flex items-center gap-6 pt-4 border-t border-choco/10">
              <div className="flex -space-x-4">
                 {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i * 10}`}
                    alt="Customer"
                    className="w-12 h-12 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-choco">Loved by locals</div>
                <div className="text-xs text-choco-light mt-1">Join our happy customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
