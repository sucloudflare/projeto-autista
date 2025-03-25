import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: "Guia para Pais",
    description: "Informações e dicas para auxiliar no desenvolvimento da criança",
    type: "PDF",
    icon: "📚",
  },
  {
    id: 2,
    title: "Atividades Diárias",
    description: "Sugestões de rotinas e atividades para fazer em casa",
    type: "Lista",
    icon: "📝",
  },
  {
    id: 3,
    title: "Exercícios de Coordenação",
    description: "Atividades para desenvolver habilidades motoras",
    type: "Guia",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Comunicação Alternativa",
    description: "Recursos para auxiliar na comunicação",
    type: "Material",
    icon: "💭",
  },
  {
    id: 5,
    title: "Apoio Emocional",
    description: "Recursos para gestão das emoções",
    type: "Guia",
    icon: "❤️",
  },
];

function Resources() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-purple-600 mb-8 text-center">
        Recursos e Materiais
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </motion.div>
  );
}

const ResourceCard = ({ resource }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-4xl mb-4">{resource.icon}</div>
    <h3 className="text-xl font-semibold text-purple-600 mb-2">{resource.title}</h3>
    <p className="text-gray-600 mb-4">{resource.description}</p>
    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
      {resource.type}
    </span>
  </motion.div>
);

export default Resources;