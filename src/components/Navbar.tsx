import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Drinks', path: '/drinks' },
    { name: 'Our Story', path: '/about' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 py-4 shadow-sm backdrop-blur-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center space-x-2">
            <span className={`text-2xl font-black uppercase tracking-tighter transition-colors ${
              scrolled ? 'text-brand-black' : 'text-brand-black'
            }`}>
              Asoaden <span className="text-brand-red">Azuka</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-brand-red ${
                  location.pathname === link.path ? 'text-brand-red' : 'text-brand-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="flex items-center space-x-2 rounded-full bg-brand-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95">
              <span>Buy Now</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-brand-black">
              <ShoppingBag size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-white md:hidden"
      >
        <div className="flex flex-col space-y-4 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-brand-black hover:text-brand-red"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full rounded-full bg-brand-black py-4 text-sm font-bold uppercase tracking-widest text-white">
            Shop Collection
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
