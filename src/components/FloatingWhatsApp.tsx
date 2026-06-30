import * as React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
    >
      <MessageCircle size={24} fill="currentColor" />
    </motion.a>
  );
};
