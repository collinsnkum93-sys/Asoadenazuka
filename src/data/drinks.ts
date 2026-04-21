export interface Drink {
  id: string;
  name: string;
  tagline: string;
  description: string;
  flavor: string;
  ingredients: string[];
  benefits: string[];
  price: string;
  color: string;
  image: string;
}

export const drinks: Drink[] = [
  {
    id: 'hibiscus-glow',
    name: 'Hibiscus Glow',
    tagline: 'Radiant Vitality',
    description: 'A deep, ruby-red elixir infused with wild African hibiscus flowers and a hint of ginger. Naturally tart, subtly sweet, and entirely refreshing.',
    flavor: 'Tangy, floral, with a warm ginger finish.',
    ingredients: ['Dried Hibiscus Sabdariffa', 'Fresh Ginger Root', 'Raw Cane Sugar', 'Filtered Water'],
    benefits: ['High in Antioxidants', 'Aids Digestion', 'Natural Energy Boost'],
    price: '$4.99',
    color: '#B23B1E',
    image: 'https://picsum.photos/seed/hibiscus-drink/800/1000'
  },
  {
    id: 'baobab-burst',
    name: 'Baobab Burst',
    tagline: 'Ancient Energy',
    description: 'The superfood of the savannah. A creamy, citrusy blend made from the fruit of the "Tree of Life." Packed with electrolytes and vitamin C.',
    flavor: 'Creamy citrus, reminiscent of lemon and pear.',
    ingredients: ['Baobab Fruit Powder', 'Organic Honey', 'Fresh Lime Juice', 'Filtered Water'],
    benefits: ['Vitamin C Rich', 'Hydrating Electrolytes', 'Immune Support'],
    price: '$5.49',
    color: '#E9DDC1',
    image: 'https://picsum.photos/seed/baobab-drink/800/1000'
  },
  {
    id: 'tamarind-pulse',
    name: 'Tamarind Pulse',
    tagline: 'Zesty Awakening',
    description: 'A bold, sophisticated drink that balances the unique sharpness of tamarind with a touch of vanilla and cloves. For those who crave complexity.',
    flavor: 'Sweet and sour, earthy, with spiced undertones.',
    ingredients: ['Tamarind Pods', 'Vanilla Extract', 'Whole Cloves', 'Filtered Water'],
    benefits: ['Natural Detoxifier', 'Anti-inflammatory', 'Heart Healthy'],
    price: '$4.99',
    color: '#2D4F1E',
    image: 'https://picsum.photos/seed/tamarind-drink/800/1000'
  },
  {
    id: 'moringa-zen',
    name: 'Moringa Zen',
    tagline: 'Calm Focus',
    description: 'Lush green moringa leaves blended with refreshing mint and a kiss of honey. A clean, crisp beverage for mindful moments.',
    flavor: 'Earthy, grassy notes with a cooling mint finish.',
    ingredients: ['Moringa Oleifera', 'Peppermint leaves', 'Lemon Grass', 'Filtered Water'],
    benefits: ['Nutrient Dense', 'Focus Enhancing', 'Stress Relief'],
    price: '$5.25',
    color: '#3E5C31',
    image: 'https://picsum.photos/seed/moringa-drink/800/1000'
  }
];
