import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaClock, FaHeart, FaComment } from 'react-icons/fa';

function Forum() {
  const [posts] = useState([
    {
      id: 1,
      author: "Maria (Mãe do João)",
      date: "2024-02-10",
      content: "Meu filho autista tem feito um progresso incrível com as atividades sugeridas aqui!",
      likes: 15,
      comments: 3
    },
    {
      id: 2,
      author: "Dr. Pedro (Psicólogo)",
      date: "2024-02-09",
      content: "Importante lembrar que cada criança tem seu próprio tempo de desenvolvimento. Vamos celebrar cada pequena conquista!",
      likes: 23,
      comments: 5
    },
    {
      id: 3,
      author: "Ana (Terapeuta Ocupacional)",
      date: "2024-02-08",
      content: "Compartilhando algumas atividades sensoriais que têm funcionado muito bem nas nossas sessões...",
      likes: 18,
      comments: 7
    }
  ]);

  return (
    <div className="py-12 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text">
          Fórum da Comunidade
        </h2>

        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-soft p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">{post.author}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaClock className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <button className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                  <FaHeart />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-primary-600 transition-colors">
                  <FaComment />
                  <span>{post.comments}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;