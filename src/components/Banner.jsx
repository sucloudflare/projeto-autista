import React from 'react';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white py-4"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/100x100/FFB6C1/ffffff?text=❤️" alt="Amor e Inclusão" className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">Amor e Inclusão</h2>
            <p className="text-sm opacity-90">"Deixai vir a mim as crianças" - Marcos 10:14</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium">CAPS Sobradinho-BA: (74) 3538-2000</p>
          <p className="text-sm font-medium">Emergência: 192</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;