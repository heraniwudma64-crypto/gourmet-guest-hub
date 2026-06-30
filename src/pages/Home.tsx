import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MenuCard } from '../components/MenuCard';
import { MOCK_MENU } from '../data/menu';
import { ChevronRight, ArrowRight, Star, Quote } from 'lucide-react';

const Home = () => {
  const featuredDishes = MOCK_MENU.filter(item => item.isPopular).slice(0, 3);

  const testimonials = [
    {
      name: "Sophia Loren",
      role: "Food Critic",
      content: "Bella Vista offers an unparalleled dining experience. The attention to detail in every dish is simply magnificent.",
      stars: 5
    },
    {
      name: "Marcus Aurelius",
      role: "Regular Customer",
      content: "The best steak in the city. The atmosphere is elegant yet welcoming. Highly recommended for special occasions.",
      stars: 5
    },
    {
      name: "Elena Gilbert",
      role: "Lifestyle Blogger",
      content: "A visual and culinary feast. Every corner of the restaurant is photo-worthy, and the food tastes as good as it looks.",
      stars: 5
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/hero-bg-f007554a-1782825880947.webp"
            alt="Bella Vista Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Experience <span className="text-primary italic">Exceptional</span> Dining
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              Where tradition meets culinary innovation. Discover the art of fine Mediterranean cuisine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 text-lg h-14 w-full sm:w-auto" asChild>
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-14 w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20" asChild>
                <Link to="/reservations">Book a Table</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">A Journey of Taste and Tradition</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded in 1995, Bella Vista has been at the forefront of the city's culinary scene. Our journey began with a simple vision: to bring authentic Mediterranean flavors to your table with a modern twist.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Every ingredient is hand-picked from local organic farms, and every dish is a masterpiece crafted by our award-winning chefs. We believe that dining is not just about food—it's about creating memories.
            </p>
            <Button variant="link" className="p-0 text-primary group font-bold text-lg" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Discover More About Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/restaurant-interior-5a8adc19-1782825881561.webp"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl hidden lg:block">
              <span className="text-5xl font-serif font-bold block mb-1">28+</span>
              <span className="text-sm font-medium uppercase tracking-wider">Years of Culinary Excellence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Chef's Choice</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Featured Delicacies</h2>
            </div>
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/menu">Explore Full Menu <ChevronRight size={18} /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-10 rounded-3xl border border-border/50 relative"
              >
                <Quote className="absolute top-8 right-8 text-primary/10" size={60} />
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 relative z-10">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-xl">{t.name}</h4>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden bg-primary p-12 md:p-20 text-primary-foreground text-center">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"
                alt="Texture"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Join Our Exclusive Dinner Circle</h2>
              <p className="text-xl mb-10 text-primary-foreground/90 font-light">
                Subscribe to our newsletter and get <span className="font-bold">20% off</span> your first dining experience with us.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="rounded-full px-10 h-auto py-4 text-lg font-bold">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
