import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, PackageCheck } from 'lucide-react';

export default function Wholesale() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="mb-24 text-center">
          <motion.h4 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-brand-red"
          >
            B2B & Distribution
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-6xl font-black uppercase tracking-tighter md:text-8xl"
          >
            Partner <span className="text-brand-red">With Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-gray-600"
          >
            Bring the vibrant spirit of African wellness to your customers. Join our global network of prestige retailers, high-end bars, and boutique lifestyle outlets.
          </motion.p>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <TrendingUp size={32} />, title: 'High Margins', text: 'Premium positioning ensures healthy returns for our partners.' },
            { icon: <Users size={32} />, title: 'Marketing Support', text: 'Access to high-fidelity brand assets and event collaborations.' },
            { icon: <PackageCheck size={32} />, title: 'Reliable Supply', text: 'Streamlined logistics and consistent batch quality.' },
            { icon: <CheckCircle2 size={32} />, title: 'Unique Product', text: 'Differentiate your shelf with authentic African flavors.' },
          ].map((benefit, i) => (
            <div key={benefit.title} className="rounded-3xl bg-gray-50 p-10 text-center transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex justify-center text-brand-red">{benefit.icon}</div>
              <h4 className="mb-4 text-lg font-bold uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-sm text-gray-500">{benefit.text}</p>
            </div>
          ))}
        </section>

        {/* Form Section */}
        <section className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">Ready to <br /> Stock Asoaden?</h2>
            <p className="text-lg text-gray-600">Tell us a bit about your business and our distribution team will be in touch within 24-48 hours.</p>
            <div className="space-y-4 pt-4 border-l-2 border-brand-red pl-6">
              <p className="text-sm font-bold uppercase tracking-widest">Target Partners:</p>
              <ul className="grid grid-cols-2 gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <li>• Luxury Hotels</li>
                <li>• Organic Grocers</li>
                <li>• Airport Lounges</li>
                <li>• Wellness Spas</li>
                <li>• Boutique Cafes</li>
                <li>• Corporate HQs</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-12 shadow-2xl shadow-brand-red/10 border border-gray-100">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-red focus:outline-none transition-colors" placeholder="Kofi Mensah" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Business Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-red focus:outline-none transition-colors" placeholder="Vibrant Cafe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-red focus:outline-none transition-colors" placeholder="kofi@vibrant.co" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Business Type</label>
                <select className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-red focus:outline-none transition-colors bg-white">
                  <option>Select Type</option>
                  <option>Retailer</option>
                  <option>Distributor</option>
                  <option>Hospitality</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-100 py-3 focus:border-brand-red focus:outline-none transition-colors resize-none" placeholder="Tell us about your distribution needs..."></textarea>
              </div>
              <button type="submit" className="w-full rounded-full bg-brand-black py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-red hover:scale-[1.02] transform">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
