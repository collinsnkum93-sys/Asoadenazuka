import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <section className="mb-32">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-brand-red"
              >
                Our Origin Story
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-6xl font-black uppercase tracking-tighter md:text-8xl"
              >
                Rooted in <span className="text-brand-red">Culture</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium leading-relaxed text-gray-700"
              >
                Founded in 2021 by a group of cultural enthusiasts and nutritionists, Asoaden Azuka began with a single question: How can we share the vibrant wellness traditions of our ancestors with the modern world?
              </motion.p>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/founders/1200/800" 
                alt="Founders" 
                className="rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-brand-black p-8 text-white shadow-xl">
                 <p className="text-4xl font-black tracking-tighter uppercase">5+ <br /> <span className="text-xs font-bold tracking-[0.3em] text-brand-red">Regions</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-32 rounded-[3.5rem] bg-brand-black py-24 px-12 text-white">
          <div className="mx-auto max-w-4xl text-center">
             <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter md:text-6xl">The <span className="text-brand-red">Asoaden</span> Philosophy</h2>
             <div className="grid gap-12 md:grid-cols-3">
               <div className="space-y-4">
                 <div className="mx-auto h-px w-12 bg-brand-red" />
                 <h4 className="text-lg font-bold uppercase tracking-tight">Authenticity</h4>
                 <p className="text-sm text-gray-400">We never compromise on the purity of our ingredients or the depth of our heritage.</p>
               </div>
               <div className="space-y-4">
                 <div className="mx-auto h-px w-12 bg-brand-red" />
                 <h4 className="text-lg font-bold uppercase tracking-tight">Vitality</h4>
                 <p className="text-sm text-gray-400">Our drinks are designed to nourish the spirit as much as the body.</p>
               </div>
               <div className="space-y-4">
                 <div className="mx-auto h-px w-12 bg-brand-red" />
                 <h4 className="text-lg font-bold uppercase tracking-tight">Empowerment</h4>
                 <p className="text-sm text-gray-400">Building sustainable supply chains that uplift indigenous farming communities.</p>
               </div>
             </div>
          </div>
        </section>

        {/* Visual Storytelling */}
        <section className="grid gap-8 md:grid-cols-3">
          <img src="https://picsum.photos/seed/culture-1/800/1000" className="rounded-3xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          <div className="flex flex-col justify-center space-y-6 p-8">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Beyond the Bottle</h3>
            <p className="text-gray-600 font-medium">We collaborate with local artists, musicians, and designers to ensure that Asoaden Azuka isn't just a beverage brand, but a living cultural movement.</p>
          </div>
          <img src="https://picsum.photos/seed/culture-2/800/1000" className="rounded-3xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        </section>
      </div>
    </div>
  );
}
