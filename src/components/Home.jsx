import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16"
    >
      <section className="text-center relative overflow-hidden py-16">
        <motion.div
          variants={itemVariants}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text">
            Bem-vindo ao EspecialMente
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Um espaço mágico e inclusivo onde aprender é uma aventura divertida e especial
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/games">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Explorar Jogos
              </motion.button>
            </Link>
            <Link to="/videos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Ver Vídeos
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '-3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '-1.5s' }}></div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Jogos Educativos"
          description="Jogos especialmente desenvolvidos para estimular o aprendizado de forma divertida e adaptada"
          icon="🎮"
          color="from-primary-500 to-primary-600"
        />
        <FeatureCard
          title="Vídeos Interativos"
          description="Conteúdo audiovisual cuidadosamente selecionado e adaptado para diferentes necessidades"
          icon="🎥"
          color="from-secondary-500 to-secondary-600"
        />
        <FeatureCard
          title="Recursos para Pais"
          description="Guias, materiais e ferramentas para auxiliar no desenvolvimento e aprendizado"
          icon="📚"
          color="from-accent-500 to-accent-600"
        />
      </section>
    </motion.div>
  );
}

const FeatureCard = ({ title, description, icon, color }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.03 }}
    className="card p-8 hover:shadow-lg transition-all duration-300"
  >
    <div className={`text-5xl mb-6 bg-gradient-to-br ${color} text-transparent bg-clip-text`}>
      {icon}
    </div>
    <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Home;