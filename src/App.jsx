import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaGamepad, FaVideo, FaBook, FaBars, FaTimes } from 'react-icons/fa';
import Games from './components/Games';
import Videos from './components/Videos';
import Resources from './components/Resources';
import Home from './components/Home';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Forum from './components/Forum';

// Move itemVariants outside of App component so it's accessible to NavLink
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <Banner />
        <nav className="glass sticky top-0 z-50 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-3xl font-display font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text"
                >
                  EspecialMente
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="mobile-touch-target p-2 rounded-lg text-gray-600 hover:text-primary-600 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </motion.button>
              </div>

              {/* Desktop Navigation */}
              <motion.div
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="hidden md:flex items-center space-x-8"
              >
                <NavLink to="/" icon={<FaHome />} text="Início" />
                <NavLink to="/games" icon={<FaGamepad />} text="Jogos" />
                <NavLink to="/videos" icon={<FaVideo />} text="Vídeos" />
                <NavLink to="/resources" icon={<FaBook />} text="Recursos" />
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden glass"
              >
                <div className="px-4 py-4 space-y-2">
                  <MobileNavLink to="/" icon={<FaHome />} text="Início" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink to="/games" icon={<FaGamepad />} text="Jogos" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink to="/videos" icon={<FaVideo />} text="Vídeos" onClick={() => setIsMenuOpen(false)} />
                  <MobileNavLink to="/resources" icon={<FaBook />} text="Recursos" onClick={() => setIsMenuOpen(false)} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Home /><Forum /></>} />
            <Route path="/games" element={<Games />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

const NavLink = ({ to, icon, text }) => (
  <motion.div variants={itemVariants}>
    <Link
      to={to}
      className="nav-link flex items-center space-x-2 font-medium"
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, icon, text, onClick }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
    className="hover-card"
  >
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-white/50"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{text}</span>
    </Link>
  </motion.div>
);

export default App;