import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Star, ChefHat } from 'lucide-react';
import { MOCK_MENU, CATEGORIES } from '../data/menu';
import { MenuCard } from '../components/MenuCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredItems = MOCK_MENU.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularItems = MOCK_MENU.filter(item => item.isPopular);
  const chefItems = MOCK_MENU.filter(item => item.isChefRecommendation);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-muted/50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Culinary Selection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-8"
          >
            Our Digital Menu
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative group"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
            <Input
              placeholder="Search for your favorite dish..."
              className="pl-12 h-14 rounded-full shadow-lg border-none bg-background text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories & Main Grid */}
      <section className="py-16 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            {/* Horizontal Categories */}
            <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-medium border",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                      : "bg-background text-foreground/70 border-border hover:border-primary/50 hover:text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Sections (only visible when 'All' is selected) */}
            {activeCategory === 'All' && !searchQuery && (
              <div className="space-y-16">
                {/* Popular Dishes */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold">Popular Choices</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                {/* Chef Recommendation */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <ChefHat size={24} />
                    </div>
                    <h2 className="font-serif text-3xl font-bold">Chef's Recommendations</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chefItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Main Menu Grid */}
            <div>
              {(activeCategory !== 'All' || searchQuery) && (
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-bold">
                    {activeCategory === 'All' ? 'Search Results' : activeCategory}
                    <span className="text-muted-foreground text-lg font-sans ml-4 font-normal">
                      ({filteredItems.length} items found)
                    </span>
                  </h2>
                </div>
              )}
              
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredItems.length === 0 && (
                <div className="text-center py-20 space-y-4">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                    <Search size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">No dishes found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
                  <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                    Show All Dishes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
