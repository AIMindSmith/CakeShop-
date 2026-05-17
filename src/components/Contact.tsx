import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs tracking-[0.2em] uppercase text-rose font-bold mb-4">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-choco mb-8">
              We'd love to see you
            </h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center shrink-0 text-rose">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-choco mb-1">CakeStory Desserts</h4>
                  <p className="text-choco-light font-light leading-relaxed">
                    Shop no.5, Swapnaship complex,<br />
                    Shewalewadi Rd, Manjri Bk,<br />
                    Pune, Maharashtra 412307
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center shrink-0 text-rose">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-choco mb-1">Opening Hours</h4>
                  <p className="text-choco-light font-light leading-relaxed">
                    Open daily<br />
                    9:00 AM to 12:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center shrink-0 text-rose">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-choco mb-1">Contact</h4>
                  <p className="text-choco-light font-light leading-relaxed text-lg">
                    070826 69708
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07082669708"
                className="flex items-center justify-center gap-2 bg-choco text-cream px-8 py-4 rounded-full font-medium hover:bg-choco-light transition-colors"
              >
                <Phone size={18} />
                Call Shop
              </a>
              <a
                href="https://wa.me/917082669708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] overflow-hidden shadow-2xl glass-card h-[450px] border-none"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30269.92161491162!2d73.9315328743164!3d18.4954235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d2855cfc13%3A0x1f259f03c4178117!2sCakeStory%20Desserts!5e0!3m2!1sen!2sin!4v1778994413540!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
