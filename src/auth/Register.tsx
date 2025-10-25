// src/auth/Register.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  // Función dummy para registro social
  const handleSocialRegister = (provider: string) => {
    console.log(`Registrándose con ${provider}`);
    // Lógica real de registro social aquí
  };

  return (
    <div className="bg-gradient-to-b from-teal-800 to-cyan-500 min-h-screen flex items-center justify-center p-6">
      {/* Card principal */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        {/* Columna izquierda: Bienvenida */}
        <div className="bg-cyan-200 p-8 md:p-12 flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bienvenido
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Para unirte a nuestra comunidad por favor llenar los datos requeridos
          </p>
          <Link 
            to="/login" 
            className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full border border-gray-300 transition-colors duration-300"
          >
            Iniciar sesión
          </Link>
        </div>

        {/* Columna derecha: Formulario de registro */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Crear una cuenta</h2>
          
          {/* Botones de redes sociales */}
          <div className="flex justify-center space-x-4 mb-6">
            {/* Google */}
            <button 
              onClick={() => handleSocialRegister('Google')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google" 
                className="w-5 h-5" 
              />
            </button>
            
            {/* Facebook */}
            <button 
              onClick={() => handleSocialRegister('Facebook')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%282021%29.png" 
                alt="Facebook" 
                className="w-5 h-5" 
              />
            </button>
            
            {/* Instagram */}
            <button 
              onClick={() => handleSocialRegister('Instagram')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                alt="Instagram" 
                className="w-5 h-5" 
              />
            </button>
            
            {/* X (Twitter) */}
            <button 
              onClick={() => handleSocialRegister('X')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/X_logo_2023.svg" 
                alt="X" 
                className="w-5 h-5" 
              />
            </button>
            
            {/* Apple */}
            <button 
              onClick={() => handleSocialRegister('Apple')}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Apple" 
                className="w-5 h-5" 
              />
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mb-6">O usa tu email para registrarte</p>

          {/* Campos de registro */}
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Usuario"
                className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 01-4-4V8a4 4 0 018 0v2a4 4 0 01-4 4z" />
                </svg>
              </span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 4.5" />
                </svg>
              </span>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v6h8z" />
                </svg>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 rounded-full transition-colors duration-300"
            >
              Registrarse
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Al registrarte, aceptas nuestros{' '}
            <Link to="#" className="text-blue-500 hover:underline">Términos y Condiciones</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;