import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const [filter, setFilter] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const categories = ['All', 'Food', 'Interior', 'Events', 'Kitchen'];

  const images = [
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/hero-bg-f007554a-1782825880947.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/restaurant-interior-5a8adc19-1782825881561.webp', category: 'Interior' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/chef-action-7c4cf6ea-1782825881640.webp', category: 'Kitchen' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/appetizers-ce20d41f-1782825880342.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/main-course-steak-d140f93a-1782825881588.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/pasta-dish-586f2457-1782825881360.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/seafood-platter-3f17633e-1782825880883.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/dessert-luxury-04b12821-1782825880383.webp', category: 'Food' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/events-gallery-98d27180-1782825882094.webp', category: 'Events' },
    { url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/coffee-art-ba773152-1782825882423.webp', category: 'Events' },
    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', category: 'Interior' },
    { url: 'https://images.unsplash.com/photo-1574936145840-28808d67a0fc?auto=format&fit=crop&q=80&w=800', category: 'Kitchen' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="flex flex-col">
      <section className="bg-muted/50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Visual Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-8"
          >
            Our Gallery
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'default' : 'outline'}
                className="rounded-full px-8"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={`Gallery ${img.category}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-md text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
