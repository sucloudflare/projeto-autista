import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  const professionals = [
    {
      name: "Dra. Maria Silva",
      role: "Psicopedagoga",
      contact: "(74) 98765-4321",
      crp: "CRP 03/12345"
    },
    {
      name: "Dr. João Santos",
      role: "Psiquiatra",
      contact: "(74) 98765-4322",
      crm: "CRM-BA 12345"
    },
    {
      name: "Dra. Ana Oliveira",
      role: "Psicóloga",
      contact: "(74) 98765-4323",
      crp: "CRP 03/54321"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Profissionais</h3>
            <div className="space-y-4">
              {professionals.map((prof, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-4 rounded-lg"
                >
                  <p className="font-bold text-blue-300">{prof.name}</p>
                  <p className="text-sm">{prof.role}</p>
                  <p className="text-sm">{prof.contact}</p>
                  <p className="text-xs text-gray-400">{prof.crp || prof.crm}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">CAPS Sobradinho-BA</h3>
            <address className="not-italic space-y-2">
              <p><FaMapMarkerAlt className="inline mr-2 text-red-400" /> Rua Principal, 123</p>
              <p><FaPhone className="inline mr-2 text-green-400" /> (74) 3538-2000</p>
              <p><FaEnvelope className="inline mr-2 text-yellow-400" /> caps@sobradinho.ba.gov.br</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Sobre o Projeto</h3>
            <p className="mb-4">
              Desenvolvido com <FaHeart className="inline text-red-500" /> para proporcionar
              um espaço inclusivo e acolhedor para todas as crianças especiais.
            </p>
            <div className="mt-4">
              <h4 className="font-bold mb-2 text-blue-300">Idealizadores:</h4>
              <ul className="space-y-2">
                <li>Maria da Inclusão - Coordenadora CAPS</li>
                <li>João do Amor - Psicólogo</li>
                <li>Ana do Carinho - Terapeuta Ocupacional</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} EspecialMente - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
