import { motion } from 'motion/react';
import { useState } from 'react';

import coldCoffeeImg from '../assets/images/cold_coffee_1778995809804.png';
import oreoShakeImg from '../assets/images/oreo_shake_1778995833592.png';

const categories = [
  'All',
  'Birthday Cakes',
  'Chocolate Cakes',
  'Anniversary Cakes',
  'Designer Cakes',
  'Pastries',
  'Desserts',
  'Bakery Items',
  'Shakes',
  'Beverages'
];

const products = [
  { id: 1, name: 'Royal Truffle', category: 'Chocolate Cakes', desc: 'Rich chocolate layers with smooth creamy frosting.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'Berry Delight', category: 'Birthday Cakes', desc: 'Fresh handcrafted cake perfect for birthdays.', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'Red Velvet Love', category: 'Anniversary Cakes', desc: 'Elegant layers of red velvet with cream cheese.', img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'Custom Floral', category: 'Designer Cakes', desc: 'Beautifully crafted with edible floral designs.', img: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'Hazelnut Crunch', category: 'Pastries', desc: 'Premium bakery dessert made with rich flavors.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'Classic Mawa', category: 'Bakery Items', desc: 'Traditional authentic mawa cake, softly baked.', img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, name: 'Thick Cold Coffee', category: 'Beverages', desc: 'Signature frothy cold coffee to chill your mood.', img: coldCoffeeImg },
  { id: 8, name: 'Oreo Thick Shake', category: 'Shakes', desc: 'Indulgent shake loaded with crushed cookies.', img: oreoShakeImg },
  { id: 9, name: 'Choco Lava Cup', category: 'Desserts', desc: 'Warm dessert with a molten chocolate center.', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs tracking-[0.2em] uppercase text-rose font-bold mb-3">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-choco mb-10">Artisan Masterpieces</h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-choco text-white shadow-md' 
                    : 'bg-cream-dark text-choco-light hover:bg-rose/10 hover:text-rose'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-choco/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 text-center">
                <div className="text-xs font-bold text-rose tracking-wider uppercase mb-2">{product.category}</div>
                <h4 className="text-xl font-serif font-semibold text-choco mb-2">{product.name}</h4>
                <p className="text-sm text-choco-light/80 font-light line-clamp-2">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
