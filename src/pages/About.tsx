import * as React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Utensils, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, label: "Awards Won", value: "15+" },
    { icon: <Heart className="w-8 h-8" />, label: "Happy Clients", value: "50k+" },
    { icon: <Utensils className="w-8 h-8" />, label: "Signature Dishes", value: "30+" },
    { icon: <Users className="w-8 h-8" />, label: "Expert Chefs", value: "12" },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/restaurant-interior-5a8adc19-1782825881561.webp"
            alt="About Bella Vista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Culinary Artistry with a Soul</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Bella Vista, we believe that food is a universal language that brings people together. Our philosophy is rooted in the tradition of Mediterranean hospitality, combined with a commitment to culinary innovation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-serif text-2xl font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Mission
                  </h4>
                  <p className="text-muted-foreground">To provide an unforgettable dining experience through exceptional food, impeccable service, and a warm atmosphere.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-serif text-2xl font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Vision
                  </h4>
                  <p className="text-muted-foreground">To be the most loved culinary destination in the city, celebrated for our authenticity and creativity.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1550966841-3ee71448fa0d?auto=format&fit=crop&q=80&w=1200"
                alt="Chef plating"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                  {stat.icon}
                </div>
                <div className="text-4xl font-serif font-bold">{stat.value}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Chef */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1b3e2907-e746-4278-82a5-91d4860021ba/chef-action-7c4cf6ea-1782825881640.webp"
                  alt="Executive Chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-primary/95 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden lg:block text-primary-foreground transform -rotate-12">
                <p className="font-serif italic text-xl">"Cooking is a form of love made visible."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm block">The Mastermind</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Chef Giovanni Marco</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 20 years of experience in Michelin-starred kitchens across Europe, Chef Giovanni brings a wealth of knowledge and passion to Bella Vista. His culinary style is defined by clean flavors, seasonal ingredients, and artistic presentation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chef Giovanni personally oversees every plate that leaves the kitchen, ensuring that it meets our rigorous standards of quality and excellence.
            </p>
            <div className="pt-6">
              <img
                src="https://images.unsplash.com/photo-1583531172005-814191b8b6c0?auto=format&fit=crop&q=80&w=200"
                alt="Signature"
                className="h-20 opacity-50 dark:invert"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
