import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Drink } from '../data/drinks';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  drink: Drink;
}

export default function ProductCard({ drink }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-gray-50 transition-all hover:shadow-2xl hover:shadow-brand-red/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={drink.image} 
          alt={drink.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
            {drink.tagline}
          </span>
        </div>
      </div>

      <div className="flex flex-col p-8">
        <div className="mb-4 flex items-end justify-between">
          <h3 className="text-2xl font-black uppercase tracking-tight">{drink.name}</h3>
          <p className="text-sm font-bold text-brand-red">{drink.price}</p>
        </div>
        <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {drink.description}
        </p>
        <Link 
          to="/drinks" 
          className="flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-red"
        >
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
