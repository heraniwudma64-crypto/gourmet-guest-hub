import * as React from 'react';
import { MenuItem } from '../types';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Leaf, Flame, Star } from 'lucide-react';
import { Badge } from './ui/badge';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.isPopular && (
            <Badge className="bg-primary text-primary-foreground border-none gap-1">
              <Star size={12} fill="currentColor" /> Popular
            </Badge>
          )}
          {item.isChefRecommendation && (
            <Badge className="bg-secondary text-secondary-foreground border-none gap-1">
              Chef's Choice
            </Badge>
          )}
        </div>

        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full font-bold text-primary border border-primary/20">
          ${item.price.toFixed(2)}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{item.name}</h3>
          <div className="flex gap-2">
            {item.isVegetarian && (
              <span title="Vegetarian"><Leaf size={18} className="text-green-500" /></span>
            )}
            {item.isSpicy && (
              <span title="Spicy"><Flame size={18} className="text-red-500" /></span>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
          {item.description}
        </p>
        <Button
          onClick={() => addToCart(item)}
          className="w-full rounded-full group/btn"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};
