// App.jsx (actualizado con Routes)

import { Link, Routes, Route } from 'react-router-dom';
import CAPYlOGO from './assets/capy_logo.png';
import Login from './auth/Login.tsx';
import Register from './auth/Register.tsx';

function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal (home) */}
        <Route path="/" element={
          <div className="bg-gradient-to-b from-teal-800 to-cyan-500 min-h-screen flex flex-col items-center justify-center p-6">
            {/* Header Navigation */}
            <nav className="absolute top-6 right-6 flex space-x-8 text-white text-sm font-medium">
              <a href="#" className="hover:underline">Explora Libremente</a>
              <a href="#" className="hover:underline">Sobre Nosotros</a>
              <a href="#" className="hover:underline">Contáctanos</a>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
              {/* Logo */}
              <div className="w-48 h-48 relative">
                <img 
                  src={CAPYlOGO}
                  alt="Capybara Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  <span className="text-cyan-400">Cap</span>ybara
                </h1>
                <p className="text-xl text-white mb-8 italic">"Libertad de ser tú."</p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link 
                    to="/login" 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors duration-300 text-center no-underline"
                  >
                    Iniciar sesion
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors duration-300 text-center no-underline"
                  >
                    Unete Hora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        } />

        {/* Ruta de Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta de Registro */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;