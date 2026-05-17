import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cakes', href: '#menu' },
    { name: 'Desserts', href: '#menu' },
    { name: 'Bakery', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-choco tracking-tight">
          CakeStory<span className="text-rose">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase text-choco hover:text-rose transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="tel:07082669708"
            className="flex items-center gap-2 bg-rose text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-hover transition-colors shadow-lg shadow-rose/20"
          >
            <Phone size={16} />
            ORDER NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-choco"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/20 mt-4 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-choco hover:text-rose transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:07082669708"
                className="flex items-center justify-center gap-2 bg-rose text-white px-6 py-3 rounded-full text-sm font-medium mt-4"
              >
                <Phone size={16} />
                CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
