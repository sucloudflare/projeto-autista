import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: "Aprendendo Cores com Amor",
    description: "Vídeo educativo sobre cores primárias e secundárias",
    duration: "5:30",
    category: "Educacional",
    thumbnailUrl: "https://placehold.co/300x200/FFB6C1/white?text=Cores",
    type: "Desenho Animado"
  },
  {
    id: 2,
    title: "Jesus e as Crianças",
    description: "História bíblica adaptada para crianças especiais",
    duration: "7:15",
    category: "Religioso",
    thumbnailUrl: "https://placehold.co/300x200/90EE90/white?text=Jesus",
    type: "Animação Bíblica"
  },
  {
    id: 3,
    title: "Histórias de Superação",
    description: "Depoimentos reais de famílias com crianças autistas",
    duration: "10:00",
    category: "Documentário",
    thumbnailUrl: "https://placehold.co/300x200/87CEEB/white?text=Histórias",
    type: "Depoimento"
  },
  {
    id: 4,
    title: "Terapia na CAPS Sobradinho",
    description: "Documentário sobre tratamentos realizados no CAPS",
    duration: "15:20",
    category: "Institucional",
    thumbnailUrl: "https://placehold.co/300x200/DDA0DD/white?text=CAPS",
    type: "Documentário"
  },
  {
    id: 5,
    title: "Música e Movimento",
    description: "Atividades musicais para desenvolvimento motor",
    duration: "8:45",
    category: "Terapêutico",
    thumbnailUrl: "https://placehold.co/300x200/F0E68C/white?text=Música",
    type: "Atividade"
  }
];

function Videos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text">
        Vídeos Educativos e Inspiradores
      </h1>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const VideoCard = ({ video }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="relative">
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
        {video.duration}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-primary-600 mb-2">{video.title}</h3>
      <p className="text-gray-600 mb-4">{video.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
          {video.type}
        </span>
        <span className="text-gray-500 text-sm">{video.category}</span>
      </div>
    </div>
  </motion.div>
);

export default Videos;