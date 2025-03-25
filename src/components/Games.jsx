import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    id: 1,
    title: "Quebra-Cabeça Sensorial",
    description: "Jogo de encaixe com formas e texturas diferentes",
    difficulty: "Fácil",
    category: "Coordenação Motora",
    imageUrl: "https://placehold.co/300x200/purple/white?text=Quebra-Cabeça",
  },
  {
    id: 2,
    title: "Memória das Emoções",
    description: "Combine pares de cartas com expressões faciais",
    difficulty: "Médio",
    category: "Desenvolvimento Social",
    imageUrl: "https://placehold.co/300x200/blue/white?text=Memória",
  },
  {
    id: 3,
    title: "Sequência Musical",
    description: "Repita as sequências de sons e cores",
    difficulty: "Fácil",
    category: "Música e Ritmo",
    imageUrl: "https://placehold.co/300x200/green/white?text=Música",
  },
  {
    id: 4,
    title: "Labirinto das Cores",
    description: "Encontre o caminho seguindo as cores corretas",
    difficulty: "Médio",
    category: "Raciocínio Lógico",
    imageUrl: "https://placehold.co/300x200/red/white?text=Labirinto",
  },
  {
    id: 5,
    title: "Palavras e Imagens",
    description: "Associe palavras com suas respectivas imagens",
    difficulty: "Médio",
    category: "Alfabetização",
    imageUrl: "https://placehold.co/300x200/orange/white?text=Palavras",
  },
];

function Games() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
        Jogos Educativos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </motion.div>
  );
}

const GameCard = ({ game }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img
      src={game.imageUrl}
      alt={game.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{game.title}</h3>
      <p className="text-gray-600 mb-4">{game.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          {game.difficulty}
        </span>
        <span className="text-gray-500 text-sm">{game.category}</span>
      </div>
    </div>
  </motion.div>
);

export default Games;