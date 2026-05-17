import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-choco text-cream-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="text-3xl font-serif font-bold text-cream tracking-tight inline-block mb-4">
              CakeStory<span className="text-rose">.</span>
            </a>
            <p className="text-cream/70 font-light leading-relaxed max-w-sm mb-6">
              Premium cakes, desserts, shakes & bakery delights made fresh every day in Pune. Your sweet moments deserve the best.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-cream/70 hover:text-rose transition-colors">Home</a></li>
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Cakes</a></li>
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Desserts</a></li>
              <li><a href="#reviews" className="text-cream/70 hover:text-rose transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Birthday Cakes</a></li>
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Designer Cakes</a></li>
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Pastries</a></li>
              <li><a href="#menu" className="text-cream/70 hover:text-rose transition-colors">Beverages</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-cream/50">
            &copy; {new Date().getFullYear()} CakeStory Desserts, Pune. All rights reserved.
          </p>
          <div className="text-sm font-light text-cream/50">
            Designed with love for dessert lovers.
          </div>
        </div>
      </div>
    </footer>
  );
}
