import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, Zap, Leaf, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { drinks } from '../data/drinks';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-hidden"
    >
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center pt-20">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/african-vibe/1920/1080?blur=4" 
            className="h-full w-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div variants={itemVariants} className="inline-block rounded-full bg-brand-red/10 px-4 py-1.5 mb-8">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
               AUTHENTIC • PREMIUM • VIBRANT
             </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="mb-6 mx-auto max-w-5xl text-7xl font-black uppercase leading-[1.05] tracking-tighter md:text-8xl lg:text-9xl"
          >
            Taste the Spirit <br />
            <span className="text-brand-red">of the Continent</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mb-10 mx-auto max-w-2xl text-lg font-medium leading-relaxed text-gray-600 md:text-xl"
          >
            Asoaden Azuka: Premium, culturally inspired beverages crafted for the bold, the vibrant, and the authentic. Deeply rooted in African identity with global appeal.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link 
              to="/drinks" 
              className="group flex items-center space-x-3 rounded-full bg-brand-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-red hover:shadow-xl hover:shadow-brand-red/20"
            >
              <span>Explore Collection</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/wholesale" 
              className="rounded-full border-2 border-brand-black px-10 py-[1.125rem] text-sm font-bold uppercase tracking-widest transition-all hover:bg-brand-black hover:text-white"
            >
              Wholesale Inquiry
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-20 top-1/4 h-80 w-80 rounded-full border border-brand-red/10 border-dashed opacity-50"
        />
      </section>

      {/* SOCIAL PROOF / AS SEEN IN */}
      <section className="border-y border-gray-100 py-16 bg-white">
        <div className="container mx-auto px-6">
          <p className="mb-10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Trusted By Premium Outlets</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-24">
            <div className="text-2xl font-bold italic tracking-tighter">VOGUE AFRICA</div>
            <div className="text-2xl font-bold tracking-widest">FORBES</div>
            <div className="text-3xl font-black">GQ</div>
            <div className="text-2xl font-serif font-bold">The Guardian</div>
            <div className="text-2xl font-black uppercase tracking-tighter">TASTE</div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-end justify-between md:flex-row">
            <div className="max-w-xl text-left">
              <h2 className="mb-6 text-5xl font-black uppercase tracking-tighter md:text-6xl">
                Our Signature <br /> <span className="text-brand-red">Infusions</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium">From the depth of the forest to the expanse of the savannah, our ingredients are sustainably sourced and masterfully blended.</p>
            </div>
            <Link to="/drinks" className="mt-8 flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-red hover:underline md:mt-0">
               <span>View All Flavors</span>
               <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {drinks.slice(0, 3).map((drink, i) => (
              <motion.div
                key={drink.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard drink={drink} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY TEASER */}
      <section className="relative overflow-hidden py-32 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <motion.div 
                whileInView={{ rotate: -3 }}
                className="aspect-square overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <img 
                  src="https://picsum.photos/seed/african-culture/1000/1000" 
                  alt="Asoaden Azuka Cultural Connection"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 hidden h-64 w-64 rounded-full bg-brand-red p-12 text-white shadow-2xl lg:flex items-center justify-center text-center">
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Crafting Authenticity Since 2021</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-red">The Asoaden Story</h4>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight md:text-6xl">
                Rooted in Tradition, <br /> Crafted for the Future.
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Asoaden Azuka was born from a desire to celebrate the rich tapestry of African botanical heritage. We don't just sell drinks; we share stories of resilience, vibrancy, and the natural abundance of our continent. Every sip is a tribute to the ancestors and a toast to the global citizen.
              </p>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center space-x-3 rounded-full bg-brand-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-red"
                >
                  <span>Learn Our Why</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-20 text-5xl font-black uppercase tracking-tighter md:text-6xl">Why Choose <span className="text-brand-red">Asoaden</span></h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Zap className="text-brand-red" size={32} />, title: 'Natural Energy', text: 'No artificial stimulants. Pure botanical power.' },
              { icon: <Leaf className="text-brand-red" size={32} />, title: 'Ethically Sourced', text: 'Supporting local farmers across the continent.' },
              { icon: <ShieldCheck className="text-brand-red" size={32} />, title: 'Premium Quality', text: 'Small batch production for maximum potency.' },
              { icon: <Globe className="text-brand-red" size={32} />, title: 'Global Appeal', text: 'Authentic flavors, world-class branding.' },
            ].map((benefit, i) => (
              <motion.div 
                key={benefit.title}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-8 rounded-3xl bg-gray-50 transition-colors hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">{benefit.icon}</div>
                <h4 className="mb-4 text-xl font-bold uppercase tracking-tight">{benefit.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Quote size={60} className="mx-auto mb-12 text-brand-red opacity-50" />
            <h2 className="mb-12 text-3xl font-medium italic leading-relaxed md:text-4xl lg:text-5xl">
              "Finally, a brand that captures the sophistication of our drinks without diluting the soul. Asoaden Azuka is the new standard for premium beverages."
            </h2>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-brand-red p-0.5">
                 <img src="https://picsum.photos/seed/user-1/64/64" alt="Testimonial" className="h-full w-full rounded-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest">Nneka Olatunji</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 underline decoration-brand-red">Lifestyle Curator & Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="relative overflow-hidden bg-brand-red py-24 text-white">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter md:text-7xl">Join the Vibrant <br /> Movement</h2>
          <p className="mb-10 text-xl font-medium opacity-80">Be part of our global journey as we redefine refreshment.</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/wholesale" className="w-full rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-brand-red transition-transform hover:scale-105 sm:w-auto">
              Partner With Us
            </Link>
            <Link to="/drinks" className="w-full rounded-full border-2 border-white px-10 py-[1.125rem] text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105 sm:w-auto">
              Shop Now
            </Link>
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-brand-cream/10 blur-3xl" />
      </section>
    </motion.div>
  );
}
