/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Zomato from './components/Zomato';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased selection:bg-rose selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Reviews />
      <Zomato />
      <Contact />
      <Footer />
    </div>
  );
}
