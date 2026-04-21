import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black uppercase tracking-tighter">
              Asoaden <span className="text-brand-red">Azuka</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Premium, culturally inspired beverages crafted for the bold, the vibrant, and the authentic. Deeply rooted in African identity with global appeal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-brand-red"><Instagram size={20} /></a>
              <a href="#" className="transition-colors hover:text-brand-red"><Facebook size={20} /></a>
              <a href="#" className="transition-colors hover:text-brand-red"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links Col */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/drinks" className="transition-colors hover:text-brand-red">Our Collection</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-brand-red">Our Story</Link></li>
              <li><Link to="/wholesale" className="transition-colors hover:text-brand-red">Wholesale & Distribution</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-brand-red">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-red" />
                <span className="text-gray-400">123 Vibrant Way, Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-brand-red" />
                <span className="text-gray-400">+233 50 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-brand-red" />
                <span className="text-gray-400">hello@asoaden-azuka.africa</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Stay Vibrant</h4>
            <p className="text-sm text-gray-400">Join our community for exclusive drops and cultural stories.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <button className="bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-red/90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
            © {new Date().getFullYear()} Asoaden Azuka. All rights reserved. Crafted with Culture.
          </p>
        </div>
      </div>
    </footer>
  );
}
