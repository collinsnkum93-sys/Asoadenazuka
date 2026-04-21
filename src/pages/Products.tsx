import { motion } from 'motion/react';
import { drinks } from '../data/drinks';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-6xl font-black uppercase tracking-tighter md:text-8xl"
          >
            The <span className="text-brand-red">Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg font-medium text-gray-600"
          >
            Sustainably sourced botanicals, blended for modern vitality. Explore the vibrant flavors of the continent in every bottle.
          </motion.p>
        </header>

        {/* Filters Placeholder */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {['All Drinks', 'Energy', 'Wellness', 'Focus'].map((filter, i) => (
            <button 
              key={filter}
              className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                i === 0 ? 'bg-brand-black text-white' : 'bg-gray-100 text-brand-black hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard drink={drink} />
            </motion.div>
          ))}
        </div>

        {/* Nutritional Disclaimer */}
        <div className="mt-24 rounded-[2rem] bg-gray-50 p-12 text-center">
          <h4 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-brand-red">Nature's Integrity</h4>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-500">
            All our drinks are non-GMO, gluten-free, and formulated with raw botanical extracts. Due to the natural harvesting process, slight variations in color and flavor may occur — this is the mark of true authenticity.
          </p>
        </div>
      </div>
    </div>
  );
}
