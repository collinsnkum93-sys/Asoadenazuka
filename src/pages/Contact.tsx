import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-brand-red"
          >
            Connect With Us
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-6xl font-black uppercase tracking-tighter md:text-8xl"
          >
            Stay <span className="text-brand-red">Vibrant</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg font-medium text-gray-600"
          >
            Questions, feedback, or just want to share your Asoaden moment? We’d love to hear from you.
          </motion.p>
        </header>

        <div className="grid gap-16 lg:grid-cols-3">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="mb-8 text-2xl font-black uppercase tracking-tight">Reach Out</h3>
              <ul className="space-y-8">
                <li className="flex items-start space-x-4">
                  <div className="rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Us</p>
                    <p className="font-bold text-brand-black">hello@asoaden-azuka.africa</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Call Us</p>
                    <p className="font-bold text-brand-black">+233 50 123 4567</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="rounded-2xl bg-brand-red/10 p-3 text-brand-red">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Our Hub</p>
                    <p className="font-bold text-brand-black">123 Vibrant Way, <br /> Accra, Ghana</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-black uppercase tracking-tight">Follow the Journey</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram size={20} />, label: 'Instagram' },
                  { icon: <Facebook size={20} />, label: 'Facebook' },
                  { icon: <Twitter size={20} />, label: 'Twitter' },
                ].map((social) => (
                  <button key={social.label} className="rounded-xl border border-gray-100 p-4 transition-all hover:bg-brand-red hover:text-white hover:shadow-lg hover:shadow-brand-red/20">
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-[3rem] bg-gray-50 p-12 lg:p-20">
             <form className="grid gap-10 md:grid-cols-2">
               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                 <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-red focus:outline-none transition-colors font-medium" placeholder="Adwoa Benson" />
               </div>
               <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                 <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-red focus:outline-none transition-colors font-medium" placeholder="adwoa@culture.com" />
               </div>
               <div className="md:col-span-2 space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                 <select className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-red focus:outline-none transition-colors font-medium">
                   <option>General Inquiry</option>
                   <option>Wholesale Question</option>
                   <option>Feedback</option>
                   <option>Event Collaboration</option>
                 </select>
               </div>
               <div className="md:col-span-2 space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                 <textarea rows={5} className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-brand-red focus:outline-none transition-colors font-medium resize-none" placeholder="How can we help?"></textarea>
               </div>
               <div className="md:col-span-2">
                 <button className="w-full rounded-full bg-brand-black py-6 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-red hover:shadow-2xl hover:shadow-brand-red/20">
                    Send Message
                 </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
